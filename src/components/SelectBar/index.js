import React from "react";
import { Link } from "react-router-dom";
import {
  getCampingIcon,
  getIconTemple,
  getIconOnsen,
  getIconDiving,
  getIconBook,
  getIconBicycle,
  getIconBusSelect,
} from "@utils/iconUtilis";
import styles from "../Header/style.module.scss";

const SelectBar = () => {
  return (
    <ul className={styles.menuDropdown1}>
      <li>
        <div>
          <Link to="/TopicTravelPage/0" className="a">
            <span>{getCampingIcon()}</span>戶外露營
          </Link>
        </div>
      </li>
      <li>
        <Link to="/TopicTravelPage/1" className="a">
          <span>{getIconTemple()}</span>古蹟巡禮
        </Link>
      </li>
      <li>
        <Link to="/TopicTravelPage/2" className="a">
          <span>{getIconOnsen()}</span>溫泉療癒
        </Link>
      </li>
      <li>
        <Link to="/TopicTravelPage/3" className="a">
          <span>{getIconDiving()}</span>海洋探索
        </Link>
      </li>
      <li>
        <Link to="/TopicTravelPage/4" className="a">
          <span>{getIconBook()}</span>知性之旅
        </Link>
      </li>
    </ul>
  );
};

export const SelectBarTraffic = () => {
  return (
    <ul className={styles.menuDropdown2}>
      <li>
        <div>
          <a href="https://mshmwr.github.io/yo-bike" className="a">
            <span>{getIconBicycle()}</span>自行車資訊
          </a>
        </div>
      </li>
      <li>
        <a href="https://mshmwr.github.io/yo-bus/" className="a">
          <span>{getIconBusSelect()}</span>公車資訊
        </a>
      </li>
    </ul>
  );
};

export default SelectBar;
