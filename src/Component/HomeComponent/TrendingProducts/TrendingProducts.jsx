import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import OfferCard from "../../CommonComponent/OfferCard/OfferCard";
import TrendingProductImg from "../../../assets/TrendingProduct3.png";
import TrendingImgBottom1 from "../../../assets/Trending-5.png";
import TrendingImgBottom2 from "../../../assets/Trending-6.png";
import TrendingImgBottom3 from "../../../assets/Trending-7.1.png";

const TrendingProducts = () => {
  return (
    <>
      <div className="py-28 bg-[#FFFFFF]">
        <div className="container">
          <div>
            <CommonTitle Title={"Trending Products"} />

            <div className="flex items-center gap-x-12 justify-center pt-10 cursor-pointer ">
              <OfferCard
                className={
                  "bg-white shadow-2xl w-[270px] h-[350px] flex flex-col items-center hover:scale-110 duration-150"
                }
              >
                <div>
                  <picture>
                    <img
                      src={TrendingProductImg}
                      alt={TrendingProductImg}
                      className="pt-3"
                    />
                  </picture>
                </div>

                <div className="pt-[15px] flex flex-col items-center">
                  <h6 className="text-[#151875] font-LatoFont font-bold text-base">
                    Cantilever chair
                  </h6>
                  <div className="flex items-center gap-x-3">
                    <h6 className="text-[#151875] font-JosefinFont font-normal text-sm">
                      $26.00
                    </h6>
                    <p className="text-[#151875] font-JosefinFont line-through font-normal text-xs opacity-30">
                      $42.00
                    </p>
                  </div>
                </div>
              </OfferCard>

              <OfferCard
                className={
                  "bg-white shadow-2xl w-[270px] hover:scale-110 duration-150 h-[350px] flex flex-col items-center"
                }
              >
                <div>
                  <picture>
                    <img
                      src={TrendingProductImg}
                      alt={TrendingProductImg}
                      className="pt-3"
                    />
                  </picture>
                </div>

                <div className="pt-[15px] flex flex-col items-center">
                  <h6 className="text-[#151875] font-LatoFont font-bold text-base">
                    Cantilever chair
                  </h6>
                  <div className="flex items-center gap-x-3">
                    <h6 className="text-[#151875] font-JosefinFont font-normal text-sm">
                      $26.00
                    </h6>
                    <p className="text-[#151875] font-JosefinFont line-through font-normal text-xs opacity-30">
                      $42.00
                    </p>
                  </div>
                </div>
              </OfferCard>

              <OfferCard
                className={
                  "bg-white shadow-2xl w-[270px] h-[350px] flex flex-col items-center hover:scale-110 duration-150"
                }
              >
                <div>
                  <picture>
                    <img
                      src={TrendingProductImg}
                      alt={TrendingProductImg}
                      className="pt-3"
                    />
                  </picture>
                </div>

                <div className="pt-[15px] flex flex-col items-center">
                  <h6 className="text-[#151875] font-LatoFont font-bold text-base">
                    Cantilever chair
                  </h6>
                  <div className="flex items-center gap-x-3">
                    <h6 className="text-[#151875] font-JosefinFont font-normal text-sm">
                      $26.00
                    </h6>
                    <p className="text-[#151875] font-JosefinFont line-through font-normal text-xs opacity-30">
                      $42.00
                    </p>
                  </div>
                </div>
              </OfferCard>

              <OfferCard
                className={
                  "bg-white shadow-2xl w-[270px] h-[350px] flex flex-col items-center hover:scale-110 duration-150"
                }
              >
                <div>
                  <picture>
                    <img
                      src={TrendingProductImg}
                      alt={TrendingProductImg}
                      className="pt-3"
                    />
                  </picture>
                </div>

                <div className="pt-[15px] flex flex-col items-center">
                  <h6 className="text-[#151875] font-LatoFont font-bold text-base">
                    Cantilever chair
                  </h6>
                  <div className="flex items-center gap-x-3">
                    <h6 className="text-[#151875] font-JosefinFont font-normal text-sm">
                      $26.00
                    </h6>
                    <p className="text-[#151875] font-JosefinFont line-through font-normal text-xs opacity-30">
                      $42.00
                    </p>
                  </div>
                </div>
              </OfferCard>
            </div>

            <div className="pt-10 flex justify-center gap-x-14">
              <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative shadow-lg">
                <div className="pt-[34px] pl-[25px]">
                  <h5 className="font-JosefinFont font-semibold text-[#151875] text-[26px]">
                    23% off in all products
                  </h5>
                  <a
                    href="#"
                    className="font-LatoFont font-semibold text-[#FB2E86] text-base underline underline-offset-4"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="absolute bottom-0 right-0">
                  <picture>
                    <img src={TrendingImgBottom1} alt={TrendingImgBottom1} />
                  </picture>
                </div>
              </div>

              <div className="w-[420px] h-[270px] bg-[#EEEFFB] relative shadow-lg">
                <div className="pt-[34px] pl-[25px]">
                  <h5 className="font-JosefinFont font-semibold text-[#151875] text-[26px]">
                    23% off in all products
                  </h5>
                  <a
                    href="#"
                    className="font-LatoFont font-semibold text-[#FB2E86] text-base underline underline-offset-4"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="absolute bottom-0 right-2">
                  <picture>
                    <img src={TrendingImgBottom2} alt={TrendingImgBottom2} />
                  </picture>
                </div>
              </div>

              <div className="w-[267px] flex flex-col justify-between">
                <div className="w-full h-[74px] flex items-center gap-x-2">
                  <div className="w-[103px] h-[74px] bg-[#F5F6F8] flex flex-col items-center justify-center">
                    <picture>
                      <img src={TrendingImgBottom3} alt={TrendingImgBottom3} />
                    </picture>
                  </div>
                  <div>
                    <h5 className="text-base text-[#151875] font-JosefinFont font-semibold">
                      Executive Seat chair
                    </h5>
                    <p className="text-xs text-[#151875] font-JosefinFont font-normal line-through">
                      $32.00
                    </p>
                  </div>
                </div>

                <div className="w-full h-[74px] flex items-center gap-x-2">
                  <div className="w-[103px] h-[74px] bg-[#F5F6F8] flex flex-col items-center justify-center">
                    <picture>
                      <img src={TrendingImgBottom3} alt={TrendingImgBottom3} />
                    </picture>
                  </div>
                  <div>
                    <h5 className="text-base text-[#151875] font-JosefinFont font-semibold">
                      Executive Seat chair
                    </h5>
                    <p className="text-xs text-[#151875] font-JosefinFont font-normal line-through">
                      $32.00
                    </p>
                  </div>
                </div>

                <div className="w-full h-[74px] flex items-center gap-x-2">
                  <div className="w-[103px] h-[74px] bg-[#F5F6F8] flex flex-col items-center justify-center">
                    <picture>
                      <img src={TrendingImgBottom3} alt={TrendingImgBottom3} />
                    </picture>
                  </div>
                  <div>
                    <h5 className="text-base text-[#151875] font-JosefinFont font-semibold">
                      Executive Seat chair
                    </h5>
                    <p className="text-xs text-[#151875] font-JosefinFont font-normal line-through">
                      $32.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
