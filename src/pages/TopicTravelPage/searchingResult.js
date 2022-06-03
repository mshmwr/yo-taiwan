import React, { useState, useEffect } from "react";
import { doSearchTopic } from "@apis/getSearchedData";
import Spots from "@components/SpotsCarousel/Spots";

function SearchingResult({ searchTopic }) {
  const [searchResult, setSearchResult] = useState([]);
  let keyword = searchTopic.keywords;

  useEffect(() => {
    async function fetchData() {
      setSearchResult(await doSearchTopic(keyword));
    }
    fetchData();
  }, [keyword]);

  return (
    <>
      <div className="titleGroup">
        <span className="sectionTitle">我們為你精心挑選了以下景點：</span>
      </div>
      <div className="landscapeSection">
        <Spots
          spots={searchResult}
          pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
        />
      </div>
    </>
  );
}

export default SearchingResult;
