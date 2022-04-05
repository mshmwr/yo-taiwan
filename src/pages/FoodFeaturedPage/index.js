import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import foodSection from "../../asset/images/foodSection.png";
import React, { useState } from "react";
import SearchingResult from "./searchingResult";
import { DistrictDatafromMOTC } from "../../utils/axios";
import "./style.scss";

function FoodFeaturedPage() {
  const [regionSelected, setregionSelected] = useState(0);
  const [citySelected, setcitySelected] = useState([""]);
  const BreadCrumbColor = { color: "#EF8678", fontWeight: "700" };

  return (
    <>
      <div className="header1">
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
        className="food_main_section_tab"
        style={{
          backgroundImage: `url(${foodSection})`,
        }}
      >
        <div className="section_topic_tab">特色美食</div>
        <div className="section_subtitle_tab">為您精選豐富的台灣道地美食！</div>
        <div className="location_menu">
          <div className="region_menu">
            {DistrictDatafromMOTC.map((d, index) =>
              +regionSelected === index ? (
                <div id={index} className="regionActive">
                  {d.region}
                </div>
              ) : (
                <div id={index} onClick={(e) => setregionSelected(e.target.id)}>
                  {d.region}
                </div>
              )
            )}
          </div>
          <div className="cities_menu">
            {DistrictDatafromMOTC.filter(
              (d, index) => index === +regionSelected
            )[0].cities.map((c) =>
              citySelected[0] === c[0] ? (
                <div className="cityActive">{c[0]}</div>
              ) : (
                <div onClick={() => setcitySelected(c)}>{c[0]}</div>
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
