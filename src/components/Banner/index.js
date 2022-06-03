import React from "react";
import styles from "../TopicTab/style.module.scss";

function Banner({ bannerInfo }) {
  return (
    <div
      className={styles.main_section}
      style={{
        backgroundImage: `url(${bannerInfo.image})`,
      }}
    >
      <div className={styles.section_topic}>{bannerInfo.topic}</div>
      <div className={styles.section_subtitle}>{bannerInfo.subtitle}</div>
    </div>
  );
}

export default Banner;
