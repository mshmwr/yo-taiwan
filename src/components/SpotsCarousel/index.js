import React, { useState, useEffect } from "react";
import btn_next from "../../asset/icon/btn_next.png";
import Spots from "./Spots";
import "./style.scss";

const SPOT_QUANTITY_DESKTOP = 5;
const SPOT_QUANTITY_MOBILE = 4;
const DESKTOP_MIN_WIDTH = 1440;
const SPOT_MIN_INDEX = 0;

let prevWidth = 0;

const SpotsCarousel = ({ title = "", spotsData = [], pathnameConfig }) => {
  const [spotsTotal, setSpotsTotal] = useState(0);
  const [currentSpotIndex, setCurrentSpotIndex] = useState(0);
  const [spots, setSpots] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);

  const SPOT_QUANTITY = isDesktop
    ? SPOT_QUANTITY_DESKTOP
    : SPOT_QUANTITY_MOBILE;

  const isInRange = (num) => {
    const min = SPOT_MIN_INDEX;
    const max = spotsTotal;
    return num >= min && num <= max;
  };

  const handleClickNext = () => {
    setCurrentSpotIndex((prev) =>
      isInRange(prev + SPOT_QUANTITY) ? prev + SPOT_QUANTITY : spotsTotal
    );
  };
  const handleClickPrev = () => {
    setCurrentSpotIndex((prev) =>
      isInRange(prev - SPOT_QUANTITY) ? prev - SPOT_QUANTITY : SPOT_MIN_INDEX
    );
  };

  useEffect(() => {
    if (spotsData.length) {
      const startIndex = isInRange(currentSpotIndex)
        ? currentSpotIndex
        : SPOT_MIN_INDEX;
      const endIndex = isInRange(currentSpotIndex + SPOT_QUANTITY)
        ? currentSpotIndex + SPOT_QUANTITY
        : spotsTotal;
      setSpots(spotsData.slice(startIndex, endIndex));
    }
  }, [spotsData, currentSpotIndex, SPOT_QUANTITY, spotsTotal]);

  useEffect(() => {
    if (spotsData.length) {
      setSpotsTotal(spotsData.length);
    }
  }, [spotsData]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === "number" && width !== prevWidth) {
          prevWidth = width;
          setIsDesktop(width >= DESKTOP_MIN_WIDTH);
        }
      }
    });

    observer.observe(document.body, { box: "border-box" });
  });

  return (
    <div className="landscapeSection">
      <span className="title">{title}</span>
      {isInRange(currentSpotIndex - SPOT_QUANTITY) && (
        <div className="btnPrev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btnPrev" />
        </div>
      )}
      <Spots spots={spots} pathnameConfig={pathnameConfig} />
      {isInRange(currentSpotIndex + SPOT_QUANTITY) && (
        <div
          style={{ display: "block" }}
          className="btnNext"
          onClick={handleClickNext}
        >
          <img src={btn_next} alt="btnNext" />
        </div>
      )}
    </div>
  );
};

export default SpotsCarousel;
