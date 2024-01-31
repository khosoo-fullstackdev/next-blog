export default function Highlight(data) {
  const hlNews = data.data;

  return (
    <div
      style={{
        backgroundImage: `url(${hlNews[0].cover_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[1216px] m-auto h-[600px] rounded-xl relative"
    >
      <div className="absolute text-white">
        <p>Technology</p>
        <p>{hlNews[0].title}</p>
        <p></p>
      </div>
    </div>
  );
}
