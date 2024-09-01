import React from "react";
import FeaturedChair1 from "../../../assets/FeaturedChair1.png";

const FeaturedCard = () => {
  return (
    <div className="w-[270px] h-[370px] rounded-xl shadow-2xl group cursor-pointer">
      <div className="pt-[46px] bg-[#F6F7FB] px-11 pb-3">
        <img src={FeaturedChair1} alt={FeaturedChair1} />
      </div>

      <div className="text-center pt-[15px] pb-3 bg-white group-hover:bg-[#2F1AC4]">
        <h2 className="text-[#FB2E86] text-lg font-LatoFont font-bold group-hover:text-white">
          Cantilever chair
        </h2>
        <div className="flex gap-x-[5px] py-3 justify-center">
          <span className="w-[14px] h-1 bg-[#05E6B7] rounded-[10px]"></span>
          <span className="w-[14px] h-1 bg-[#F701A8] rounded-[10px]"></span>
          <span className="w-[14px] h-1 bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></span>
        </div>
        <h3 className="text-[#151875] font-JosefinFont text-sm font-normal pb-3 group-hover:text-white">
          Code - Y523201
        </h3>
        <p className="text-[#151875] font-LatoFont text-sm font-normal group-hover:text-white">
          $42.00
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
