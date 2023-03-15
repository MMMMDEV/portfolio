import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function DevelopmentType({ setInputValues, inputValues }) {
  function handleChange(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

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
          <button
            name="FrameWork"
            value="Front End"
            onClick={handleChange}
            className="optionBtn"
          >
            Front End
          </button>
        </Link>
        <Link to="/Quote-Type/Pages/Dev-Type/Submit">
          <button
            name="FrameWork"
            value="Front & Back End"
            onClick={handleChange}
            className="optionBtn"
          >
            Front & Back End
          </button>
        </Link>
        <Link to="/Quote-Type/Pages/Dev-Type/Submit">
          <button
            name="FrameWork"
            value="Not sure"
            onClick={handleChange}
            className="optionBtn"
          >
            Not sure
          </button>
        </Link>
      </div>
    </div>
  );
}

DevelopmentType.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
