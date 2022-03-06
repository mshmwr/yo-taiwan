import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import TopicTab from "../../components/TopicTab";
import Footer from "../../components/Footer";
import React from "react";

function TravelFeaturedPage() {
  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb />
      <TopicTab />
      <Footer />
    </div>
  );
}

export default TravelFeaturedPage;
