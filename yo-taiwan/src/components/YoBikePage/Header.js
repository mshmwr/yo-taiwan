import React from "react";
import { Link } from "react-router-dom";
import { getYoBikeLogoIcon } from "../../utils/iconUtilis";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/yoBike">{getYoBikeLogoIcon()}</Link>
        <div className="nav_menu">
          <Link to="/" className="menu_rentbike">
            租/還車即時資訊
            <img
              className="wave_yellow_long"
              src="./static/icon/wave_yellow_long.png"
              alt=""
            />
          </Link>
          <Link to="/" className="menu_routeinfo">
            路線資訊
            <img
              className="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </Link>
          <Link to="/" className="menu_landscape">
            觀光景點
            <img
              className="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </Link>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
