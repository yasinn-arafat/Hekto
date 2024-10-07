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
            <div>
              <OfferCard
                className={
                  "bg-white shadow-black w-[270px] h-[350px] flex flex-col items-center"
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

                <div className="pt-[16px] flex flex-col items-center">
                  <h6 className="text-[#151875] font-LatoFont font-bold text-base">
                    Cantilever chair
                  </h6>
                  <div className="flex items-center gap-x-3">
                    <h6 className="text-[#151875] font-JosefinFont font-normal text-sm">
                      $26.00
                    </h6>
                    <p className="text-[#151875] font-JosefinFont font-normal text-xs opacity-30">
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
