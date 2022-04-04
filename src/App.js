import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripInfoPage from "./pages/TripInfoPage";
import FoodInfoPage from "./pages/FoodInfoPage";
import TopicTravelPage from "./pages/TopicTravelPage";
import FoodFeaturedPage from "./pages/FoodFeaturedPage";
import TravelFeaturedPage from "./pages/TravelFeaturedPage";
import SearchingResult from "./pages/SearchingResult";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/variables.scss";
import { WeatherContext } from "./contexts";
import weatherApi from "./apis/weatherApi";

function App() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    async function fetchData() {
      const resWeathers = await weatherApi();
      if (resWeathers) {
        const weather = resWeathers.records.location.reduce((prev, curr) => {
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

  return (
    <div>
      <WeatherContext.Provider value={weather}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/searchingResult" element={<SearchingResult />} />
          <Route
            path="/searchingResult/:keywords"
            element={<SearchingResult />}
          />
          <Route path="/tripInfoPage/:id" element={<TripInfoPage />} />
          <Route path="/TopicTravelPage" element={<TopicTravelPage />} />
          <Route path="/foodInfoPage/:id" element={<FoodInfoPage />} />
          <Route path="/FoodFeaturedPage" element={<FoodFeaturedPage />} />
          <Route path="/TravelFeaturedPage" element={<TravelFeaturedPage />} />
        </Routes>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
