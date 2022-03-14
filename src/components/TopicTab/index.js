import React, { useState } from "react";
import campingSection from "../../asset/images/campingSection.png";
import templeSection from "../../asset/images/templeSection.png";
import onsenSection from "../../asset/images/onsenSection.png";
import divingSection from "../../asset/images/divingSection.png";
import bookSection from "../../asset/images/bookSection.png";
import "./style.scss";
import SearchingResult from "../../pages/TravelFeaturedPage/searchingResult";
import {
  getCampingIcon,
  getIconTemple,
  getIconOnsen,
  getIconDiving,
  getIconBook,
} from "../../utils/iconUtilis";

const TopicTab = () => {
  const tabs = [
    {
      name: "戶外露營",
      icon: getCampingIcon(),
      sectionImg: campingSection,
      word: "# 與三五好友一起呼吸大自然",
      keywords: ["露營"]
    },
    {
      name: "古蹟巡禮",
      icon: getIconTemple(),
      sectionImg: templeSection,
      word: "# 一同探訪漫長歷史演進所留下的美麗文化資產",
      keywords: ["古蹟"],
    },
    {
      name: "溫泉療癒",
      icon: getIconOnsen(),
      sectionImg: onsenSection,
      word: "# 凜凜冬日，就要來趟溫泉輕旅行！",
      keywords: ["溫泉"],
    },
    {
      name: "海洋探索",
      icon: getIconDiving(),
      sectionImg: divingSection,
      word: "# 與美麗湛藍的海洋來場浪漫約會",
      keywords: ["海岸"],
    },
    {
      name: "知性之旅",
      icon: getIconBook(),
      sectionImg: bookSection,
      word: "# 讓知識的力量陶冶你的心靈",
      keywords: ["知識"],
    },
  ];
  const [selectedTab, setselectedTab] = useState(0);

  const Selected = () => {
    return (
      <div className="selected_tab">
        <span>{tabs[selectedTab].icon}</span>
        {tabs[selectedTab].name}
        <div className="tab_bar"></div>
      </div>
    );
  };

  return (
    <div>
      <div className="topic_tab">
        {tabs.map((tab, index) => {
          return (
            <>
              {index !== +selectedTab ? (
                <div
                  className="default_tab"
                  id={index}
                  onClick={(e) => {
                    setselectedTab(e.target.id);
                  }}
                >
                  {tab.name}
                </div>
              ) : (
                <Selected />
              )}
            </>
          );
        })}
      </div>
      <div
        className="main_section"
        style={{
          backgroundImage: `url(${tabs[selectedTab].sectionImg})`,
        }}
      >
        <div class="section_topic">{tabs[selectedTab].name}</div>
        <div class="section_subtitle">{tabs[selectedTab].word}</div>
      </div>
      <SearchingResult searchTopic={tabs[selectedTab]} />
    </div>
  );
};

export default TopicTab;
