import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "@components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
