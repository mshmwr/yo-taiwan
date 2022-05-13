import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchName } from "@apis/searchApi";
import Header from "@components/Header";
import { keywordSplitWithPlus } from "@utils/stringUtils";
import Spots from "@components/SpotsCarousel/Spots";
import "./style.scss";
import styles from "@components/Header/style.module.scss";

function SearchingResult() {
  const [searchResult, setSearchResult] = useState([]);
  const { keywords } = useParams();

  useEffect(() => {
    async function fetchData() {
      const keywordArr = keywordSplitWithPlus(keywords);
      let keyword = keywordArr[0];
      if (keywordArr.length === 1) {
        setSearchResult(await doSearchName(keyword));
      } else {
        let address = keywordArr[1];
        setSearchResult(await doSearchName(keyword, address));
      }
    }
    fetchData();
  }, [keywords]);

  return (
    <>
      <Header showSearch={styles.show} />
      <div className="titleGroup">
        {keywords === undefined ? (
          "no input"
        ) : (
          <span className="sectionTitleBlue">
            「
            {keywordSplitWithPlus(keywords)[0] !== ""
              ? keywords
              : keywords.replace("+", "")}
            」
          </span>
        )}
        <span className="sectionTitle">搜尋結果如下：</span>
      </div>
      <div className="landscapeSection">
        {searchResult?.length ? (
          <Spots
            spots={searchResult}
            pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
          />
        ) : (
          "無相關搜尋結果"
        )}
      </div>
    </>
  );
}

export default SearchingResult;
