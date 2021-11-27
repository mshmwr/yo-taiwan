import React from "react";
import { Link } from "react-router-dom";
import waveBlue from "../../images/icon/wave_blue.png";
import waveYellow from "../../images/icon/wave_yellow.png";
import wavePink from "../../images/icon/wave_pink.png";
import { getyoTaiwanLogoIcon } from "../../utils/iconUtilis";
import HeaderSearch from "./HeaderSearch";

const Header = ({ showSearch }) => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">{getyoTaiwanLogoIcon()}</Link>
        <div className={showSearch === "show" ? "show" : "hide"}>
          <HeaderSearch />
        </div>
        <div className="nav_menu">
          <Link to="/" className="menu_landscape">
            觀光景點
            <img className="wave_blue1" src={waveBlue} alt="wave_blue" />
          </Link>
          <Link to="/" className="menu_fair">
            主題旅遊
            <img className="wave_yellow" src={waveYellow} alt="wave_Yellow" />
          </Link>
          <Link to="/" className="menu_food">
            特色美食
            <img className="wave_pink" src={wavePink} alt="wave_Pink" />
          </Link>
          <Link to="/yoBike" className="menu_traffic">
            交通資訊
            <img className="wave_blue2" src={waveBlue} alt="wave_blue" />
          </Link>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
