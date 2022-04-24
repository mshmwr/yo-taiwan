import React, { useState, useEffect } from "react";
import { getLandscape } from "../../apis/landscapeApi";
import Spots from "../../components/SpotsCarousel/Spots";

function SearchingResult({ searchCity }) {
  const [searchResult, setsearchResult] = useState([]);
  let keyword = searchCity[1];
  useEffect(() => {
    async function fetchData() {
      setsearchResult(await getLandscape(0, 10, keyword));
    }
    fetchData();
  }, [keyword]);

  return (
    <>
      <div className="titleGroup">
        <span className="sectionTitle travel_section_title">
          <span>{`「${searchCity[0] || "不分縣市"}」`}</span>精選景點：
        </span>
      </div>
      <div className="landscape_section">
        <Spots
          spots={searchResult}
          pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
        />
      </div>
    </>
  );
}

export default SearchingResult;
