import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import React from "react";

function TravelFeaturedPage() {
  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb topic="觀光景點" />
      <Banner />
      <Footer />
    </div>
  );
}

export default TravelFeaturedPage;
