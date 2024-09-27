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
                <h2 className="text-[#151875] text-4xl font-JosefinFont font-bold pb-7 pt-[76px] w-[507px] leading-[45px]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueFeature;
