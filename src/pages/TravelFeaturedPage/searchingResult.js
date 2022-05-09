import React, { useState, useEffect, useContext } from "react";
import Spots from "../../components/SpotsCarousel/Spots";
import styles from "./style.module.scss";
import { LandscapesContext } from "../../contexts";
import { splitAddressToCityAndDistrict } from "../../utils/addressUtils";

const LANDSCAPE_NUM = 10;

function SearchingResult({ searchCity }) {
  const landscapes = useContext(LandscapesContext);
  const [searchResult, setSearchResult] = useState([]);
  const keyword = searchCity[0];
  useEffect(() => {
    if (landscapes.length) {
      const outputLandscapes = keyword
        ? landscapes.filter((landscape) => {
            return splitAddressToCityAndDistrict(
              landscape.Address
            ).city?.includes(keyword);
          })
        : landscapes;
      setSearchResult(
        outputLandscapes.length > LANDSCAPE_NUM
          ? outputLandscapes.slice(0, LANDSCAPE_NUM)
          : outputLandscapes
      );
    }
  }, [keyword, landscapes]);

  return (
    <>
      <div className={styles.titleGroup}>
        <span
          className={`${styles.sectionTitle} ${styles.travel_section_title}`}
        >
          <span>{`「${searchCity[0] || "不分縣市"}」`}</span>精選景點：
        </span>
      </div>
      <div className="landscape_section">
        <Spots
          spots={searchResult}
          pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
        />
      </div>
    </>
  );
}

export default SearchingResult;
