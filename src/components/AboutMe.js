import React from "react";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p>
          I&apos;ve loved tinkering with technology since I was a kid, always
          trying to see how things worked.
        </p>
        <p>
          In high school I got to build my first computer, and it made me
          realize that I wanted to do something that involved tech in the
          future.
        </p>
        <p>
          so I started to learn HTML and after a long time of studying in my
          room day and night I got all the tools to make scalable, appealing and
          easy to navigate websites.
        </p>
      </div>
      <div className="tool-container">
        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />

        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        />
        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />

        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        />

        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        />

        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />

        <img
          className="tool-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
        />
      </div>
    </div>
  );
}
