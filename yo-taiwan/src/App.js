import "./css/reset.css";
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
        <Route path="/searchingResult/:keyword" element={<SearchingResult />} />
        <Route path="/tripInfoPage" element={<TripInfoPage />} />
        <Route path="/yoBike" exact element={<YoBikePage />} />
      </Routes>
    </div>
  );
}

export default App;
