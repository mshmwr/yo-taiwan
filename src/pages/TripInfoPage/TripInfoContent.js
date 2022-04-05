import React from "react";

const TripInfoContent = ({ tripInfo }) => {
  return (
    <div className="content_section">
      <span className="content_title">景點介紹</span>
      <div className="content_text">
        {tripInfo ? tripInfo[0].DescriptionDetail : null}
      </div>

      <span className="content_title">交通方式</span>
      <div className="content_text">
        {tripInfo ? tripInfo[0].TravelInfo : null}
      </div>
    </div>
  );
};

export default TripInfoContent;
