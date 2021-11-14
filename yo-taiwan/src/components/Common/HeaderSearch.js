import React from "react";
import search from "../../images/icon/search.png";

const Header = () => {
  return (
    <div class="trip_search_field1">
      <input
        type="text"
        class="search_field_input"
        placeholder="請輸入目的地、景點等關鍵字"
      />
      <img src={search} alt="search"></img>
    </div>
  );
};

export default Header;
