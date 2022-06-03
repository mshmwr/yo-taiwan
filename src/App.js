import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import TripInfoPage from "@pages/TripInfoPage";
import FoodInfoPage from "@pages/FoodInfoPage";
import TopicTravelPage from "@pages/TopicTravelPage";
import FoodFeaturedPage from "@pages/FoodFeaturedPage";
import TravelFeaturedPage from "@pages/TravelFeaturedPage";
import SearchingResult from "@pages/SearchingResult";
import "@styles/reset.css";
import "@styles/style.css";
import "@styles/variables.scss";
import {
  WeatherContext,
  LandscapesContext,
  RestaurantsContext,
  WindowWidthContext,
} from "@contexts";
import getWeather from "@apis/weather";
import getLandscapes from "@apis/getLandscapes";
import getRestaurants from "@apis/getRestaurants";
import ScrollToTop from "@components/ScrollToTop";

let prevWidth = 0;

function App() {
  const [weather, setWeather] = useState({});
  const [landscapes, setLandscapes] = useState({});
  const [restaurants, setRestaurants] = useState({});
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const res = await getWeather();
      if (res) {
        const weather = res.records.location.reduce((prev, curr) => {
          prev = {
            ...prev,
            [curr.locationName]: curr.weatherElement[0].time[0].parameter,
          };
          return prev;
        }, {});
        setWeather(weather);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await getLandscapes();
      if (res) {
        setLandscapes(res);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await getRestaurants();
      if (res) {
        setRestaurants(res);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === "number" && width !== prevWidth) {
          prevWidth = width;
          setWindowWidth(width);
        }
      }
    });

    observer.observe(document.body, { box: "border-box" });
  }, []);

  return (
    <div className="wrapper">
      <WeatherContext.Provider value={weather}>
        <LandscapesContext.Provider value={landscapes}>
          <RestaurantsContext.Provider value={restaurants}>
            <WindowWidthContext.Provider value={windowWidth}>
              <ScrollToTop />
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/searchingResult" element={<SearchingResult />} />
                <Route
                  path="/searchingResult/:keywords"
                  element={<SearchingResult />}
                />
                <Route path="/tripInfoPage/:id" element={<TripInfoPage />} />
                <Route
                  path="/TopicTravelPage/:id"
                  element={<TopicTravelPage />}
                />
                <Route path="/foodInfoPage/:id" element={<FoodInfoPage />} />
                <Route
                  path="/FoodFeaturedPage"
                  element={<FoodFeaturedPage />}
                />
                <Route
                  path="/TravelFeaturedPage"
                  element={<TravelFeaturedPage />}
                />
              </Routes>
            </WindowWidthContext.Provider>
          </RestaurantsContext.Provider>
        </LandscapesContext.Provider>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
