import React, { useState } from "react";
import btnLeft from "../../asset/icon/btn_next_left.png";
import btnRight from "../../asset/icon/btn_next_right.png";
import location from "../../asset/icon/location.png";
import phone from "../../asset/icon/phone.png";
import time from "../../asset/icon/time.png";
import ticket from "../../asset/icon/ticket.png";
import weather from "../../asset/icon/weather.png";
import sunny from "../../asset/icon/sunny.svg";
import bus from "../../asset/icon/bus.png";
import "./style.scss";

const TripInfoMenu = ({ tripInfo }) => {
  const [imgBtn, setImgBtn] = useState(0);

  let picArray = Array(3).fill(
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png"
  );
  if (tripInfo) {
    let img = Object.values(tripInfo[0].Picture).filter((p) =>
      p.includes("http")
    );
    for (let i = 0; i < img.length; i++) {
      picArray[i] = img[i];
    }
  }

  if (imgBtn > 2) setImgBtn(2);
  if (imgBtn < 0) setImgBtn(0);
  let index = imgBtn;

  return (
    <div className="tripInfo_menu_section">
      <div className="breadcrumb">
        {`首頁 > 觀光景點 >`}
        <span>{tripInfo ? tripInfo[0].ScenicSpotName : null}</span>
      </div>
      <div className="tripInfo_menu">
        <div className="tripInfo_menu_img">
          <div className="full-view">
            <img src={picArray[index]} alt="landscapePicture" />

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
              if (i === index) {
                return <img src={p} alt="landscapeimage" />;
              } else {
                return (
                  <img src={p} alt="landscapeimage" className="selected-img" />
                );
              }
            })}
          </div>
        </div>
        <div className="tripInfo_menu_text">
          <span className="menu_title">
            {tripInfo ? tripInfo[0].ScenicSpotName : null}
          </span>
          <div className="menu_text">
            <div className="list">
              <ul>
                <li>
                  <img src={location} alt="location" />
                  {tripInfo ? `地址：${tripInfo[0].Address}` : null}
                </li>
                <li>
                  <img src={phone} alt="phone" />
                  {tripInfo ? `電話：${tripInfo[0].Phone}` : null}
                </li>
                <li>
                  <img src={time} alt="time" />
                  {tripInfo
                    ? `開放時間:${tripInfo[0].OpenTime.replace(/星/g, "\n星")}`
                    : null}
                </li>
                <li>
                  <img src={ticket} alt="ticket" />
                  {tripInfo
                    ? `票價資訊：${
                        tripInfo[0].TicketInfo === undefined
                          ? "無票價資訊"
                          : tripInfo[0].TicketInfo
                      }`
                    : null}
                </li>
              </ul>
            </div>
            <div className="list">
              <ul>
                <li>
                  <img src={weather} alt="weather" /> 即時天氣：
                  <span>
                    <img src={sunny} alt="sunny" />
                    <a href={"https://www.cwb.gov.tw/V8/C/"}>(詳細天氣資訊)</a>
                  </span>
                </li>
                <li>
                  <img src={bus} alt="bus" />
                  公車路線：
                </li>
              </ul>
            </div>
          </div>
          <div className="describe_text">
            {tripInfo ? tripInfo[0].Description : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfoMenu;
