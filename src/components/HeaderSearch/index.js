import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../asset/icon/search.png";
import "./style.scss";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const clickSearch = () => {
    if (input === "") {
      return;
    }
    navigate(`/searchingResult/${input}`);
  };
  return (
    <div className="trip_search_field1">
      <input
        type="text"
        className="search_field_input1"
        placeholder="請輸入目的地、景點等關鍵字"
        onChange={(e) => setinput(e.target.value)}
      />
      <img src={search} alt="search" onClick={clickSearch} />
    </div>
  );
};

export default HeaderSearch;
