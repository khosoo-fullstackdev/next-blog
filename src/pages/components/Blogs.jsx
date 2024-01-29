const blogs = await fetch("https://dev.to/api/articles?page=1");
console.log(blogs);

export default function Blogs() {
  return <div></div>;
}
