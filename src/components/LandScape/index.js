import React, { useState, useEffect } from "react";
import { getLandscape, getLandscapeAll } from "../../apis/landscapeApi";
import btn_next from "../../asset/icon/btn_next.png";
import Landscapes from "./Landscapes";
const landscapeQuantity = 5;

const LandScape = () => {
  const [totalPage, setTotalPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [landscapes, setLandscapes] = useState([]);

  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    async function fetchData() {
      setLandscapes(await getLandscape(currentPage * landscapeQuantity));
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
      <span className="sectionTitle">想去哪玩？</span>
      {!!currentPage && (
        <div className="btn_prev" onClick={handleClickPrev}>
          <img src={btn_next} alt="btn_prev" />
        </div>
      )}
      <Landscapes landscapes={landscapes} />
      {currentPage < totalPage && (
        <div className="btn_next" onClick={handleClickNext}>
          <img src={btn_next} alt="btn_next" />
        </div>
      )}
    </div>
  );
};

export default LandScape;
