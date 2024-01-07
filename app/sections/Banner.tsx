import Image from "next/image";
import React from "react";
import heroImage from "@/public/heroImg.png";

export default function Banner() {
  return (
    <footer className="bg-[#F99F1C] rounded-3xl w-full px-10 md:px-20 2xl:px-30 my-24 pt-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6 my-4 lg:my-0">
        <h1 className="lg:text-[40px] text-3xl 2xl:text-5xl text-center lg:text-left font-semibold text-white leading-[3rem] tracking-wider">
          Deliver Food To Your Door Step |
        </h1>
        <p className="text-white text-lg lg:text-xl 2xl:text-2xl font-extralight text-center lg:text-left">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <Image alt="hero image" src={heroImage} height={320}></Image>
    </footer>
  );
}
