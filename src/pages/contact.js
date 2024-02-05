import React from "react";

const Contact = () => {
  return (
    <div className="md:container md:mx-auto max-w-[1280px] w-[100%] flex flex-col items-center gap-[100px] mt-[120px]">
      <div className="w-[895px] h-[895px] items-center flex flex-col">
        <div className="flex w-[769px] h-[389px] p-[14px_10px_0px_10px] flex-col items-center gap-5 shrink-0">
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-[#000] font-sans text-[36px] not-italic font-semibold leading-10">
              Contact Us
            </h3>
            <div className="w-[624px] h-[103px]">
              <p className="text-[#696A75] fons-sans text-[16px] not-italic font-normal leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniams
              </p>
            </div>
          </div>
          <div className="flex p-[10px_0] items-center gap-[50px]">
            <div className="flex w-[294px] h-[133px] p-[16px] flex-col items-start gap-[10px] rounded-[12px] border border-[#E8E8EA]">
              <h3 className="text-[#000] font-sans text-[24px] not-italic font-semibold leading-10">
                Address
              </h3>
              <div className="w-[260px]">
                <p className="text-[#696A75] font-sans text-[18px] not-italic font-normal leading-[26px]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
            </div>
            <div className="flex w-[294px] h-[133px] p-[16px] flex-col items-start gap-[10px] rounded-[12px] border border-[#E8E8EA]">
              <h3 className="text-[#000] font-sans text-[24px] not-italic font-semibold leading-10">
                Contact
              </h3>
              <div className="flex flex-col w-[260px] flex-wrap">
                <p className="text-[#696A75] font-sans text-[18px] not-italic font-normal leading-[26px]">
                  313-332-8662
                </p>
                <p className="text-[#696A75] font-sans text-[18px] not-italic font-normal leading-[26px]">
                  info@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-[29px_130px_26px_35px] items-center rounded-[10px] bg-[#F6F6F7]">
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-[#000] font-sans text-[18px] not-italic font-semibold leading-[26px]">
              Leave a Message
            </h3>
            <div className="flex flex-col justify-between w-[478px] h-[317px] shrink-0">
              <div className="flex w-[100%] h-[39px] shrink-0 gap-[28px]">
                <div className="flex w-[225px] h-[38px] p-[14px_14px_14px_20px] items-center gap-3 shrink-0 rounded-[5px] border border-[#DCDDDF] bg-[#FFF] ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-[26px]"
                  />
                </div>
                <div className="flex w-[225px] h-[38px] p-[14px_14px_14px_20px] items-center gap-3 shrink-0 rounded-[5px] border border-[#DCDDDF] bg-[#FFF]">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-[26px]"
                  />
                </div>
              </div>
              <div className="flex w-[478px] h-[35px] p-[14px_14px_14px_20px] items-center gap-3 shrink-0 rounded-[5px] border border-[#DCDDDF] bg-[#FFF]">
                <input
                  type="text"
                  placeholder="Subject"
                  className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-[24px]"
                />
              </div>
              <div className="flex w-[478px] h-[134px] p-[14px_14px_14px_20px] items-center gap-3 shrink-0 rounded-[5px] border border-[#DCDDDF] bg-[#FFF]">
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="5"
                  placeholder="Write a message"
                  className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-[24px]"
                ></textarea>
              </div>
              <div>
                <div className="flex w-[130px] p-[10px_16px] flex-col justify-s items-center rounded-[6px] bg-[#4B6BFB]">
                  <button className="text-[#FFF] text-center font-sans text-[14px] not-italic font-medium leading-5">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
