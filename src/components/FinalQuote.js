import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function FinalQuote({ setInputValues, inputValues }) {
  const price = 200 * inputValues.Pages;

  const text = {
    PageType: inputValues.PageType,
    Pages: inputValues.Pages,
    FrameWork: inputValues.FrameWork,
    Price: price,
  };

  const finalText = JSON.stringify(text);

  return (
    <div className="FinalQuote">
      <nav className="Nav">
        <Link to="/Quote-Type/Pages/Dev-Type">
          <img
            className="arrowBack"
            src={ArrowBack}
            alt="Arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="option-container">
        <h2 className="prompt">
          Please fill out the following form and We will reach out as soon as
          possible!
        </h2>
        <form
          className="form"
          action="https://formsubmit.co/manriqueduran123@gmail.com"
          method="POST"
        >
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Name"
            maxLength={15}
            minLength={2}
            required
          ></input>
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          ></input>
          <input type="hidden" name="message" value={finalText}></input>
          <button className="contact-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

FinalQuote.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
