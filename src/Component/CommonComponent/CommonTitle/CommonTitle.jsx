import React from "react";

const CommonTitle = ({ Title }) => {
  return (
    <div>
      <h2 className="font-JosefinFont text-[42px] text-[#151875] font-bold text-center">
        {Title ? Title : "Title Here"}
      </h2>
    </div>
  );
};

export default CommonTitle;
