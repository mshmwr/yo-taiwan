import React from "react";
import "./style.scss";

const BreadCrumb = ({ topic }) => {
  console.log(topic);
  return (
    <div className="breadcrumb">
      <span className="first_layer">{`首頁 >`} </span>
      <span className="second_layer">{topic}</span>
    </div>
  );
};

export default BreadCrumb;
