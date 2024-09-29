import React from "react";
import SofaImg from "../../../assets/Sofa.png";

const UniqueFeature = () => {
  return (
    <>
      <div className="bg-[#F1F0FF] py-8">
        <div className="container">
          <div className="flex gap-x-8 px-11">
            <div>
              <img src={SofaImg} alt={SofaImg} />
            </div>
            <div>
              <div>
                <h2 className="text-[#151875] text-4xl font-JosefinFont font-bold pb-7 pt-[75px] w-[507px] leading-[45px]">
                  Unique Features Of leatest & Trending Poducts
                </h2>
              </div>
              <ul className="font-LatoFont text-base font-medium text-[#ACABC3]">
                <li className=" flex items-center gap-x-3">
                  <div className="w-[11px] h-[11px] bg-[#F52B70] rounded-full"></div>
                  <p>
                    All frames constructed with hardwood solids and laminates
                  </p>
                </li>
                <li className="py-3 flex items-start gap-x-3">
                  <div className="w-[11px] h-[11px] bg-[#2B2BF5] rounded-full mt-[6px]"></div>
                  <p className="w-[461px]">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </p>
                </li>
                <li className=" flex items-center gap-x-3">
                  <div className="w-[11px] h-[11px] bg-[#2BF5CC] rounded-full"></div>
                  <p>Arms, backs and seats are structurally reinforced</p>
                </li>
              </ul>

              <div className="flex items-center gap-x-6 pt-10">
                <button className="py-3 px-7 bg-[#FB2E86] rounded-sm font-JosefinFont font-semibold text-[17px] text-white">
                  Add To Cart
                </button>
                <div>
                  <h4 className="text-[#151875] font-JosefinFont font-semibold text-sm">
                    B&B Italian Sofa
                  </h4>
                  <p className="text-[#151875] font-LatoFont font-normal text-sm">
                    $32.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueFeature;
