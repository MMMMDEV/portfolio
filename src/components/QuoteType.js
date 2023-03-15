import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function QuoteType({ setInputValues, inputValues }) {
  function handleChange(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

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
          <button
            name="PageType"
            value="Product landing"
            onClick={handleChange}
            className="optionBtn"
          >
            Product landing
          </button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button
            name="PageType"
            value="Blog"
            onClick={handleChange}
            className="optionBtn"
          >
            Blog
          </button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button
            name="PageType"
            value="Portfolio"
            onClick={handleChange}
            className="optionBtn"
          >
            Portfolio
          </button>
        </Link>
        <Link to="/Quote-Type/Pages">
          <button
            name="PageType"
            value="Custom"
            onClick={handleChange}
            className="optionBtn"
          >
            Custom
          </button>
        </Link>
      </div>
    </div>
  );
}

QuoteType.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
