import Highlight from "./components/Highlight";
import Trending from "./components/Trending";
import Blogs from "./components/Blogs";

export default function Home(props) {
  return (
    <div className="flex flex-col m-auto">
      <Highlight data={props.hlData} />
      <Trending data={props.trendData} />
      <Blogs data={props.postData} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const highlight = await fetch("https://dev.to/api/articles?top=1&per_page=1");
  const hlData = await highlight.json();
  const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const trendData = await trend.json();
  const post = await fetch("https://dev.to/api/articles?top=1&per_page=9");
  const postData = await post.json();

  return {
    props: { hlData, trendData, postData },
  };
};
