import React, { useState, useEffect } from "react";
import { getLandscape, getLandscapeAll } from "../../apis/landscapeApi";
import btn_next from "../../asset/icon/btn_next.png";
import Spots from "./Spots";
const landscapeQuantity = 5;

const SpotsCarousel = () => {
  const [totalPage, setTotalPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [landscapes, setSpots] = useState([]);

  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    async function fetchData() {
      setSpots(await getLandscape(currentPage * landscapeQuantity));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      const landscapes = await getLandscapeAll(currentPage * landscapeQuantity);
      if (landscapes)
        setTotalPage(Math.ceil(landscapes.length / landscapeQuantity));
    }
    fetchData();
  }, []);

  return (
    <div className="landscape_section">
      <span className="section_title">想去哪玩？</span>
      {!!currentPage && (
        <div className="btn_prev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btn_prev" />
        </div>
      )}
      <Spots landscapes={landscapes} />
      {currentPage < totalPage && (
        <div className="btn_next" onClick={handleClickNext}>
          <img src={btn_next} alt="btn_next" />
        </div>
      )}
    </div>
  );
};

export default SpotsCarousel;
