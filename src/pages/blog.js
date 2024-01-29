import { Source_Serif_4 } from "next/font/google";
import React from "react";

export default function Blog(props) {
  return <div>{props.data.title}</div>;
}

export const getStaticProps = async (context) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();
  console.log(data);
  return {
    props: { data: data },
  };
};

const blogs = await fetch("https://dev.to/api/articles?page=1");
console.log(blogs);
