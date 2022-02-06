import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLandScape, getLandScapeAll } from "../../apis/landscapeApi";
import {
  getWeatherIcon,
  getBusIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";
import btn_next from "../../asset/icon/btn_next.png";

const landscapeQuantity = 5;

const LandScape = () => {
  const [totalPage, settotalPage] = useState(0);

  const [currentPage, setcurrentPage] = useState(0);
  const [LandScapeItem, setLandScapeItem] = useState([]);

  const handleClickNext = () => {
    setcurrentPage((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    setcurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    async function fetchData() {
      setLandScapeItem(await getLandScape(currentPage * landscapeQuantity));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      const landscapes = await getLandScapeAll(currentPage * landscapeQuantity);
      console.log("len, ", landscapes.length);
      settotalPage(Math.ceil(landscapes.length / landscapeQuantity));
    }
    fetchData();
  }, []);

  return (
    <div className="landscape_section">
      <span className="section_title">想去哪玩？</span>
      {!!currentPage && (
        <div className="btn_prev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btn_prev" />
        </div>
      )}
      {LandScapeItem &&
        LandScapeItem.map((item) => {
          return (
            <Link
              to={{
                pathname: `/tripInfoPage/${item.ScenicSpotID}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <div>
                <div className="landscape_block">
                  <div className="image_block">
                    <img alt={item.Name} src={item.Picture.PictureUrl1} />
                  </div>
                  <div className="content_block">
                    {item.ScenicSpotName}
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
      {currentPage < totalPage && (
        <div className="btn_next" onClick={handleClickNext}>
          <img src={btn_next} alt="btn_next" />
        </div>
      )}
    </div>
  );
};

export default LandScape;
