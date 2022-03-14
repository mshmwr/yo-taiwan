import React from "react";
import "./style.scss";

const BreadCrumb = () => {
  return (
    <div class="breadcrumb">
      <span className="first_layer">{`首頁 >`} </span>
      <span className="second_layer">主題旅遊</span>
    </div>
  );
};

export default BreadCrumb;
