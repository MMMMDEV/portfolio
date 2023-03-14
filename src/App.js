import React from "react";
import "./normalize.css";
import "./app.css";
import Home from "./components/Home";
import QuoteType from "./components/QuoteType";
import Pages from "./components/Pages";
import DevelopmentType from "./components/DevelopmentType";
import FinalQuote from "./components/FinalQuote";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quote-Type" element={<QuoteType />} />
        <Route path="/Quote-Type/Pages" element={<Pages />} />
        <Route
          path="/Quote-Type/Pages/Dev-Type"
          element={<DevelopmentType />}
        />
        <Route
          path="/Quote-Type/Pages/Dev-Type/Submit"
          element={<FinalQuote />}
        />
      </Routes>
    </div>
  );
}

export default App;
