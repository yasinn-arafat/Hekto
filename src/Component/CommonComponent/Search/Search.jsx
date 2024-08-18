import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search Here"
        className="w-64 border-y-2 pl-2 border-l-2 border-[#E7E6EF] h-10"
      />
      <div className="w-12 cursor-pointer text-2xl flex items-center text-white justify-center bg-[#FB2E86] h-10">
        <FiSearch />
      </div>
    </div>
  );
};

export default Search;
