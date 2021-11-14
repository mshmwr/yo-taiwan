import React from "react";
import landscapeHualian from "../../images/image/landscape_hualian.png";
import bus from "../../images/icon/bus.svg";
import location from "../../images/icon/location.svg";
import sunny from "../../images/icon/sunny.svg";
import cloudy from "../../images/icon/cloudy.svg";
import rainy from "../../images/icon/rainy.svg";
import btn_next from "../../images/icon/btn_next.png";

// <a href={"./"} style={{ textDecoration: "none" }}>   target="_blank"
const LandScape = () => {
  return (
    <div className="landscape_section">
      <span className="section_title">想去哪玩？</span>
      <a href={"./"} style={{ textDecoration: "none" }}>
        <div className="landscape_block">
          <div className="image_block">
            <img src={landscapeHualian} alt="landscapeHualian" />
          </div>
          <div className="content_block">
            六十石山金針花海
            <div className="tag_bus">
              <img src={bus} alt="bus" />
              台灣好行 - 西濱快線
            </div>
            <div className="tag_location">
              <img src={location} alt="location" />
              花蓮縣 , 富里鄉
            </div>
            <div className="weather">
              <img src={sunny} alt="sunny" />
            </div>
          </div>
        </div>
      </a>
      <a href={"./"} style={{ textDecoration: "none" }}>
        <div className="landscape_block">
          <div className="image_block">
            <img src={landscapeHualian} alt="landscapeHualian" />
          </div>
          <div className="content_block">
            六十石山金針花海
            <div className="tag_bus">
              <img src={bus} alt="bus" />
              台灣好行 - 西濱快線
            </div>
            <div className="tag_location">
              <img src={location} alt="location" />
              花蓮縣 , 富里鄉
            </div>
            <div className="weather">
              <img src={rainy} alt="rainy" />
            </div>
          </div>
        </div>
      </a>
      <a href={"./"} style={{ textDecoration: "none" }}>
        <div className="landscape_block">
          <div className="image_block">
            <img src={landscapeHualian} alt="landscapeHualian" />
          </div>
          <div className="content_block">
            六十石山金針花海
            <div className="tag_bus">
              <img src={bus} alt="bus" />
              台灣好行 - 西濱快線
            </div>
            <div className="tag_location">
              <img src={location} alt="location" />
              花蓮縣 , 富里鄉
            </div>
            <div className="weather">
              <img src={cloudy} alt="cloudy" />
            </div>
          </div>
        </div>
      </a>
      <a href={"./"} style={{ textDecoration: "none" }}>
        <div className="landscape_block">
          <div className="image_block">
            <img src={landscapeHualian} alt="landscapeHualian" />
          </div>
          <div className="content_block">
            六十石山金針花海
            <div className="tag_bus">
              <img src={bus} alt="bus" />
              台灣好行 - 西濱快線
            </div>
            <div className="tag_location">
              <img src={location} alt="location" />
              花蓮縣 , 富里鄉
            </div>
            <div className="weather">
              <img src={sunny} alt="sunny" />
            </div>
          </div>
        </div>
      </a>
      <a href={"./"} style={{ textDecoration: "none" }}>
        <div className="landscape_block">
          <div className="image_block">
            <img src={landscapeHualian} alt="landscapeHualian" />
          </div>
          <div className="content_block">
            六十石山金針花海
            <div className="tag_bus">
              <img src={bus} alt="bus" />
              台灣好行 - 西濱快線
            </div>
            <div className="tag_location">
              <img src={location} alt="location" />
              花蓮縣 , 富里鄉
            </div>
            <div className="weather">
              <img src={sunny} alt="sunny" />
            </div>
          </div>
        </div>
      </a>
      <div className="btn_next">
        <img src={btn_next} alt="btn_next" />
      </div>
    </div>
  );
};

export default LandScape;
