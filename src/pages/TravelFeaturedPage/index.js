import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import TopicTab from "../../components/TopicTab";
import Footer from "../../components/Footer";
import React from "react";

export default function TravelFeaturedPage() {
  console.log("HI我是同事，我改了一些東西");
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
