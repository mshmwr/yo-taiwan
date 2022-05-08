import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import foodSection from "../../asset/images/foodSection.png";
import React, { useState } from "react";
import SearchingResult from "./searchingResult";
import { DistrictDatafromMOTC } from "../../utils/axios";
import styles from "./style.module.scss";

function FoodFeaturedPage() {
  const [regionSelected, setregionSelected] = useState(0);
  const [citySelected, setcitySelected] = useState([""]);
  const BreadCrumbColor = { color: "#EF8678", fontWeight: "700" };

  return (
    <>
      <div>
        <Header />
      </div>
      <BreadCrumb
        topic={{
          topic: "特色美食",
          color: BreadCrumbColor,
          link: "/yo-taiwan/foodFeaturedPage",
        }}
      />
      <div
        className={styles.food_main_section_tab}
        style={{
          backgroundImage: `url(${foodSection})`,
        }}
      >
        <div className={styles.section_topic_tab}>特色美食</div>
        <div className={styles.section_subtitle_tab}>為您精選豐富的台灣道地美食！</div>
        <div className={styles.location_menu}>
          <div className={styles.region_menu}>
            {DistrictDatafromMOTC.map((d, index) =>
              +regionSelected === index ? (
                <div id={index} key={d.cities[0]+index} className={styles.regionActive}>
                  {d.region}
                </div>
              ) : (
                <div id={index} key={d.cities[0]+index} onClick={(e) => setregionSelected(e.target.id)}>
                  {d.region}
                </div>
              )
            )}
          </div>
          <div className={styles.cities_menu}>
            {DistrictDatafromMOTC.filter(
              (d, index) => index === +regionSelected
            )[0].cities.map((c) =>
              citySelected[0] === c[0] ? (
                <div className={styles.cityActive} key={c[0]}>{c[0]}</div>
              ) : (
                <div onClick={() => setcitySelected(c)} key={c[0]}>{c[0]}</div>
              )
            )}
          </div>
        </div>
      </div>
      <SearchingResult searchCity={citySelected} />
      <Footer />
    </>
  );
}

export default FoodFeaturedPage;
