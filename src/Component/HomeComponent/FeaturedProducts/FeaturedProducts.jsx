import React from "react";
import Title from "../../CommonComponent/Title/Title";
import FeaturedCard from "../../CommonComponent/FeatueredCard/FeaturedCard";

const FeaturedProducts = () => {
  return (
    <>
      <div className="p-32">
        <div className="container">
          <div className="pb-12">
            <Title />
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
