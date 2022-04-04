import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import travelSection from "../../asset/images/travelSection.png";
import React, { useState } from "react";
import SearchingResult from "./searchingResult";
import { DistrictDatafromMOTC } from "../../utils/axios";
import "./style.scss";

function TravelFeaturedPage() {
  const [regionSelected, setregionSelected] = useState(0);
  const [citySelected, setcitySelected] = useState([""]);
  const BreadCrumbColor = { color: '#74D1E7',fontWeight: '700' };

  return (
    <div>
      <div className="header1">
        <Header />
      </div>
      <BreadCrumb
            topic={{
              topic: "觀光景點",
              color: BreadCrumbColor,
              link:'/yo-taiwan/TravelFeaturedPage',
            }}
          />
      <div
        className="main_section_tab"
        style={{
          backgroundImage: `url(${travelSection})`,
        }}
      >
        <div className="section_topic_tab">觀光景點</div>
        <div className="section_subtitle_tab">為您精選全台知名觀光景點！</div>
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
    </div>
  );
}

export default TravelFeaturedPage;
