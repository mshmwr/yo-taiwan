import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TripInfoContent from "./FoodInfoContent";
import FoodInfoMenu from "../FoodInfoPage/FoodInfoMenu";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchRestaurantId } from "../../apis/searchApiTripId";
import "./style.scss";
import { getLandscape, getLandscapeAll } from "../../apis/landscapeApi";
import { getRestaurant, getRestaurantAll } from "../../apis/restaurantApi";
import SpotsCarousel from "../../components/SpotsCarousel";

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
      <div>
        <Header showSearch={showSearch} />
      </div>
      <FoodInfoMenu foodInfo={foodInfo} />
      <TripInfoContent foodInfo={foodInfo} />
      <SpotsCarousel
        title="更多美食等你發掘"
        fetchSpot={getRestaurant}
        fetchSpotAll={getRestaurantAll}
      />
      <SpotsCarousel
        title="吃飽可以來這逛逛"
        fetchSpot={getLandscape}
        fetchSpotAll={getLandscapeAll}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
      <Footer />
    </div>
  );
}

export default FoodInfoPage;
