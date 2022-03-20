import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import React from "react";

function FoodFeaturedPage() {
  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb topic="特色美食" />
      <Banner />
      <Footer />
    </div>
  );
}

export default FoodFeaturedPage;
