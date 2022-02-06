import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchName } from "../../apis/searchApi";
import Header from "../../components/Header";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";
import { keywordSplitWithPlus } from "../../utils/stringUtils";

function SearchingResult() {
  const [searchResult, setsearchResult] = useState([]);
  const { keywords } = useParams();

  useEffect(() => {
    async function fetchData() {
      const keywordArr = keywordSplitWithPlus(keywords);
      let keyword = keywordArr[0];
      if (keywordArr.length === 1) {
        setsearchResult(await doSearchName(keyword));
      } else {
        let address = keywordArr[1];
        setsearchResult(await doSearchName(keyword, address));
      }
    }
    fetchData();
  }, [keywords]);

  return (
    <>
      <Header showSearch="show" />
      <div className="title_group">
        {keywords === undefined ? (
          "no input"
        ) : (
          <span className="section_title_blue">
            「
            {keywordSplitWithPlus(keywords)[0] !== ""
              ? keywords
              : keywords.replace("+", "")}
            」
          </span>
        )}
        <span className="section_title">搜尋結果如下：</span>
      </div>
      <div className="landscape_section">
        {searchResult && searchResult.length !== 0
          ? searchResult.map((item) => {
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
