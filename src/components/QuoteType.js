import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";

export default function QuoteType() {
  return (
    <div className="QuoteType">
      <nav className="Nav">
        <Link to="/">
          <img
            className="arrowBack"
            src={ArrowBack}
            alt="Arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="option-container">
        <h2 className="prompt">what type of website are you looking for?</h2>
        <Link to="/Quote-Type/Pages">
          <button className="optionBtn">Product landing</button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button className="optionBtn">Blog</button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button className="optionBtn">Portfolio</button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button className="optionBtn">Custom</button>
        </Link>
      </div>
    </div>
  );
}
