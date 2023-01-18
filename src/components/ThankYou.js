import React from "react";
import { Link } from "react-router-dom";
export default function ThankYou() {
  return (
    <div className="ThankYou">
      <h1 className="thanks-title">Thank You!</h1>
      <h3 className="thanks-text">
        I&apos;ll be getting back to you as soon as I can
      </h3>
      <Link to="/">
        <button className="ThankYou-submit">Back</button>
      </Link>
    </div>
  );
}
