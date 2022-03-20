import React, { useState, useEffect } from "react";
import { doSearchTopic } from "../../apis/searchApi";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";

function SearchingResult({ searchTopic }) {
  const [searchResult, setsearchResult] = useState([]);
  let keyword = searchTopic.keywords;
  let blankImgUrl =
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png";

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
        {searchResult && searchResult.length !== 0
          ? searchResult.map((item) => {
              return (
                <a
                  key={item.ID}
                  href={`/yo-taiwan/tripInfoPage/${item.ScenicSpotID}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="landscape_block">
                    <div className="image_block">
                      <img
                        alt={item.Name}
                        src={item.Picture.PictureUrl1 || blankImgUrl}
                      />
                    </div>
                    <div className="content_block">
                      {item.Name}
                      {item?.Bus && (
                        <div className="tag_bus">
                          {getBusIcon()}
                          {item.Bus}
                        </div>
                      )}

                      <div className="tag_location">
                        {getLocationIcon()}
                        {splitAddressToCityAndDistrict(item.Address)}
                      </div>
                      <div className="weather">{getWeatherIcon("sunny")}</div>
                    </div>
                  </div>
                </a>
              );
            })
          : "無相關搜尋結果"}
      </div>
    </>
  );
}

export default SearchingResult;
