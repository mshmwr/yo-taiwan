import React from "react";

function Banner({ bannerInfo }) {
  console.log(bannerInfo);
  return (
    <div
      className="main_section"
      style={{
        backgroundImage: `url(${bannerInfo.image})`,
      }}
    >
      <div className="section_topic">{bannerInfo.topic}</div>
      <div className="section_subtitle">{bannerInfo.subtitle}</div>
    </div>
  );
}

export default Banner;
