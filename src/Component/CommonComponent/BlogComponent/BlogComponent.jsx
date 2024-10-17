import React from "react";
import BlogImg1 from "../../../assets/BlogImg1.png";
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const BlogComponent = () => {
  return (
    <div className="w-[370px] h-[493px] shadow-xl rounded-lg hover:scale-105  duration-150 group cursor-pointer">
      <div>
        <picture>
          <img src={BlogImg1} alt={{ BlogImg1 }} className="rounded-lg" />
        </picture>
      </div>
      <div>
        <div className="flex items-center gap-x-7 pl-[14px] pt-5 text-[#151875] text-sm font-JosefinFont font-medium">
          <div className="flex items-center gap-x-2">
            <span>
              <FaPenNib className="text-[#FB2E86]" />
            </span>
            <h4>SaberAli</h4>
          </div>
          <div className="flex items-center gap-x-2">
            <span>
              <LuCalendarDays className="text-[#FFA454]" />
            </span>
            <a href="#">21 August,2020</a>
          </div>
        </div>
        <div className="pl-[19px]">
          <div className="pb-[17px] pt-[31px] ">
            <h3 className="text-[#151875] text-lg font-JosefinFont font-bold group-hover:text-[#FB2E86]">
              Top esssential Trends in 2021
            </h3>
          </div>
          <p className="text-[#72718F] text-base font-LatoFont font-normal pb-[14px]">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <a
            href="#"
            className="text-[#151875] text-base font-LatoFont font-normal underline-offset-4 underline group-hover:text-[#FB2E86]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
