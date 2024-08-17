import React from "react";
import Logo from "../../../assets/Hekto.png";
import Search from "../../CommonComponent/Search/Search";

const Navbar = () => {
  return (
    <>
      <div className="p-3 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-32">
              <div className="pb-[7px]">
                <img src={Logo} alt={Logo} />
              </div>
              <div>
                <ul className="flex items-center gap-9">
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Pages</a>
                  </li>
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Products</a>
                  </li>
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Blog </a>
                  </li>
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Shop</a>
                  </li>
                  <li className="hover:text-[#FB2E86] font-LatoFont font-normal text-base text-[#0d0e43]">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
