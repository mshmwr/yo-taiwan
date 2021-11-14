import React from "react";
import yoTaiwanLogo from "../../images/icon/YoTaiwan_logo.svg";
import waveBlue from "../../images/icon/wave_blue.png";
import waveYellow from "../../images/icon/wave_yellow.png";
import wavePink from "../../images/icon/wave_pink.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <img src={yoTaiwanLogo} alt="YoTaiwan_logo" />
        <div className="nav_menu">
          <a href={"./"} className="menu_landscape">
            觀光景點
            <img className="wave_blue1" src={waveBlue} alt="wave_blue" />
          </a>
          <a href={"./"} className="menu_fair">
            主題旅遊
            <img className="wave_yellow" src={waveYellow} alt="wave_Yellow" />
          </a>
          <a href={"./"} className="menu_food">
            特色美食
            <img className="wave_pink" src={wavePink} alt="wave_Pink" />
          </a>
          <a href={"./"} className="menu_traffic">
            交通資訊
            <img className="wave_blue2" src={waveBlue} alt="wave_blue" />
          </a>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
