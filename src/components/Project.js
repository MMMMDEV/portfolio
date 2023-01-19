/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";

export default function Project({ title, picture, subtextP, altText }) {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <img
        alt={altText}
        className="project-img"
        src={require(`../images/${picture}`)}
      ></img>
      <div className="subtext-container">
        <p className="subtext">Created with:</p>
        <p className="subtext">{subtextP}</p>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  subtextP: PropTypes.string,
  altText: PropTypes.string,
};
