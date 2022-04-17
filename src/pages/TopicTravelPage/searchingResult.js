import React, { useState, useEffect } from "react";
import { doSearchTopic } from "../../apis/searchApi";
import Spots from "../../components/SpotsCarousel/Spots";

function SearchingResult({ searchTopic }) {
  const [searchResult, setsearchResult] = useState([]);
  let keyword = searchTopic.keywords;

  useEffect(() => {
    async function fetchData() {
      setsearchResult(await doSearchTopic(keyword));
    }
    fetchData();
  }, [keyword]);

  return (
    <>
      <div className="title_group">
        <span className="section_title">我們為你精心挑選了以下景點：</span>
      </div>
      <div className="landscape_section">
        <Spots spots={searchResult} page={"tripInfoPage"} />
      </div>
    </>
  );
}

export default SearchingResult;
