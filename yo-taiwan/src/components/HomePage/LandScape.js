import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doSearch } from "../../apis/searchApi";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import btn_next from "../../images/icon/btn_next.png";

const LandScape = () => {
  const [LandScapeItem, setLandScapeItem] = useState();
  useEffect(() => {
    async function fetchData() {
      setLandScapeItem(await doSearch(5));
    }
    fetchData();
  }, []);
  console.log(setLandScapeItem);
  return (
    <div className="landscape_section">
      <span className="section_title">想去哪玩？</span>

      {LandScapeItem &&
        LandScapeItem.map((item) => {
          return (
            <Link to="/tripInfoPage" style={{ textDecoration: "none" }}>
              <div>
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
              </div>
            </Link>
          );
        })}
      <div className="btn_next">
        <img src={btn_next} alt="btn_next" />
      </div>
    </div>
  );
};

export default LandScape;
