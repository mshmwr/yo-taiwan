import React from "react";
import Carousel from "@components/Carousel";
import location from "@asset/icon/food_location.png";
import phone from "@asset/icon/food_phone.png";
import time from "@asset/icon/food_time.png";
import category from "@asset/icon/food_category.png";
import parking from "@asset/icon/food_parking.png";
import BreadCrumb from "@components/BreadCrumb";
import "./FoodInfoMenu.scss";
import { handleNodata } from "@utils/conditionUtils";

const FoodInfoMenu = ({ foodInfo }) => {
  const BreadCrumbColor = { color: "#EF8678", fontWeight: "700" };

  return (
    <div>
      {foodInfo && (
        <div className="foodInfo_menu_section">
          <BreadCrumb
            topic={{
              topic: "特色美食",
              subTopic: ` > ${handleNodata(foodInfo[0].RestaurantName)}`,
              color: BreadCrumbColor,
              link: "/yo-taiwan/foodFeaturedPage",
            }}
          />
          <div className="foodInfo_menu">
            <Carousel tripInfo={foodInfo} />
            <div className="foodInfo_menu_text">
              <span className="menu_title">
                {handleNodata(foodInfo[0].RestaurantName)}
              </span>
              <div className="menu_text">
                <div className="list">
                  <ul>
                    <li>
                      <img src={location} alt="location" />
                      地址：
                      {handleNodata(foodInfo[0].Address)}
                    </li>
                    <li>
                      <img src={phone} alt="phone" />
                      電話：
                      {handleNodata(foodInfo[0].Phone)}
                    </li>
                    <li>
                      <img src={time} alt="time" />
                      營業時間:
                      {handleNodata(
                        `${foodInfo[0].OpenTime.replace(/星/g, "\n星")}`
                      )}
                    </li>
                  </ul>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <img src={category} alt="category" /> 美食分類：
                      {handleNodata(foodInfo[0].Class)}
                    </li>
                    <li>
                      <img src={parking} alt="parking" />
                      停車資訊：
                      {handleNodata(foodInfo[0].ParkingInfo)}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="describe_text">
                {handleNodata(foodInfo[0].Description)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodInfoMenu;
