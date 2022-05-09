import React, { useState, useEffect } from "react";
import { getRestaurant } from "../../apis/restaurantApi";
import Spots from "../../components/SpotsCarousel/Spots";
import styles from "./style.module.scss";

function SearchingResult({ searchCity }) {
  const [searchResult, setsearchResult] = useState([]);
  let keyword = searchCity[1];
  useEffect(() => {
    async function fetchData() {
      setsearchResult(await getRestaurant(0, 10, keyword));
    }
    fetchData();
  }, [keyword]);

  return (
    <>
      <div className={styles.titleGroup}>
        <span className={`${styles.sectionTitle} ${styles.food_section_title}`}>
          <span>{`「${searchCity[0] || "不分縣市"}」`}</span>精選美食：
        </span>
      </div>
      <div className="landscape_section">
        <Spots
          spots={searchResult}
          pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
        />
      </div>
    </>
  );
}

export default SearchingResult;
