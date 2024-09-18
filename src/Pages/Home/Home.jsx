import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import Navbar from "../../Component/HomeComponent/Navbar/Navbar";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponent/FeaturedProducts/FeaturedProducts";
import Products from "../../Component/HomeComponent/Products/Products";
import ShopexOffer from "../../Component/HomeComponent/ShopexOffer/ShopexOffer";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Banner />
        <FeaturedProducts />
        <Products />
        <ShopexOffer />
      </div>
    </>
  );
};

export default Home;
