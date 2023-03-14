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
      <a href="https://mmmmdev.github.io/sign-up-form-top/">
        <Project
          title="Sign-up Form"
          picture="project2.png"
          subtextP="Html5 Css3, Mainly just a concept to express my design ideas"
          altText="a screenshot of a sign-up from"
        />
      </a>
      <Project
        title="Weather App Design"
        picture="project3.jpg"
        subtextP="Figma"
        altText="a screenshot of 2 weather app designs"
      />
      <a href="https://jazizcs.net/">
        <Project
          title="Jaziz's Cleaning Service LLC"
          picture="project4.png"
          subtextP="React, A website for Jaziz's cleaning Service. Many things were built into this website including a custom estimate calculator."
          altText="a screenshot of the website jazizcs.net"
        />
      </a>
    </div>
  );
}
