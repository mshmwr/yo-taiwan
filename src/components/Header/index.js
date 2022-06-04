import React from "react";
import { Link } from "react-router-dom";
import { getyoTaiwanLogoIcon } from "@utils/iconUtilis";
import HeaderSearch from "../HeaderSearch";
import SelectBar from "../SelectBar";
import { SelectBarTraffic } from "../SelectBar";
import styles from "./style.module.scss";


const Header = ({ showSearch }) => {
  return (
    <div className={styles.header}>
      <input
        type="checkbox"
        name=""
        id="menuControl"
        className={styles.menuControl}
      ></input>
      <div className={styles.container}>
        <label htmlFor="menuControl" className={styles.menuBtn}>
          <span>選單</span>
        </label>
        <Link className={styles.headerLogo} to="/">
          {getyoTaiwanLogoIcon()}
        </Link>
        <div className={showSearch === styles.show ? styles.show : styles.hide}>
          <HeaderSearch />
        </div>
        <div className={styles.navMenu}>
          <Link to="/TravelFeaturedPage" className={styles.menuLandscape}>
            觀光景點
          </Link>
          <span className={styles.menuFair}>
            <Link to="/TopicTravelPage" className={styles.menuFairLink}>
              主題旅遊
            </Link>
            <SelectBar />
          </span>
          <Link to="/foodFeaturedPage" className={styles.menuFood}>
            特色美食
          </Link>
          <span className={styles.menuTraffic}>
            <Link to="/" className={styles.menuTrafficLink}>
              交通資訊
            </Link>
            <SelectBarTraffic />
          </span>
          <button className={styles.btnCallForAction}>今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
