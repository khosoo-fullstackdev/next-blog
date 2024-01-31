import { Source_Serif_4 } from "next/font/google";
import React from "react";

export default function Blog() {
  return (
    <div className="flex w-[1216px] items-center gap-[30px]">
      <div className="flex items-center gap-5">
        <li className="text-[#D4A373] font-sans text-[12px] not-italic font-bold leading-[25px]">
          All
        </li>
        <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
          Design
        </li>
        <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
          Travel
        </li>
        <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
          Fashion
        </li>
        <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
          Technology
        </li>
        <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
          Branding
        </li>
      </div>
      <div className=""></div>
    </div>
  );
}

// export const getStaticProps = async (context) => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await result.json();
//   console.log(data);
//   return {
//     props: { data: data },
//   };
// };
