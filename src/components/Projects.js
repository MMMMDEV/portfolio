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
          altText="a screenshot of a clothing shop application model"
        />
      </a>
      <a href="https://github.com/MMMMDEV/sign-up-form-top/deployments/activity_log?environment=github-pages">
        <Project
          title="Sign-up Form"
          picture="project2.png"
          subtextP="Html5 Css3, Mainly just a concept to express my design ideas"
          altText="a screenshot of a sign-up from"
        />
      </a>
    </div>
  );
}
