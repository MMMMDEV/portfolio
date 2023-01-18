import React from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="Home">
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
