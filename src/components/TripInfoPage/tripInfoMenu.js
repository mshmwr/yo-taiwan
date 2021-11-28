import React from "react";
import btnLeft from "../../images/icon/btn_next_left.png";
import btnRight from "../../images/icon/btn_next_right.png";
import landscapeHualian from "../../images/image/landscape_hualian.png";
import location from "../../images/icon/location.png";
import phone from "../../images/icon/phone.png";
import time from "../../images/icon/time.png";
import ticket from "../../images/icon/ticket.png";
import weather from "../../images/icon/weather.png";
import sunny from "../../images/icon/sunny.svg";
import bus from "../../images/icon/bus.png";
import "../../css/tripInfo.css";

const TripInfoMenu = ({ tripInfo }) => {
  console.log(tripInfo);
  return (
    <div className="tripInfo_menu_section">
      <div className="breadcrumb">
        {`首頁 > 觀光景點 >`}
        <span>{tripInfo ? tripInfo[0].ScenicSpotName : null}</span>
      </div>
      <div className="tripInfo_menu">
        <div className="tripInfo_menu_img">
          <div className="full-view">
            <img
              src={tripInfo ? tripInfo[0].Picture.PictureUrl1 : null}
              alt="landscapePicture"
            />
            <div className="btn_next_trip">
              <img src={btnLeft} alt="btnLeft" />
              <img src={btnRight} alt="btnright" />
            </div>
          </div>
          <div className="section-view">
            <img src={landscapeHualian} alt="landscapeHualian" />
            <img src={landscapeHualian} alt="landscapeHualian" />
            <img src={landscapeHualian} alt="landscapeHualian" />
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
