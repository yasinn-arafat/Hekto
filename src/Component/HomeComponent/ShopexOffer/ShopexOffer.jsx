import React from "react";
import CommonTitle from "../../CommonComponent/CommonTitle/CommonTitle";
import OfferCard from "../../CommonComponent/OfferCard/OfferCard";
import Offerimg1 from "../../../assets/Offer1.png";
import Offerimg2 from "../../../assets/Offer2.png";
import Offerimg3 from "../../../assets/Offer3.png";
import Offerimg4 from "../../../assets/Offer4.png";

const data = [
  {
    id: 1,
    img: Offerimg1,
    OfferTitle: "Free Delevery",
    OfferDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 2,
    img: Offerimg2,
    OfferTitle: "Free Delevery",
    OfferDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 3,
    img: Offerimg3,
    OfferTitle: "Free Delevery",
    OfferDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 4,
    img: Offerimg4,
    OfferTitle: "24/7 Support",
    OfferDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const ShopexOffer = () => {
  return (
    <>
      <div className="pt-14 pb-32">
        <div className="container">
          <div>
            <CommonTitle Title={"What Shopex Offer!"} />
          </div>

          <div className="flex items-center gap-x-7 justify-center pt-14">
            {data?.map((item) => (
              <div className="group">
                <OfferCard
                  className={
                    "w-[270px] h-[320px] shadow-2xl cursor-pointer group-hover:scale-110 duration-150 rounded-md"
                  }
                  key={item.id}
                >
                  <div className="flex flex-col items-center px-[27px] pt-[70px]">
                    <img src={item.img} alt={item.img} />
                    <h3 className="py-4 font-JosefinFont font-semibold text-[22px] text-[#151875]">
                      {item.OfferTitle}
                    </h3>
                    <p className="font-LatoFont text-base font-bold text-[#1A0B5B] text-center opacity-30">
                      {item.OfferDescription}
                    </p>
                  </div>
                </OfferCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopexOffer;
