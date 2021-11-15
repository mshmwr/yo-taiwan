import React from "react";
import search from "../../images/icon/search.png";

const HeaderSearch = () => {
  return (
    <div className="trip_search_field1">
      <input
        type="text"
        className="search_field_input1"
        placeholder="請輸入目的地、景點等關鍵字"
      />
      <img src={search} alt="search"></img>
    </div>
  );
};

export default HeaderSearch;
