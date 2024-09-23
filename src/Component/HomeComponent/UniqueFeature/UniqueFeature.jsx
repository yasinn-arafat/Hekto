import React from "react";
import SofaImg from "../../../assets/Sofa.png";

const UniqueFeature = () => {
  return (
    <>
      <div className="bg-[#F1F0FF] py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src={SofaImg} alt={SofaImg} />
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueFeature;
