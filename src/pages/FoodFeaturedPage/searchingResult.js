import React, { useState, useEffect, useContext } from "react";
import { RestaurantsContext } from "@contexts";
import Spots from "@components/SpotsCarousel/Spots";
import { ANY_CITY } from "@utils/constants";
import styles from "./style.module.scss";

function SearchingResult({ searchCity }) {
  const [searchResult, setsearchResult] = useState([]);
  const restaurants = useContext(RestaurantsContext);
  let keyword = searchCity[0];
  const RESTAURANT_NUM = 10;

  useEffect(() => {
    if (restaurants.length) {
      const outputRestaurants = keyword
        ? restaurants.filter((restaurant) =>
            restaurant?.Address.includes(keyword)
          )
        : restaurants;
      const result =
        outputRestaurants.length > RESTAURANT_NUM
          ? outputRestaurants.slice(0, RESTAURANT_NUM)
          : outputRestaurants;
      setsearchResult(result);
    }
  }, [keyword, restaurants]);

  return (
    <>
      <div className={styles.titleGroup}>
        <span className={`${styles.sectionTitle} ${styles.food_section_title}`}>
          <span>{`「${searchCity[0] || ANY_CITY}」`}</span>精選美食：
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
