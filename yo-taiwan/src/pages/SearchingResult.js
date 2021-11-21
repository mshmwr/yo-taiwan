import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearch } from "../apis/searchApi";
import Header from "../components/Common/Header";
import { splitAddressToCityAndDistrict } from "../utils/addressUtils";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../utils/iconUtilis";

// TODO: 分頁功能

function SearchingResult() {
  const [searchResult, setsearchResult] = useState();
  const [showSearch, setshowSearch] = useState("hide");
  const { keyword } = useParams();

  useEffect(() => {
    async function fetchData() {
      setsearchResult(await doSearch());
    }
    fetchData();
    setshowSearch("show");
  }, []);

  return (
    <div className="">
      <Header showSearch={showSearch} />
      {keyword === undefined ? "empty" : `「${keyword}」搜尋結果如下：`}
      <div class="landscape_section">
        {searchResult &&
          searchResult.map((item) => {
            return (
              <a
                key={item.ID}
                href="/#"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <div className="landscape_block">
                  <div className="image_block">
                    <img alt={item.Name} src={item.Picture.PictureUrl1} />
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
                    {/* TODO: 天氣icon要接天氣預報api */}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default SearchingResult;
