import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import Navbar from "../../Component/HomeComponent/Navbar/Navbar";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponent/FeaturedProducts/FeaturedProducts";
import Products from "../../Component/HomeComponent/Products/Products";
import ShopexOffer from "../../Component/HomeComponent/ShopexOffer/ShopexOffer";
import UniqueFeature from "../../Component/HomeComponent/UniqueFeature/UniqueFeature";
import TrendingProducts from "../../Component/HomeComponent/TrendingProducts/TrendingProducts";
import TopCategories from "../../Component/HomeComponent/TopCategories/TopCategories";
import NewsLater from "../../Component/HomeComponent/NewsLater/NewsLater";
import Blog from "../../Component/HomeComponent/Blog/Blog";
import Footer from "../../Component/HomeComponent/Footer/Footer/Footer";

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
        <TopCategories />
        <NewsLater />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
