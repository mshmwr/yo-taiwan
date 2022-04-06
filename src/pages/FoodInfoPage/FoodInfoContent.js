import React from "react";

const FoodInfoContent = ({ foodInfo }) => {
  return (
    <div className="content_section">
      <span className="content_title">餐廳介紹</span>
      <div className="content_text">{foodInfo && foodInfo[0].Description}</div>
    </div>
  );
};

export default FoodInfoContent;
