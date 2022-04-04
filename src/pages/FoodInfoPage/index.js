import Header from "../../components/Header";
import Restaurant from "../../components/Restaurant";
import Footer from "../../components/Footer";
import TripInfoContent from "./FoodInfoContent";
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
      <div>
        <Header showSearch={showSearch} />
      </div>
      <FoodInfoMenu foodInfo={foodInfo} />
      <TripInfoContent foodInfo={foodInfo} />
      <Restaurant title='更多美食等你發掘'/>
      <Restaurant title='吃飽可以來這逛逛'/>
      <Footer />
    </div>
  );
}

export default FoodInfoPage;
