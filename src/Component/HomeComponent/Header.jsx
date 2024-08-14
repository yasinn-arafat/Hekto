import React from "react";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className="bg-[#7E33E0] p-3">
        <div className="container">
          <div className="flex justify-between items-center text-[#F1F1F1] font-JosefinFont font-semibold text-base">
            <div className="flex gap-x-12 items-center">
              <div className="flex gap-x-2 items-center">
                <span>
                  <MdOutlineMail />
                </span>
                <a href="#">mhhasanul@gmail.com</a>
              </div>
              <div className="flex gap-x-2 items-center">
                <span>
                  <PiPhoneCallBold />
                </span>
                <a href="#">(12345)67890</a>
              </div>
            </div>
            <div className="flex gap-x-5 items-center">
              <div className="flex gap-x-1 items-center">
                <a href="#">English</a>
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <div className="flex gap-x-1 items-center">
                <a href="#">USD</a>
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <div className="flex gap-x-1 items-center">
                <a href="#">Login</a>
                <span className="text-xl">
                  <LuUser />
                </span>
              </div>
              <div className="flex gap-x-1 items-center">
                <a href="#">Wishlist</a>
                <span className="text-xl">
                  <FaRegHeart />
                </span>
              </div>
              <div>
                <span className="text-xl">
                  <FiShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
