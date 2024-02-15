import React, { useEffect, useState } from "react";
import { Highlight, Trend, Post, LoadMore } from "@/components";

// const { hlData, trendData, postData } = props;
export default function Page({ hlData, trendData, postData }) {
  return (
    <div className="flex flex-col items-center gap-[100px]  m-auto justify-center dark:bg-white">
      <Highlight hlData={hlData} />
      <Trend trendData={trendData} />
      <Post postData={postData} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // const highlight = await fetch("https://next-api-zeta.vercel.app/api/highlight");
  // const hlData = await highlight.json();

  // const trend = await fetch("https://next-api-zeta.vercel.app/api/trend");
  // const trendData = await trend.json();

  // const post = await fetch("https://next-api-zeta.vercel.app/api/post");
  // const postData = await post.json();

  const data = await fetch("https://dev.to/api/articles?top=1&per_page=5");
  const hlData = await data.json();

  const tData = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const trendData = await tData.json();

  const pData = await fetch("https://dev.to/api/articles?top=30&per_page=9");
  const postData = await pData.json();

  return {
    props: { hlData, trendData, postData },
  };
};
