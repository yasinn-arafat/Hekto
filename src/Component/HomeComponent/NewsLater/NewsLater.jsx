import React from "react";
import NewsLaterImg from "../../../assets/Newslater.png";
import NewsLaterBrands from "../../../assets/NewslaterBrands.png";

const NewsLater = () => {
  return (
    <>
      <div className="mb-20 ">
        <div className="relative">
          <div className="cursor-pointer">
            <picture>
              <img src={NewsLaterImg} alt={NewsLaterImg} />
            </picture>
          </div>
          <div className="absolute top-[38%] right-1/2 translate-x-1/2 flex flex-col justify-center items-center gap-y-6">
            <h2 className="w-[585px] text-[#151875] text-4xl text-center leading-[50px] font-JosefinFont font-bold">
              Get Leatest Update By Subscribe Our Newslater
            </h2>
            <div>
              <button className="py-3 px-10 text-white bg-[#FB2E86] font-JosefinFont font-normal text-[17px] rounded-md hover:bg-[#151875] duration-150">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col justify-center items-center mt-20 cursor-pointer">
            <picture>
              <img src={NewsLaterBrands} alt={NewsLaterBrands} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLater;
