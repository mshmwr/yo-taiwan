import React from "react";
import { Link } from "react-router-dom";
import { getYoBikeLogoIcon } from "../../utils/iconUtilis";

const Header = () => {
  return (
    <div class="header">
      <div class="header_container">
        <Link to="/yoBike">{getYoBikeLogoIcon()}</Link>
        <div class="nav_menu">
          <a href="/yoBike" class="menu_rentbike">
            租/還車即時資訊
            <img
              class="wave_yellow_long"
              src="./static/icon/wave_yellow_long.png"
              alt=""
            />
          </a>
          <a href="/yoBike" class="menu_routeinfo">
            路線資訊
            <img
              class="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </a>
          <a href="/yoBike" class="menu_landscape">
            觀光景點
            <img
              class="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </a>
          <button class="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
