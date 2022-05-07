import React, { useState } from "react";
import btnLeft from "../../asset/icon/btn_next_left.png";
import btnRight from "../../asset/icon/btn_next_right.png";
import "./style.scss";
const CAROUSEL_NUMBER = 3;
const Carousel = ({ tripInfo }) => {
  const [imgBtn, setImgBtn] = useState(0);

  const picArray = [];
  const defaultImg =
    "https://user-images.githubusercontent.com/89368918/148541385-5f1bffa5-80f1-4faa-8d93-2945a568c917.png";

  for (let i = 0; i < CAROUSEL_NUMBER; i++) {
    if (tripInfo) {
      const imgs = Object.values(tripInfo[0].Picture).filter((p) =>
        p.includes("http")
      );
      picArray.push({ id: i, src: imgs[i] ? imgs[i] : defaultImg });
    } else {
      picArray.push({ id: i, src: defaultImg });
    }
  }

  if (imgBtn > CAROUSEL_NUMBER-1) setImgBtn(CAROUSEL_NUMBER-1);
  if (imgBtn < 0) setImgBtn(0);

  return (
    <div className="tripInfo_menu_img">
      <div className="full-view">
        {<img src={picArray[imgBtn] && picArray[imgBtn].src} alt="landscapePicture" />}
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
            alt="btnRight"
            onClick={() => {
              setImgBtn(imgBtn + 1);
            }}
          />
        </div>
      </div>
      <div className="section-view">
        {picArray.map((p, i) => {
          if (i === imgBtn) {
            return (
              <div key={p.id} className="section-view_frame">
                <img src={p.src} alt="landscapeImage" />
              </div>
            );
          } else {
            return (
              <div key={p.id} className="section-view_frame">
                <img
                  src={p.src}
                  alt="landscapeImage"
                  className="selected-img"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
