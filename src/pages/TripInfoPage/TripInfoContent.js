import React from "react";
import styles from "./style.module.scss";

const TripInfoContent = ({ tripInfo }) => {
  return (
    <div className="content_section">
      <span className={styles.content_title}>景點介紹</span>
      <div className={styles.content_text}>
        {tripInfo ? tripInfo[0].DescriptionDetail : null}
      </div>

      <span className={styles.content_title}>交通方式</span>
      <div className={styles.content_text}>
        {tripInfo ? tripInfo[0].TravelInfo : null}
      </div>
    </div>
  );
};

export default TripInfoContent;
