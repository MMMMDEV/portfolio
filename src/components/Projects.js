import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="Projects">
      <a href="https://shopping-cart-top.pages.dev/">
        <Project
          title="Clothing Shop"
          picture="project1.png"
          subtextP="React, and use a small json file to represent a data base"
        />
      </a>
      <a href="https://github.com/MMMMDEV/sign-up-form-top/deployments/activity_log?environment=github-pages">
        <Project
          title="Sign-up Form"
          picture="project2.png"
          subtextP="Html5 Css3, Mainly just a concept to express my design ideas"
        />
      </a>
      <a href="https://mmmmdev.github.io/rock-paper-scissor/">
        <Project
          title="Rock Paper Scissor"
          picture="project3.png"
          subtextP="Html5 Css3 javascript, Just a small game showing some basic javascript logic"
        />
      </a>
    </div>
  );
}
