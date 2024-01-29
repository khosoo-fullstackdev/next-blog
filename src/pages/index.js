import { Source_Serif_4 } from "next/font/google";
import Blog from "./blog";

export default function Home(props) {
  return (
    <div>
      <Blog />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const blogs = await fetch("https://dev.to/api/articles?page=1&per_page=1");
  const data = await blogs.json();
  console.log(data);
  return {
    props: { data: data },
  };
};
