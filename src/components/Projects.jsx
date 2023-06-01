import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/projects.scss";

const Projects = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img">
          <img className="main-image" src={props.image} alt="title" />
        </div>
        <div className="card-content">
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <p>
            <strong>Tech stack :</strong> {props.tech}
          </p>
          <div className="card-link">
            <div className="link1">
              <i className="fa-solid fa-link"></i>{" "}
              <NavLink to={props.preview}>Live Preview</NavLink>
            </div>
            <div className="link2">
              <i className="fa-brands fa-github"></i>{" "}
              <NavLink to={props.code}>View Code</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
