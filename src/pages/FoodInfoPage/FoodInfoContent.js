import React from "react";
import styles from "./style.module.scss";

const FoodInfoContent = ({ foodInfo }) => {
  return (
    <div className="content_section">
      <span className={styles.content_title}>餐廳介紹</span>
      <div className={styles.content_text}>{foodInfo && foodInfo[0].Description}</div>
    </div>
  );
};

export default FoodInfoContent;
