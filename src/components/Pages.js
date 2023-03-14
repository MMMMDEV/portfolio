import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";

export default function Pages() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/Quote-Type/Pages/Dev-Type");
  }

  return (
    <div className="Pages">
      <nav className="Nav">
        <Link to="/Quote-Type">
          <img
            className="arrowBack"
            src={ArrowBack}
            alt="Arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="option-container">
        <h2 className="prompt">About how many pages would you like?</h2>
        <form className="form-input" onSubmit={handleSubmit}>
          <div className="optionInput">
            <label className="label-option" htmlFor="pageNum">
              Pages:
            </label>
            <input
              type="number"
              className="numInput"
              id="pageNum"
              required
            ></input>
          </div>
          <button className="contact-submit">Next</button>
        </form>
      </div>
    </div>
  );
}
