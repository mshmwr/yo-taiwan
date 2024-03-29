import React, { useState, useEffect, useContext } from "react";
import Header from "@components/Header";
import SpotsCarousel from "@components/SpotsCarousel";
import TripInfoContent from "./TripInfoContent";
import TripInfoMenu from "./TripInfoMenu";
import { useParams } from "react-router-dom";
import { doSearchTripId } from "@apis/getSearchedDataFromId";
import { LandscapesContext, RestaurantsContext } from "@contexts";

function TripInfoPage() {
  const [showSearch, setShowSearch] = useState("hide");
  const [tripInfo, setTripInfo] = useState();
  const { id } = useParams();
  const landscapes = useContext(LandscapesContext);
  const restaurants = useContext(RestaurantsContext);

  useEffect(() => {
    setShowSearch("show");
    async function fetchData() {
      setTripInfo(await doSearchTripId(id));
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <Header showSearch={showSearch} />
      </div>
      <TripInfoMenu tripInfo={tripInfo} />
      <TripInfoContent tripInfo={tripInfo} />
      <SpotsCarousel
        title="還可以去這裡走走"
        spotsData={landscapes}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
      <SpotsCarousel
        title="玩樂不忘來點美食！"
        spotsData={restaurants}
        pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
      />
    </>
  );
}

export default TripInfoPage;
