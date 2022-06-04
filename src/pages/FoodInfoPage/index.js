import Header from "@components/Header";
import TripInfoContent from "./FoodInfoContent";
import FoodInfoMenu from "../FoodInfoPage/FoodInfoMenu";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doSearchRestaurantId } from "@apis/getSearchedDataFromId";
import "./style.module.scss";
import SpotsCarousel from "@components/SpotsCarousel";
import { LandscapesContext, RestaurantsContext } from "@contexts";

function FoodInfoPage() {
  const [showSearch, setShowSearch] = useState("hide");
  const [foodInfo, setFoodInfo] = useState();
  const { id } = useParams();
  const landscapes = useContext(LandscapesContext);
  const restaurants = useContext(RestaurantsContext);

  useEffect(() => {
    setShowSearch("show");
    async function fetchData() {
      setFoodInfo(await doSearchRestaurantId(id));
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
        spotsData={restaurants}
        pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
      />
      <SpotsCarousel
        title="吃飽可以來這逛逛"
        spotsData={landscapes}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
    </div>
  );
}

export default FoodInfoPage;
