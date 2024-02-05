import React from "react";
import parse from "html-react-parser";

const Page = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-[80px] mt-[120px] md:container md:mx-auto max-w-[1280px] w-[100%]">
      <div className="flex w-[800px] flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="text-[#181A2A] font-sans text-4xl not-italic font-semibold leading-7">
            {data.title}
          </h1>
        </div>
        <div className="flex items-center gap-5 border-b w-[100%] pb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-[36px] h-[36px] rounded-[28px]"
              style={{
                backgroundImage: `url(${data.user.profile_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <span className="text-[#97989F] font-sans text-[16px] not-italic font-medium leading-6">
              {data.user.name}
            </span>
          </div>
          <div>
            <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
              {new Date(data.published_at).toDateString()}
            </p>
          </div>
        </div>
        <div className="mb-[100px] gap-5">{parse(data.body_html)}</div>
      </div>
    </div>
  );
};
export default Page;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
