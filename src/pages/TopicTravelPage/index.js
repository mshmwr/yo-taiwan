import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import TopicTab from "../../components/TopicTab";
import Footer from "../../components/Footer";
import React from "react";

function TopicTravelPage() {
  const BreadCrumbColor = { color: "#FFD77C", fontWeight: "700" };
  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb
        topic={{
          topic: "主題旅遊",
          color: BreadCrumbColor,
          link:'/yo-taiwan/TopicTravelPage',
        }}
      />
      <TopicTab />
      <Footer />
    </div>
  );
}

export default TopicTravelPage;
