import React, { useState } from "react";
import btnLeft from "../../asset/icon/btn_next_left.png";
import btnRight from "../../asset/icon/btn_next_right.png";
import "./style.scss";

const Carousel = ({ tripInfo }) => {
  const [imgBtn, setImgBtn] = useState(0);

  let picArray = Array(3).fill(
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png"
  );
  if (tripInfo) {
    let img = Object.values(tripInfo[0].Picture).filter((p) =>
      p.includes("http")
    );
    for (let i = 0; i < img.length; i++) {
      picArray[i] = img[i];
    }
  }

  if (imgBtn > 2) setImgBtn(2);
  if (imgBtn < 0) setImgBtn(0);

  return (
    <div className="tripInfo_menu_img">
      <div className="full-view">
        <img src={picArray[imgBtn]} alt="landscapePicture" />

        <div className="btn_next_trip">
          <img
            src={btnLeft}
            alt="btnLeft"
            onClick={() => {
              setImgBtn(imgBtn - 1);
            }}
          />
          <img
            src={btnRight}
            alt="btnright"
            onClick={() => {
              setImgBtn(imgBtn + 1);
            }}
          />
        </div>
      </div>
      <div className="section-view">
        {picArray.map((p, i) => {
          if (i === imgBtn) {
            return <img src={p} alt="landscapeimage" />;
          } else {
            return (
              <img src={p} alt="landscapeimage" className="selected-img" />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
