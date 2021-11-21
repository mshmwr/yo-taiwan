import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchName } from "../apis/searchApi";
import Header from "../components/Common/Header";
import { splitAddressToCityAndDistrict } from "../utils/addressUtils";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../utils/iconUtilis";
import "../css/searchingResult.css";

// TODO: 分頁功能

function SearchingResult() {
  const [searchResult, setsearchResult] = useState();
  const [showSearch, setshowSearch] = useState("hide");
  const { keyword } = useParams();

  useEffect(() => {
    async function fetchData() {
      setsearchResult(await doSearchName(keyword));
    }
    fetchData();
    setshowSearch("show");
  }, [keyword]);

  return (
    <>
      <Header showSearch={showSearch} />
      <div class="title_group">
        {keyword === undefined ? (
          "no input"
        ) : (
          <span class="section_title_blue">「{keyword}」</span>
        )}
        <span class="section_title">搜尋結果如下：</span>
      </div>
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
    </>
  );
}

export default SearchingResult;
