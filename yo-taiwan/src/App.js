import "./css/reset.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripInfoPage from "./pages/TripInfoPage";
import SearchingResult from "./pages/SearchingResult";
import YoBikePage from "./pages/YoBikePage";

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
        <Route path="/tripInfoPage" element={<TripInfoPage />} />
        <Route exact path="/yoBike" element={<YoBikePage />} />
      </Routes>
    </div>
  );
}

export default App;
