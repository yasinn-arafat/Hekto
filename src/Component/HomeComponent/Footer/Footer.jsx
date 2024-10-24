import React from "react";
import FooterLogo from "../../../assets/FooterLogo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#EEEFFB] py-24">
        <div className="container">
          <div className="flex items-center">
            <div className="flex flex-col gap-y-10">
              <div>
                <picture>
                  <img src={FooterLogo} alt={FooterLogo} />
                </picture>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="w-[377px] h-11 pl-5 placeholder:text-[#8A8FB9] rounded-[3px]"
                />
                <div className="w-[135px] h-[38px] rounded-[3px] absolute top-[3px] right-[3px] cursor-pointer flex items-center justify-center bg-[#FB2E86]">
                  <button className="text-base font-LatoFont font-medium text-[#EEEFFB]">
                    Sign Up
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-base font-LatoFont text-[#9196AA] font-normal pb-[10px]">
                  Contact Info
                </h4>
                <address className="text-[#8A8FB9] text-base font-LatoFont font-normal">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </address>
              </div>
            </div>

            <div>
              <h3>Catagories</h3>
              <ul>
                <li>
                  <a href="#">Laptops & Computers</a>
                </li>
                <li>
                  <a href="#">Cameras & Photography</a>
                </li>
                <li>
                  <a href="#">Smart Phones & Tablets</a>
                </li>
                <li>
                  <a href="#">Video Games & Consoles</a>
                </li>
                <li>
                  <a href="#">Waterproof Headphones</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Customer Care</h3>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Discount</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Orders History</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
              </ul>
            </div>
            <div>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
