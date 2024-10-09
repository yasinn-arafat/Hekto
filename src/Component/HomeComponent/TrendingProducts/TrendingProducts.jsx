import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import OfferCard from "../../CommonComponent/OfferCard/OfferCard";
import TrendingProductImg from "../../../assets/TrendingProduct3.png";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
