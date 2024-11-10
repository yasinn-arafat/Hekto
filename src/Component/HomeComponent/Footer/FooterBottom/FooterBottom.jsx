import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <>
      <div className="py-[17px] bg-[#E7E4F8]">
        <div className="container">
          <div className="flex items-center justify-evenly">
            <h4 className="text-[#9DA0AE] font-LatoFont text-base font-semibold">
              ©Webecy - All Rights Reserved
            </h4>
            <div className="flex gap-x-5 items-center">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#151875]">
                <a href="#" className="text-white">
                  <FaFacebookF />
                </a>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#151875]">
                <a href="#" className="text-white">
                  <AiFillInstagram />
                </a>
              </div>
              <div className="flex items-center justify-center  w-6 h-6 rounded-full bg-[#151875]">
                <a href="#" className="text-white">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
