import React from "react";
import "./style.scss";

const BreadCrumb = ({ topic }) => {
  const defaultStyle = { color: "#666666" };
  return (
    <div className="breadcrumb">
      <span>
        <a href="/yo-taiwan">{`首頁 >`}</a>{" "}
      </span>
      <span>
        <a href={topic.link} style={topic.subTopic ? defaultStyle : topic.color}>
          {topic.topic}
        </a>
      </span>
      <span style={topic.color}>{topic.subTopic}</span>
    </div>
  );
};

export default BreadCrumb;
