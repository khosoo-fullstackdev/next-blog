import React from "react";
import { HlBadge } from "@/components";
import { LeftArrowIcon, RightArrowIcon } from "./icons";
import Link from "next/link";

export const Highlight = ({ hlData }) => {
  return (
    <div className="carousel w-full">
      <div className="md:container md:mx-auto flex gap-3 mt-[140px] carousel">
        {hlData.map((highL, key) => (
          <div
            id={key}
            className="flex flex-col w-full gap-3 carousel-item"
            key={`${highL.title}-${highL.id}`}
          >
            <div className="flex w-[100%] h-[600px] shrink-0 border rounded-[12px] relative carousel-item">
              <div className="w-[100%] h-[600px] object-cover absolute rounded-xl">
                <img
                  src={
                    highL.cover_image ? highL.cover_image : highL.social_image
                  }
                  alt=""
                  className="w-[100%] h-[600px] object-cover absolute rounded-xl"
                />
              </div>
              <div className="flex w-[598px] p-[40px] flex-col items-start gap-6 rounded-[12px] border-[#E8E8EA] bg-[#FFF] shadow-[0px_12px_24px_-6px rgba(24,26,42,0.12)] absolute left-[11px] bottom-[13px]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex gap-2 flex-wrap">
                    {highL.tag_list.map((tag, index) => (
                      <HlBadge text={tag} key={index} />
                    ))}
                  </div>
                  <div>
                    <p className="self-stretch text-[#181A2] font-sans text-[36px] font-semibold leading-10">
                      {highL.title}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                    {new Date(highL.published_at).toDateString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-[9px]">
              <a href={`#${key == 0 ? 4 : key - 1}`}>
                <div className="flex w-[40px] h-[40px] rounded-[6px] border border-[#696A75] justify-center items-center">
                  <LeftArrowIcon />
                </div>
              </a>
              <a href={`#${key == 4 ? 0 : key + 1}`}>
                <div className="flex w-[40px] h-[40px] rounded-[6px] border border-[#696A75] justify-center items-center">
                  <RightArrowIcon />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
