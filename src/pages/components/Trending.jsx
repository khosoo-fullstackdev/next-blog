export default function Trending(props) {
  const trendData = props.data;
  return (
    <div className="w-[1230px] h-[390px] flex-col justify-start items-center inline-flex">
      <div className="w-[184px] text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
        Trending
      </div>
      <div className="flex w-[100%]">
        <div className="flex items-start gap-5">
          {trendData.map((trend) => (
            <div
              style={{
                backgroundImage: `url(${trend.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[289px] h-[320px] shrink-0 rounded-[12px] bg-cover bg-no-repeat relative"
            >
              <div className="flex w-[230px] h-[120px] flex-col items-start gap-4 absolute left-[28.5px] bottom-[28px]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="w-[230px] h-[76px] shrink-0">
                    <p className="text-[#FFF] font-sans text-[18px] font-semibold leading-7">
                      {trend.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
