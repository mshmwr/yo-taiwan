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

const TripInfoMenu = () => {
  return (
    <div className="tripInfo_menu_section">
      <div className="breadcrumb">
        {`首頁 > 觀光景點 >`}
        <span>六十石山金針花海</span>
      </div>
      <div className="tripInfo_menu">
        <div className="tripInfo_menu_img">
          <div className="full-view">
            <img src={landscapeHualian} alt="landscapeHualian" />
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
          <span className="menu_title">六十石山金針花海</span>
          <div className="menu_text">
            <div className="list">
              <ul>
                <li>
                  <img src={location} alt="location" />
                  地址：花蓮縣富里鄉竹田村
                </li>
                <li>
                  <img src={phone} alt="phone" />
                  電話：03-1234567
                </li>
                <li>
                  <img src={time} alt="time" />
                  開放時間：全天
                </li>
                <li>
                  <img src={ticket} alt="ticket" />
                  票價資訊：免費
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
            六十石山、赤科山、太麻里山為花東縱谷三大金針栽植區，也是每年8月至9月賞金針花海的好去處。六十石山位在富里鄉竹田村東側海拔約800公尺的海岸山脈上，經過一段蜿蜒的山路後，眼前出現無邊無際的田野景致，幾座農舍、涼亭散落在金黃色的金針花田間，形成一幅樸質的田園畫作。
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfoMenu;
