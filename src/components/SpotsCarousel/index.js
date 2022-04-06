import React, { useState, useEffect } from "react";
import btn_next from "../../asset/icon/btn_next.png";
import Spots from "./Spots";
const SPOT_QUANTITY_DESKTOP = 5;
const SPOT_QUANTITY_MOBILE = 4;
function handleWidthChange(width) {
  return width > 1200;
}

let prevWidth = 0;

const SpotsCarousel = ({ title = "", page = "", fetchSpot, fetchSpotAll }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [spots, setSpots] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);

  const SPOT_QUANTITY = isDesktop
    ? SPOT_QUANTITY_DESKTOP
    : SPOT_QUANTITY_MOBILE;

  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    async function fetchData() {
      setSpots(await fetchSpot(currentPage * SPOT_QUANTITY, SPOT_QUANTITY));
    }
    if (fetchSpot) fetchData();
  }, [currentPage, fetchSpot, SPOT_QUANTITY]);

  useEffect(() => {
    async function fetchData() {
      const spots = await fetchSpotAll(currentPage * SPOT_QUANTITY);
      if (spots) setTotalPage(Math.ceil(spots.length / SPOT_QUANTITY));
    }
    if (fetchSpotAll) fetchData();
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === "number" && width !== prevWidth) {
          prevWidth = width;
          setIsDesktop(handleWidthChange(width));
        }
      }
    });

    observer.observe(document.body, { box: "border-box" });
  });

  return (
    <div className="landscape_section">
      <span className="section_title">{title}</span>
      {!!currentPage && (
        <div className="btn_prev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btn_prev" />
        </div>
      )}
      <Spots spots={spots} page={page} />
      {currentPage < totalPage && (
        <div className="btn_next" onClick={handleClickNext}>
          <img src={btn_next} alt="btn_next" />
        </div>
      )}
    </div>
  );
};

export default SpotsCarousel;
