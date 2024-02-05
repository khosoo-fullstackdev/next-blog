import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex gap-12 mt-[120px] justify-center items-center md:container md:mx-auto max-w-[1280px] w-[70%] h-[600px]">
      <div className="flex justify-center items-center w-[200px] h-[200px] border-r">
        <h1 className="text-[50px]">404</h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-[#000] font-sans text-[24px] not-italic font-semibold leading-10">
          Page Not Found
        </h1>
        <p className="text-[#696A75] font-sans text-[18px] not-italic font-normal leading-[26px] w-[350px]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <div
          className="flex w-[130px] p-[10px_16px] flex-col justify-s items-center rounded-[6px] bg-[#4B6BFB]"
          onClick={() => router.push("/")}
        >
          <button className="text-[#FFF] text-center font-sans text-[14px] not-italic font-medium leading-5">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
