import React from "react";
import BlogImg1 from "../../../assets/BlogImg1.png";

const BlogComponent = () => {
  return (
    <div className="w-[370px] h-[493px] bg-pink-400 rounded-lg">
      <div>
        <picture>
          <img src={BlogImg1} alt={{ BlogImg1 }} className="rounded-lg" />
        </picture>
      </div>
      <div>
        <div className="flex items-center text-[#151875] text-sm font-JosefinFont font-normal">
          <h4>SaberAli</h4> <a href="#">21 August,2020</a>
        </div>
        <div className="pl-[19px]">
          <h3 className="text-[#151875] text-lg font-JosefinFont font-bold">
            Top esssential Trends in 2021
          </h3>
          <p className="text-[#72718F] text-base font-LatoFont font-normal">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <a
            href="#"
            className="text-[#151875] text-base font-LatoFont font-normal underline-offset-4 underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
