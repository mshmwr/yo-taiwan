import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doSearchName } from "@apis/getSearchedData";
import Header from "@components/Header";
import { keywordSplitWithSymbol } from "@utils/stringUtils";
import Spots from "@components/SpotsCarousel/Spots";
import "./style.scss";
import styles from "@components/Header/style.module.scss";
import { PLUS_SYMBOL, ANY_CITY } from "@utils/constants";

function SearchingResult() {
  const { keywords } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const updateSearchTitle = (keyword, address) => {
      if (keyword && address) return `${address}${PLUS_SYMBOL}${keyword}`;
      if (!keyword && !address) return setSearchTitle(ANY_CITY);
      if (keyword) {
        setSearchTitle(keyword);
        return;
      }
      if (address) {
        setSearchTitle(address);
      }
    };

    async function doSearch() {
      if (keywords && keywords.includes(PLUS_SYMBOL)) {
        const [address, keyword] = keywordSplitWithSymbol(
          keywords,
          PLUS_SYMBOL
        );
        setSearchResult(await doSearchName(keyword, address));
        updateSearchTitle(keyword, address);
        return;
      }
      setSearchTitle(keywords ? keywords : ANY_CITY);
      setSearchResult(await doSearchName(keywords));
    }
    doSearch();
  }, [keywords]);

  return (
    <>
      <Header showSearch={styles.show} />
      <div className="titleGroup">
        <span className="sectionTitleBlue">「{searchTitle}」</span>
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
