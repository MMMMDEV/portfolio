import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";

export default function DevelopmentType() {
  return (
    <div className="DevelopmentType">
      <nav className="Nav">
        <Link to="/Quote-Type/Pages">
          <img
            className="arrowBack"
            src={ArrowBack}
            alt="Arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="option-container">
        <h2 className="prompt">
          What type of development framework will you require?
        </h2>
        <Link to="/Quote-Type/Pages/Dev-Type/Submit">
          <button className="optionBtn">Front End</button>
        </Link>
        <Link to="/Quote-Type/Pages/Dev-Type/Submit">
          <button className="optionBtn">Front & Back End</button>
        </Link>
        <Link to="/Quote-Type/Pages/Dev-Type/Submit">
          <button className="optionBtn">Not sure</button>
        </Link>
      </div>
    </div>
  );
}
