import Header from "@components/Header";
import BreadCrumb from "@components/BreadCrumb";
import travelSection from "@asset/images/travelSection.png";
import React, { useState } from "react";
import SearchingResult from "./searchingResult";
import { DISTRICT_DATA_FROM_MOTC } from "@utils/constants";
import styles from "./style.module.scss";

function TravelFeaturedPage() {
  const [regionSelected, setRegionSelected] = useState(0);
  const [citySelected, setcitySelected] = useState([""]);
  const BreadCrumbColor = { color: "#74D1E7", fontWeight: "700" };

  return (
    <>
      <div>
        <Header />
      </div>
      <BreadCrumb
        topic={{
          topic: "觀光景點",
          color: BreadCrumbColor,
          link: "/yo-taiwan/TravelFeaturedPage",
        }}
      />
      <div
        className={styles.main_section_tab}
        style={{
          backgroundImage: `url(${travelSection})`,
        }}
      >
        <div className={styles.section_topic_tab}>觀光景點</div>
        <div className={styles.section_subtitle_tab}>
          為您精選全台知名觀光景點！
        </div>
        <div className={styles.location_menu}>
          <div className={styles.region_menu}>
            {DISTRICT_DATA_FROM_MOTC.map((d, index) =>
              +regionSelected === index ? (
                <div
                  id={index}
                  key={d.cities[0] + index}
                  className={styles.regionActive}
                >
                  {d.region}
                </div>
              ) : (
                <div
                  id={index}
                  key={d.cities[0] + index}
                  onClick={(e) => setRegionSelected(e.target.id)}
                >
                  {d.region}
                </div>
              )
            )}
          </div>
          <div className={styles.cities_menu}>
            {DISTRICT_DATA_FROM_MOTC.filter(
              (d, index) => index === +regionSelected
            )[0].cities.map((c) =>
              citySelected[0] === c[0] ? (
                <div className={styles.cityActive} key={c[0]}>
                  {c[0]}
                </div>
              ) : (
                <div onClick={() => setcitySelected(c)} key={c[0]}>
                  {c[0]}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <SearchingResult searchCity={citySelected} />
    </>
  );
}

export default TravelFeaturedPage;
