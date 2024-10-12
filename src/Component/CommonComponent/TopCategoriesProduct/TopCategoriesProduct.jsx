import React from "react";
import TopProduct from "../../../assets/FeaturedChair1.png";

const TopCategoriesProduct = () => {
  return (
    <div className="hover:scale-110 duration-150">
      <div className="w-[269px] h-[269px] rounded-full bg-[#F6F7FB] shadow-xl flex flex-col items-center justify-center cursor-pointer">
        <picture>
          <img src={TopProduct} alt={TopProduct} />
        </picture>
      </div>
      <div className="pt-7 flex flex-col justify-center items-center">
        <h4 className="font-JosefinFont font-normal text-[#151875] text-xl pb-3">
          Mini LCW Chair
        </h4>
        <p className="font-JosefinFont font-normal text-[#151875] text-base">
          $56.00
        </p>
      </div>
    </div>
  );
};

export default TopCategoriesProduct;
