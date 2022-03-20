import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import TopicTab from "../../components/TopicTab";
import Footer from "../../components/Footer";
import React from "react";

function TopicTravelPage() {
  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb topic="主題旅遊" />
      <TopicTab />
      <Footer />
    </div>
  );
}

export default TopicTravelPage;
