import React, { useState, useEffect } from "react";
import { getRestaurant } from "../../apis/restaurantApi";
import { getCityWithDistrict } from "../../utils/addressUtils";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";

function SearchingResult({ searchCity }) {
  const [searchResult, setsearchResult] = useState([]);
  let keyword = searchCity[1];
  let blankImgUrl =
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png";

  useEffect(() => {
    async function fetchData() {
      setsearchResult(await getRestaurant(0,10,keyword));
    }
    fetchData();
  }, [keyword]);
  console.log(searchResult);
  return (
    <>
      <div className="title_group">
        <span className="section_title food_section_title">
          <span>{`「${searchCity[0]}」`}</span>精心景點：
        </span>
      </div>
      <div className="landscape_section">
        {searchResult && searchResult.length !== 0
          ? searchResult.map((item) => {
              return (
                <a
                  key={item.ID}
                  href={`/yo-taiwan/foodInfoPage/${item.RestaurantID}`}
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
                        {getCityWithDistrict(item.Address)}
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
