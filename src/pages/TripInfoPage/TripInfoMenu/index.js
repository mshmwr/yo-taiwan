import React from "react";
import Carousel from "@components/Carousel";
import location from "@asset/icon/location.png";
import phone from "@asset/icon/phone.png";
import time from "@asset/icon/time.png";
import ticket from "@asset/icon/ticket.png";
import weather from "@asset/icon/weather.png";
import BreadCrumb from "@components/BreadCrumb";
import styles from "./style.module.scss";
import Weather from "@components/Weather";
import { splitAddressToCityAndDistrict } from "@utils/addressUtils";

const TripInfoMenu = ({ tripInfo }) => {
  const BreadCrumbColor = { color: "#74D1E7", fontWeight: "700" };

  return (
    <div className={styles.tripInfo_menu_section}>
      <BreadCrumb
        topic={{
          topic: "觀光景點",
          subTopic: ` > ${tripInfo && tripInfo[0].ScenicSpotName}`,
          color: BreadCrumbColor,
          link: "/yo-taiwan/TravelFeaturedPage",
        }}
      />
      <div className={styles.tripInfo_menu}>
        <Carousel tripInfo={tripInfo} />
        <div className={styles.tripInfo_menu_text}>
          <span className={styles.menu_title}>
            {tripInfo && tripInfo[0].ScenicSpotName}
          </span>
          <div className={styles.menu_text}>
            <div className={styles.list}>
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
            <div className={styles.list}>
              <ul>
                <li>
                  <img src={weather} alt="weather" />
                  即時天氣：
                  <span>
                    <Weather
                      city={
                        splitAddressToCityAndDistrict(
                          tripInfo ? tripInfo[0].Address : null
                        ).city
                      }
                    />
                    <a href={"https://www.cwb.gov.tw/V8/C/"}>(詳細天氣資訊)</a>
                  </span>
                </li>
                <li>
                  <img src={time} alt="time" />
                  <span>
                    開放時間:
                    <div>
                      <ul className={styles.opentime}>
                        {tripInfo?.[0].OpenTime.split("；").map((s) => {
                          return <li key={s}>{s}</li>;
                        })}
                      </ul>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.describe_text}>
            {tripInfo ? tripInfo[0].Description : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfoMenu;
