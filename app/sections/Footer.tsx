import Image from "next/image";
import React from "react";
import footerImg from "@/public/Image2.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="bg-[#F99F1C] w-full px-10 md:px-20 2xl:px-30 mt-28 lg:mt-48 pt-8 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
        <div className="relative w-full lg:w-4/5">
          <input
            type="search"
            id="default-search"
            className="block w-full py-4 ps-10 pe-2 text-sm text-gray-900 border-none focus:outline-orange-300 rounded-2xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="button"
            className="lg:text-white absolute end-2.5 bottom-[6px] text-orange lg:bg-orange-500 lg:hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-[12px] text-xs md:text-sm py-2 px-2 lg:w-36"
          >
            Subscribe
            {/* icon arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block ml-2 text-orange-500 lg:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between items-center w-full my-4 lg:my-8  text-center lg:text-left">
          {/* logo */}
          <div>
            <a className="text-2xl font-bold">
              pti
              <span className="text-3xl font-semibold text-orange-600">.</span>
            </a>
            <p className="text-sm font-semibold my-4">
              Copyright@Tripp.All Right Reserved
            </p>
          </div>
          {/* social icons */}
          <div className="flex gap-2 mt-8">
            <SocialIcon
              url="www.google.com"
              bgColor="#FEDDBA"
              fgColor="#FD6011"
              style={{ height: "40px", width: "40px" }}
            ></SocialIcon>
            <SocialIcon
              url="www.instagram.com"
              bgColor="#FEDDBA"
              fgColor="#FD6011"
              style={{ height: "40px", width: "40px" }}
            ></SocialIcon>
            <SocialIcon
              url="www.twitter.com"
              bgColor="#FEDDBA"
              fgColor="#FD6011"
              style={{ height: "40px", width: "40px" }}
            ></SocialIcon>
          </div>
        </div>
      </div>
      <Image
        alt="hero image"
        src={footerImg}
        height={320}
        className="hidden lg:block"
      ></Image>
    </div>
  );
}
