import { Source_Serif_4 } from "next/font/google";
import Highlight from "./components/Highlight";
import Header from "./components/Header";
import Trending from "./components/Trending";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export default function Home(props) {
  return (
    <div className="flex flex-col m-auto">
      <Header />
      <Highlight data={props.data} />
      <Trending data={props.data} />
      <Blogs data={props.data} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const blogs = await fetch("https://dev.to/api/articles?page=1");
  const data = await blogs.json();
  console.log(data);
  return {
    props: { data: data },
  };
};
