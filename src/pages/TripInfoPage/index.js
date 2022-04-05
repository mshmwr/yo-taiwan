import Header from "../../components/Header";
import SpotsCarousel from "../../components/SpotsCarousel";
import Footer from "../../components/Footer";
import TripInfoContent from "./TripInfoContent";
import TripInfoMenu from "./TripInfoMenu";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchTripId } from "../../apis/searchApiTripId";
import "./style.scss";
import Restaurant from "../../components/Restaurant";
import { getLandscape, getLandscapeAll } from "../../apis/landscapeApi";

function TripInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  const [tripInfo, settripInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    setshowSearch("show");
    async function fetchData() {
      settripInfo(await doSearchTripId(id));
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="header1">
        <Header showSearch={showSearch && showSearch} />
      </div>
      <TripInfoMenu tripInfo={tripInfo && tripInfo} />
      <TripInfoContent tripInfo={tripInfo && tripInfo} />
      <SpotsCarousel
        title="想去哪玩？"
        page="tripInfoPage"
        fetchSpot={getLandscape}
        fetchSpotAll={getLandscapeAll}
      />
      <Restaurant />
      <Footer />
    </>
  );
}

export default TripInfoPage;
