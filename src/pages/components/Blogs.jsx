export default function Blog(props) {
  console.log(props);
  const postData = props.data;
  return (
    <div className="flex flex-col m-auto gap-[32px] w-[1231px]">
      <h1 className="text-[#181A2A] font-sans text-[24px] not-italic font-bold leading-7">
        All Blog Post
      </h1>
      <div className="flex items-start gap-5 flex-wrap">
        {postData.map((post) => (
          <div className="flex w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-[12px] border border-[#E8E8EA] bg-[#FFF]">
            <div
              className="w-[360px] h-[240px] rounded-[6px]"
              style={{
                backgroundImage: `url(${post.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex p-2 flex-col items-start gap-5 self-stretch">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div></div>
                  <div className="self-stretch">
                    <p className="text-[#181A2A] font-sans text-[24px] not-italic font-semibold leading-7">
                      {post.title}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                  {post.published_at}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
