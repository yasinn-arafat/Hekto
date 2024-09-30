import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import Navbar from "../../Component/HomeComponent/Navbar/Navbar";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponent/FeaturedProducts/FeaturedProducts";
import Products from "../../Component/HomeComponent/Products/Products";
import ShopexOffer from "../../Component/HomeComponent/ShopexOffer/ShopexOffer";
import UniqueFeature from "../../Component/HomeComponent/UniqueFeature/UniqueFeature";
import TrendingProducts from "../../Component/HomeComponent/TrendingProducts/TrendingProducts";

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
        <UniqueFeature />
        <TrendingProducts />
      </div>
    </>
  );
};

export default Home;
