import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstaIcon,
  LinkedinIcon,
  MegaIcon,
} from "./icons";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex h-[495px] pt-[64px]  mx-auto flex-col items-start gap-[25px] shrink-0 border-t border-[#E8E8EA] bg-[#F6F6F7]">
      <div className="flex flex-col mx-auto gap-5 max-w-[1280px] w-[100%]">
        <div className="flex items-start gap-5 w-[100%]">
          <div className="flex w-[289px] flex-col items-start gap-6 shrink-0">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-[#181A2A] font-sans text-[18px] not-italic font-semibold leading-7">
                About
              </h3>
              <div className="w-[280px]">
                <p className="text-[#696A75] font-sans text-[16px] not-italic font-normal leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div>
                <span className="text-[#181A2A] font-sans text-[16px] not-italic font-normal leading-6">
                  Email :
                </span>
                <span className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                  info@jstemplate.net
                </span>
              </div>
              <div>
                <span className="text-[#181A2A] font-sans text-[16px] not-italic font-normal leading-6">
                  Phone :
                </span>
                <span className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                  880 123 456 789
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[521px] justify-center items-start gap-20 shrink-0">
            <div className="flex flex-col items-start gap-2">
              <p
                className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6 cursor-pointer"
                onClick={() => router.push("/")}
              >
                Home
              </p>
              <p
                className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6 cursor-pointer"
                onClick={() => router.push("/blog")}
              >
                Blog
              </p>
              <p
                className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6 cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                Contact
              </p>
            </div>
          </div>
          <div className="flex gap-[26.67px] justify-start">
            <div className="w-4 h-4 shrink-0">
              <FacebookIcon />
            </div>
            <div className="w-4 h-4 shrink-0">
              <TwitterIcon />
            </div>
            <div className="w-4 h-4 shrink-0">
              <InstaIcon />
            </div>
            <div className="w-4 h-4 shrink-0">
              <LinkedinIcon />
            </div>
          </div>
        </div>
        <div className="flex  h-[95px] p-[32px_0] items-center gap-16 shrink-0 border-t border-[#DCDDDF]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[48px] h-[48px]" onClick={() => router.push("/")}>
              <MegaIcon />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <div>
                <span className="text-[#141624] font-sans text-[20px] not-italic font-normal leading-7">
                  Meta
                </span>
                <span className="text-[#141624] font-sans text-[20px] not-italic font-extrabold leading-7">
                  Blog
                </span>
              </div>
              <div>
                <p className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                  © All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 flex-[1_0_0]">
            <span className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
              Terms of Use
            </span>
            <span className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
              Privacy Policy
            </span>
            <span className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
