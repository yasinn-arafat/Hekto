import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import Navbar from "../../Component/HomeComponent/Navbar/Navbar";
import Banner from "../../Component/HomeComponent/Banner/Banner";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Banner />
      </div>
    </>
  );
};

export default Home;
