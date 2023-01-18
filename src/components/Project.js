import React from "react";
import PropTypes from "prop-types";

export default function Project({ title, picture, subtextP }) {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      {/* eslint-disable-next-line no-undef */}
      <img className="project-img" src={require(`../images/${picture}`)}></img>
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
};
