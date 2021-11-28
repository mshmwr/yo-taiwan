import React, { useState } from "react";
import { Link } from "react-router-dom";
import waveBlue from "../../images/icon/wave_blue.png";
import waveYellow from "../../images/icon/wave_yellow.png";
import wavePink from "../../images/icon/wave_pink.png";
import { getyoTaiwanLogoIcon } from "../../utils/iconUtilis";
import HeaderSearch from "./HeaderSearch";
import SelectBar from "./selectBar";
import { SelectBarTraffic } from "./selectBar";

const Header = ({ showSearch }) => {
  const [showSelect, setshowSelect] = useState("hide");
  const [showSelectTraffic, setshowSelectTraffic] = useState("hide");
  function MouseOverSelect() {
    setshowSelect("show");
  }
  function ClickSelect() {
    setshowSelect("hide");
  }
  function MouseUpSelect() {
    setshowSelect("show");
  }
  function MouseOverSelectTraffic() {
    setshowSelectTraffic("show");
  }
  function ClickSelectTraffic() {
    setshowSelectTraffic("hide");
  }
  function MouseUpSelectTraffic() {
    setshowSelectTraffic("show");
  }
  return (
    <div className="header">
      <div className="header_container" onClick={ClickSelectTraffic}>
        <Link to="/">{getyoTaiwanLogoIcon()}</Link>
        <div className={showSearch === "show" ? "show" : "hide"}>
          <HeaderSearch />
        </div>
        <div className="nav_menu">
          <Link to="/" className="menu_landscape">
            觀光景點
            <img className="wave_blue1" src={waveBlue} alt="wave_blue" />
          </Link>
          <Link
            to="/"
            className="menu_fair"
            onMouseOver={MouseOverSelect}
            onMouseUp={MouseUpSelect}
            onClick={ClickSelect}
          >
            主題旅遊
            <img className="wave_yellow" src={waveYellow} alt="wave_Yellow" />
          </Link>
          <Link to="/" className="menu_food">
            特色美食
            <img className="wave_pink" src={wavePink} alt="wave_Pink" />
          </Link>
          <Link
            to="/"
            className="menu_traffic"
            onMouseOver={MouseOverSelectTraffic}
            onMouseUp={MouseUpSelectTraffic}
            onClick={ClickSelectTraffic}
          >
            交通資訊
            <img className="wave_blue2" src={waveBlue} alt="wave_blue" />
          </Link>
          <button className="btn_callforaction">今天想去哪？</button>
          <div className={showSelect === "show" ? "show" : "hide"}>
            <SelectBar />
          </div>
          <div className={showSelectTraffic === "show" ? "show" : "hide"}>
            <SelectBarTraffic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
