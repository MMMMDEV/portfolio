import React from "react";
import square1 from "../images/square1.svg";
import square2 from "../images/square2.svg";
import square3 from "../images/square3.svg";
import square4 from "../images/square4.svg";

export default function Welcome() {
  return (
    <div className="Welcome">
      <img src={square1} className="squarecle squarecle1"></img>
      <img src={square2} className="squarecle squarecle2"></img>
      <img src={square3} className="squarecle squarecle3"></img>
      <img src={square4} className="squarecle squarecle4"></img>
      <div className="welcome-text">
        <h1 className="hero">My Name is Mario</h1>
        <h1 className="hero">And I&apos;m a developer</h1>
      </div>
    </div>
  );
}
