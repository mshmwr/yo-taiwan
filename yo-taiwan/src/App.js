import "./css/reset.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchingResult from "./pages/SearchingResult";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/searchingResult" element={<SearchingResult />} />
    </Routes>
  );
}

export default App;
