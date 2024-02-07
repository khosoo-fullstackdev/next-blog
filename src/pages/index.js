import React, { useEffect, useState } from "react";
import { Highlight, Trend, Post, LoadMore } from "@/components";

// const { hlData, trendData, postData } = props;
export default function Page({ hlData, trendData, postData }) {
  // const [articles, getArticles] = useState([]);

  // useEffect(() => {
  //   async function getArticle() {
  //     const data = await fetch("http://localhost:4000/api/blog");
  //     const hlData = await data.json();

  //     // const tData = await fetch("http://localhost:4000/api/hello");
  //     // const trendData = await tData.json();

  //     // const pData = await fetch("http://localhost:4000/api/hello");
  //     // const postData = await pData.json();

  //     getArticles(hlData);
  //     console.log(hlData);
  //   }
  //   getArticle();
  // }, []);

  return (
    <div className="flex flex-col items-center gap-[100px] m-auto justify-center dark:bg-white">
      <Highlight hlData={hlData} />
      <Trend trendData={trendData} />
      <Post postData={postData} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const highlight = await fetch(
    "https://next-api-zeta.vercel.app/api/highlight"
  );
  const hlData = await highlight.json();
  const trend = await fetch("https://next-api-zeta.vercel.app/api/trend");
  const trendData = await trend.json();
  const post = await fetch("https://next-api-zeta.vercel.app/api/post");
  const postData = await post.json();

  return {
    props: { hlData, trendData, postData },
  };
};
