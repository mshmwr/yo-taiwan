import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TripInfoContent from "./FoodInfoContent";
import FoodInfoMenu from "../FoodInfoPage/FoodInfoMenu";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doSearchRestaurantId } from "../../apis/searchApiTripId";
import "./style.scss";
import { getRestaurant, getRestaurantAll } from "../../apis/restaurantApi";
import SpotsCarousel from "../../components/SpotsCarousel";
import { LandscapesContext } from "../../contexts";

function FoodInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  const [foodInfo, setfoodInfo] = useState();
  const { id } = useParams();
  const landscapes = useContext(LandscapesContext);
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
        pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
      />
      <SpotsCarousel
        title="吃飽可以來這逛逛"
        spotsData={landscapes}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
      <Footer />
    </div>
  );
}

export default FoodInfoPage;
