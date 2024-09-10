import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import FeaturedCard from "../../CommonComponent/FeatueredCard/FeaturedCard";

const FeaturedProducts = () => {
  return (
    <>
      <div className="pt-32">
        <div className="container">
          <div className="pb-12">
            <CommonTitle Title={"Featured Products"} />
          </div>
          <div className="flex items-center justify-center gap-x-8">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
