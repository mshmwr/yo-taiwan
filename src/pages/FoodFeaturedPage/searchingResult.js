import React, { useState, useEffect, useContext} from "react";
import { RestaurantsContext } from "@contexts";
import Spots from "@components/SpotsCarousel/Spots";
import styles from "./style.module.scss";

function SearchingResult({ searchCity }) {
  const [searchResult, setsearchResult] = useState([]);
  const restaurants = useContext(RestaurantsContext)
  let keyword = searchCity[1];
  console.log(restaurants)
  // useEffect(() => {
  //   async function fetchData() {
  //     setsearchResult(await getRestaurants(0, 10, keyword));
  //   }
  //   fetchData();
  // }, [keyword]);

  return (
    <>
      <div className={styles.titleGroup}>
        <span className={`${styles.sectionTitle} ${styles.food_section_title}`}>
          <span>{`「${searchCity[0] || "不分縣市"}」`}</span>精選美食：
        </span>
      </div>
      <div className="landscapeSection">
        <Spots
          spots={searchResult}
          pathnameConfig={{ page: "foodInfoPage", spotID: "RestaurantID" }}
        />
      </div>
    </>
  );
}

export default SearchingResult;
