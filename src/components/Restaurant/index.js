import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRestaurant, getRestaurantAll } from "../../apis/restaurantApi";
import {
  getWeatherIcon,
  getBusIcon,
  getNearbyFoodIcon,
  getLocationIcon,
} from "../../utils/iconUtilis";
import { getCityWithDistrict } from "../../utils/addressUtils";
import btn_next from "../../asset/icon/btn_next.png";

const restaurantsQuantity = 5;

const Restaurant = ({ title = "玩樂不忘來點美食" }) => {
  const [totalPage, setTotalPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [restaurantItem, setRestaurantItem] = useState([]);

  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    async function fetchData() {
      setRestaurantItem(await getRestaurant(currentPage * restaurantsQuantity));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      const restaurants = await getRestaurantAll(
        currentPage * restaurantsQuantity
      );
      if (restaurants)
        setTotalPage(Math.ceil(restaurants.length / restaurantsQuantity));
    }
    fetchData();
  }, []);

  return (
    <div className="landscape_section">
      <span className="section_title">{title}</span>
      {!!currentPage && (
        <div className="btn_prev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btn_prev" />
        </div>
      )}
      {restaurantItem &&
        restaurantItem.map((item) => {
          return (
            <Link
              to={{
                pathname: `/foodInfoPage/${item.RestaurantID}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="landscape_block">
                <div className="image_block">
                  <img alt={item.Name} src={item.Picture.PictureUrl1} />
                </div>
                <div className="content_block">
                  <div>{item.RestaurantName}</div>

                  {item?.Class && (
                    <div className="tag_bus">
                      {getNearbyFoodIcon()}
                      {item.Class}
                    </div>
                  )}
                  {item?.Bus && (
                    <div className="tag_location">
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

export default Restaurant;
