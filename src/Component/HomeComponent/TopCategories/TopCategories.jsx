import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import TopCategoriesProduct from "../../CommonComponent/TopCategoriesProduct/TopCategoriesProduct";

const TopCategories = () => {
  return (
    <>
      <div className="pb-28">
        <div className="container">
          <div>
            <CommonTitle Title={"Top Categories"} />
          </div>
          <div className="pt-14 flex items-center gap-x-12 justify-center">
            <TopCategoriesProduct />
            <TopCategoriesProduct />
            <TopCategoriesProduct />
            <TopCategoriesProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategories;
