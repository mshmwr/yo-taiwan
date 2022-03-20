import React, { useState } from "react";
import btnLeft from "../../asset/icon/btn_next_left.png";
import btnRight from "../../asset/icon/btn_next_right.png";
import location from "../../asset/icon/location.png";
import phone from "../../asset/icon/phone.png";
import time from "../../asset/icon/time.png";
import weather from "../../asset/icon/weather.png";
import bus from "../../asset/icon/bus.png";
import "./style.scss";
import { handleNodata } from "../../utils/conditionUtils";

const FoodInfoMenu = ({ foodInfo }) => {
  const [imgBtn, setImgBtn] = useState(0);

  let picArray = Array(3).fill(
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png"
  );
  if (foodInfo) {
    let img = Object.values(foodInfo[0].Picture).filter((p) =>
      p.includes("http")
    );
    for (let i = 0; i < img.length; i++) {
      picArray[i] = img[i];
    }
  }

  if (imgBtn > 2) setImgBtn(2);
  if (imgBtn < 0) setImgBtn(0);

  return (
    <div>
      {foodInfo && (
        <div className="tripInfo_menu_section">
          <div className="breadcrumb">
            {`首頁 > 特色美食 >`}
            <span>{handleNodata(foodInfo[0].RestaurantName)}</span>
          </div>
          <div className="tripInfo_menu">
            <div className="tripInfo_menu_img">
              <div className="full-view">
                <img src={picArray[imgBtn]} alt="landscapePicture" />

                <div className="btn_next_trip">
                  <img
                    src={btnLeft}
                    alt="btnLeft"
                    onClick={() => {
                      setImgBtn(imgBtn - 1);
                    }}
                  />
                  <img
                    src={btnRight}
                    alt="btnright"
                    onClick={() => {
                      setImgBtn(imgBtn + 1);
                    }}
                  />
                </div>
              </div>
              <div className="section-view">
                {picArray.map((p, i) => {
                  if (i === imgBtn) {
                    return <img src={p} alt="landscapeimage" />;
                  } else {
                    return (
                      <img
                        src={p}
                        alt="landscapeimage"
                        className="selected-img"
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="tripInfo_menu_text">
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
                      <img src={weather} alt="weather" /> 美食分類：
                      {handleNodata(foodInfo[0].Class)}
                    </li>
                    <li>
                      <img src={bus} alt="bus" />
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
