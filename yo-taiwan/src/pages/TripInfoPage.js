import Header from "../components/Common/Header";
import LandScape from "../components/HomePage/LandScape";
import Footer from "../components/Common/footer";
import TripInfoContent from "../components/TripInfoPage/tripInfoContent";
import TripInfoMenu from "../components/TripInfoPage/tripInfoMenu";
import React, { useState, useEffect } from "react";

function TripInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  useEffect(() => {
    setshowSearch("show");
  }, []);
  return (
    <div>
      <div className="header1">
        <Header showSearch={showSearch} />
      </div>
      <TripInfoMenu />
      <TripInfoContent />
      <LandScape />
      <LandScape />
      <Footer />
    </div>
  );
}

export default TripInfoPage;
