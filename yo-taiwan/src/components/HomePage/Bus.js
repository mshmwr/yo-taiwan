import React from "react";

const Bus = () => {
  return (
    <div className="bus_section">
      <span className="section_title">台灣好行公車路線</span>
      <div className="block_tab_group"></div>
      <div className="bus_block"></div>
      <div className="btn_countires_group">
        <span className="btn_country_selected">宜蘭縣</span>
        <span className="btn_country_default">基隆市</span>
        <span className="btn_country_default">台北市</span>
        <span className="btn_country_default">新北市</span>
        <span className="btn_country_default">桃園市</span>
        <span className="btn_country_default">新竹縣</span>
      </div>
      <div className="btn_busroute_group">
        <div className="btn_busroute_selected">礁溪線A線</div>
        <div className="btn_busroute_default">礁溪線B線</div>
        <div className="btn_busroute_default">冬山河線</div>
        <div className="btn_busroute_default">壯圍沙丘線</div>
        <div className="btn_busroute_default">宜蘭東北角海岸線</div>
        <div className="btn_busroute_default">木柵平溪線(往平溪)</div>
      </div>
    </div>
  );
};

export default Bus;
