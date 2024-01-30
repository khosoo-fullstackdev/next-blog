export default function Highlight(data) {
  const hlNews = data.data;
  console.log(hlNews[0]);

  return (
    <div className="bg-red-200 w-[1216px] h-[600px] rounded-xl">
      <div>
        <p>Technology</p>
        <p>{hlNews[0].title}</p>
        <p></p>
      </div>
    </div>
  );
}
