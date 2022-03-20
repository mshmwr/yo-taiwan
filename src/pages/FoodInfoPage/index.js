import Header from "../../components/Header";
import LandScape from "../../components/LandScape";
import Footer from "../../components/Footer";
import TripInfoContent from "./TripInfoContent";
import FoodInfoMenu from "../FoodInfoPage/FoodInfoMenu";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchRestaurantId } from "../../apis/searchApiTripId";
import "./style.scss";

function FoodInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  const [foodInfo, setfoodInfo] = useState();
  const { id } = useParams();
  useEffect(() => {
    setshowSearch("show");
    async function fetchData() {
      setfoodInfo(await doSearchRestaurantId(id));
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="header1">
        <Header showSearch={showSearch} />
      </div>
      <FoodInfoMenu foodInfo={foodInfo} />
      <TripInfoContent foodInfo={foodInfo} />
      <LandScape />
      <LandScape />
      <Footer />
    </div>
  );
}

export default FoodInfoPage;
