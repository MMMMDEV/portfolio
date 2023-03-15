import React, { useEffect, useState } from "react";
import "./normalize.css";
import "./app.css";
import Home from "./components/Home";
import QuoteType from "./components/QuoteType";
import Pages from "./components/Pages";
import DevelopmentType from "./components/DevelopmentType";
import FinalQuote from "./components/FinalQuote";
import { Route, Routes } from "react-router";

function App() {
  const [inputValues, setInputValues] = useState(() => {
    const data = localStorage.getItem("QuoteInputs");
    const jsonData = JSON.parse(data);
    if (!jsonData) {
      return {
        PageType: "",
        Pages: 0,
        FrameWork: "",
      };
    } else {
      return jsonData;
    }
  });

  useEffect(() => {
    localStorage.setItem("QuoteInputs", JSON.stringify(inputValues));
  }, [inputValues]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Quote-Type"
          element={
            <QuoteType
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          }
        />
        <Route
          path="/Quote-Type/Pages"
          element={
            <Pages inputValues={inputValues} setInputValues={setInputValues} />
          }
        />
        <Route
          path="/Quote-Type/Pages/Dev-Type"
          element={
            <DevelopmentType
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          }
        />
        <Route
          path="/Quote-Type/Pages/Dev-Type/Submit"
          element={
            <FinalQuote
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
