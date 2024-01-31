export default function Trending(props) {
  const trendData = props.data;
  return (
    <div className=" h-[390px] m-auto flex-col items-center flex">
      <div className="w-[184px] text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
        Trending
      </div>
      <div className="flex w-[100%]">
        <div className="flex items-start gap-5">
          {trendData.map((trend) => (
            <div
              style={{
                backgroundImage: `url(${trend.cover_image}) `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[289px] h-[320px] shrink-0 rounded-[12px] bg-cover bg-no-repeat"
            >
              <p className="text-[#FFF]  font-sans text-[18px] font-semibold leading-7">
                {trend.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
