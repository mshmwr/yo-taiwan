import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "@asset/icon/search.png";
import styles from "./style.module.scss";

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
    <div className={styles.tripSearchField1}>
      <input
        type="text"
        className={styles.searchFieldInput1}
        placeholder="請輸入目的地、景點等關鍵字"
        onChange={(e) => setinput(e.target.value)}
      />
      <img
        className={styles.searchIcon}
        src={search}
        alt="search"
        onClick={clickSearch}
      />
    </div>
  );
};

export default HeaderSearch;
