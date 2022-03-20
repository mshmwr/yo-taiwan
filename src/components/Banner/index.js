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
      <div class="section_topic">{bannerInfo.topic}</div>
      <div class="section_subtitle">{bannerInfo.subtitle}</div>
    </div>
  );
}

export default Banner;
