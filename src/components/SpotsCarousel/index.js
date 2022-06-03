import React, { useState, useEffect, useContext } from "react";
import btn_next from "@asset/icon/btn_next.png";
import Spots from "./Spots";
import "./style.scss";
import { WindowWidthContext } from "@contexts";

const SPOT_QUANTITY_DESKTOP = 5;
const SPOT_QUANTITY_MOBILE = 4;
const DESKTOP_MIN_WIDTH = 1440;
const SPOT_MIN_INDEX = 0;

const SpotsCarousel = ({ title = "", spotsData = [], pathnameConfig }) => {
  const windowWidth = useContext(WindowWidthContext);
  const [spotsTotal, setSpotsTotal] = useState(0);
  const [currentSpotIndex, setCurrentSpotIndex] = useState(0);
  const [spots, setSpots] = useState([]);
  const [spotQuantity, setSpotQuantity] = useState(SPOT_QUANTITY_DESKTOP);

  const isInRange = React.useCallback(
    (num) => {
      const min = SPOT_MIN_INDEX;
      const max = spotsTotal;
      return num >= min && num <= max;
    },
    [spotsTotal]
  );

  const handleClickNext = () => {
    setCurrentSpotIndex((prev) =>
      isInRange(prev + spotQuantity) ? prev + spotQuantity : spotsTotal
    );
  };
  const handleClickPrev = () => {
    setCurrentSpotIndex((prev) =>
      isInRange(prev - spotQuantity) ? prev - spotQuantity : SPOT_MIN_INDEX
    );
  };

  useEffect(() => {
    if (spotsData.length) {
      const startIndex = isInRange(currentSpotIndex)
        ? currentSpotIndex
        : SPOT_MIN_INDEX;
      const endIndex = isInRange(currentSpotIndex + spotQuantity)
        ? currentSpotIndex + spotQuantity
        : spotsTotal;

      setSpots(spotsData.slice(startIndex, endIndex));
    }
  }, [spotsData, currentSpotIndex, spotQuantity, spotsTotal, isInRange]);

  useEffect(() => {
    if (spotsData.length) {
      setSpotsTotal(spotsData.length);
    }
  }, [spotsData]);

  useEffect(() => {
    const isDesktop = windowWidth >= DESKTOP_MIN_WIDTH;
    setSpotQuantity(isDesktop ? SPOT_QUANTITY_DESKTOP : SPOT_QUANTITY_MOBILE);
  }, [windowWidth]);

  return (
    <div className="landscapeSection">
      <span className="title">{title}</span>
      {isInRange(currentSpotIndex - spotQuantity) && (
        <div className="btnPrev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btnPrev" />
        </div>
      )}
      <Spots spots={spots} pathnameConfig={pathnameConfig} />
      {isInRange(currentSpotIndex + spotQuantity) && (
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
