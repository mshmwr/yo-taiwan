import Header from "../../components/Header";
import LandScape from "../../components/LandScape";
import Footer from "../../components/Footer";
import TripInfoContent from "./TripInfoContent";
import TripInfoMenu from "../../components/TripInfoMenu";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchTripId } from "../../apis/searchApiTripId";

function TripInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  const [tripInfo, settripInfo] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setshowSearch("show");

    async function fetchData() {
      settripInfo(await doSearchTripId(id));
    }
    fetchData();
  }, [id]);
  console.log(tripInfo);
  return (
    <div>
      <div className="header1">
        <Header showSearch={!showSearch ? undefined : showSearch} />
      </div>
      <TripInfoMenu tripInfo={!tripInfo ? undefined : tripInfo} />
      <TripInfoContent tripInfo={!tripInfo ? undefined : tripInfo} />
      <LandScape />
      <LandScape />
      <Footer />
    </div>
  );
}

export default TripInfoPage;
