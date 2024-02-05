import React from "react";
import { TrendBadge } from "@/components";
import Link from "next/link";

export const Trend = (props) => {
  return (
    <div className="flex md:container md:mx-auto max-w-[1280px] w-[100%] flex-col items-start gap-[30px]">
      <div className="w-[184px]">
        <p className="text-[#181A2A] font-sans text-[24px] not-italic font-bold leading-7">
          Trending
        </p>
      </div>
      <div className="flex justify-between w-[100%]">
        {props.trendData.map((trend) => (
          <Link href={`/article/${trend.id}`}>
            <div
              style={{
                backgroundImage: `url(${
                  trend.cover_image ? trend.cover_image : trend.social_image
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[289px] h-[320px] shrink-0 rounded-[12px] bg-cover bg-no-repeat relative"
              key={`${trend.title}-${trend.id}`}
            >
              <div className="flex w-[230px] h-[120px] flex-col items-start gap-4 absolute left-[28.5px] bottom-[28px]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex gap-2 flex-wrap">
                    {trend.tag_list.map((tag, index) => (
                      <TrendBadge text={tag} key={index} />
                    ))}
                  </div>
                  <div className="w-[230px] h-[76px] shrink-0">
                    <p className="text-[#FFF] font-sans text-[18px] font-semibold leading-7">
                      {trend.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
