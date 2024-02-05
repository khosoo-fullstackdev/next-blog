import React, { useEffect, useState } from "react";
import { Highlight, Trend, Post, LoadMore } from "@/components";

export default function Page() {
  const [articles, getArticles] = useState([]);
  useEffect(() => {
    async function getArticle() {
      const data = await fetch("http://localhost:4000/api/blog");
      const hlData = await data.json();

      // const tData = await fetch("http://localhost:4000/api/hello");
      // const trendData = await tData.json();

      // const pData = await fetch("http://localhost:4000/api/hello");
      // const postData = await pData.json();

      getArticles(hlData);
    }
    getArticle();
  }, []);

  console.log(hlData);
  return (
    <div className="flex flex-col items-center gap-[100px] m-auto pt-[500px] justify-center">
      {/* <Highlight hlData={hlData} />
      <Trend trendData={trendData} />
      <Post postData={postData} /> */}
    </div>
  );
}

// export const getStaticProps = async (context) => {
//   const highlight = await fetch("https://dev.to/api/articles?top=1&per_page=5");
//   const hlData = await highlight.json();
//   const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
//   const trendData = await trend.json();
//   const post = await fetch("https://dev.to/api/articles?top=30&per_page=9");
//   const postData = await post.json();

//   return {
//     props: { hlData, trendData, postData },
//   };
// };
