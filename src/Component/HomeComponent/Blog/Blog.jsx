import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import BlogComponent from "../../CommonComponent/BlogComponent/BlogComponent";

const Blog = () => {
  return (
    <>
      <div className="pb-24 ">
        <div className="container">
          <div>
            <CommonTitle Title={"Leatest Blog"} />
          </div>
          <div className="pt-20 flex items-center gap-x-20 justify-center">
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
