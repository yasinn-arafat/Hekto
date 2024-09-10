import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import Navbar from "../../Component/HomeComponent/Navbar/Navbar";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponent/FeaturedProducts/FeaturedProducts";
import Products from "../../Component/HomeComponent/Products/Products";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Banner />
        <FeaturedProducts />
        <Products />
      </div>
    </>
  );
};

export default Home;
