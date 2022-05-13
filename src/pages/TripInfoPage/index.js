import React, { useState, useEffect, useContext } from "react";
import Header from "@components/Header";
import SpotsCarousel from "@components/SpotsCarousel";
import Footer from "@components/Footer";
import TripInfoContent from "./TripInfoContent";
import TripInfoMenu from "./TripInfoMenu";
import { useParams } from "react-router-dom";
import { doSearchTripId } from "@apis/searchApiTripId";
import { getRestaurant, getRestaurantAll } from "@apis/restaurantApi";
import { LandscapesContext } from "@contexts";

function TripInfoPage() {
  const [showSearch, setshowSearch] = useState("hide");
  const [tripInfo, settripInfo] = useState();
  const { id } = useParams();
  const landscapes = useContext(LandscapesContext);

  useEffect(() => {
    setshowSearch("show");
    async function fetchData() {
      settripInfo(await doSearchTripId(id));
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <Header showSearch={showSearch && showSearch} />
      </div>
      <TripInfoMenu tripInfo={tripInfo && tripInfo} />
      <TripInfoContent tripInfo={tripInfo && tripInfo} />
      <SpotsCarousel
        title="還可以去這裡走走"
        spotsData={landscapes}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
      <SpotsCarousel
        title="玩樂不忘來點美食！"
        page="foodInfoPage"
        fetchSpot={getRestaurant}
        fetchSpotAll={getRestaurantAll}
        pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
      />
      <Footer />
    </>
  );
}

export default TripInfoPage;
