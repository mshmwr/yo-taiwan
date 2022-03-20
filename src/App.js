import React from "react";
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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
