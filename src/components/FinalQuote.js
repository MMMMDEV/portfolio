import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.svg";

export default function FinalQuote() {
  return (
    <div className="FinalQuote">
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
        <h2 className="prompt">About how many pages would you like?</h2>
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
          <textarea
            className="contact-input contact-textarea"
            type="text"
            name="message"
            placeholder="Message"
            minLength={2}
            maxLength={150}
            required
          ></textarea>
          <button className="contact-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
