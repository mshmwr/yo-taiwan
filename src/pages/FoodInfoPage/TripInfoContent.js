import React from "react";
import "./TripInfoContent.scss";

const TripInfoContent = ({ foodInfo }) => {
  return (
    <div className="tripInfo_content_section">
      <span className="content_title">餐廳介紹</span>
      <div className="content_text">
        {foodInfo && foodInfo[0].Description}
      </div>
    </div>
  );
};

export default TripInfoContent;
