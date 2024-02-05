import { TagFilter } from "@/components";
import { PostBadge } from "@/components";
import { LoadMore } from "@/components/Buttons";
import { useState } from "react";
import Link from "next/link";

const Fashion = (props) => {
  const [articles, setArticles] = useState(props.postData);
  const [pageNumber, setPageNumber] = useState(2);

  async function LoadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=branding&per_page=3&page=${pageNumber}`
    );
    const data = await response.json();
    setArticles([...articles, ...data]);
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="flex flex-col gap-12 mt-[120px] md:container md:mx-auto max-w-[1280px] w-[100%]">
      <TagFilter />
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-[32px] w-[1231px]">
          <div className="flex items-start justify-between gap-5 flex-wrap">
            {articles.map((post) => (
              <Link href={`/article/${post.id}`}>
                <div
                  className="flex w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-[12px] border border-[#E8E8EA] bg-[#FFF]"
                  key={`${post.title}-${post.id}`}
                >
                  <div
                    className="w-[360px] h-[240px] rounded-[6px]"
                    style={{
                      backgroundImage: `url(${
                        post.cover_image ? post.cover_image : post.social_image
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="flex p-2 flex-col items-start gap-5 self-stretch">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                      <div className="flex flex-col items-start gap-4 self-stretch">
                        <div className="flex gap-2 flex-wrap">
                          {post.tag_list.map((tag, index) => (
                            <PostBadge text={tag} key={index} />
                          ))}
                        </div>
                        <div className="self-stretch">
                          <p className="text-[#181A2A] font-sans text-[24px] not-italic font-semibold leading-7">
                            {post.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-[36px] h-[36px] rounded-[28px]"
                          style={{
                            backgroundImage: `url(${post.user.profile_image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <span className="text-[#97989F] font-sans text-[16px] not-italic font-medium leading-6">
                          {post.user.name}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                          {new Date(post.published_at).toDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex mt-[100px] mx-auto" onClick={LoadMoreHandler}>
          <LoadMore />
        </div>
      </div>
    </div>
  );
};
export default Fashion;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const post = await fetch(
    "https://dev.to/api/articles?tag=fashion&per_page=12"
  );
  const postData = await post.json();

  return {
    props: { postData },
  };
};
