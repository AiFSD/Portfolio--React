import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Introduction.css";




const Introduction = () => {
    return (
      <div className="intro-container">
        <div>
          <span className="intro"> I'm a </span>
          <span className="main">
            FULL STACK
            <br /> DEVELOPER
          </span>
        </div>
        <div className="card-container">
          <div className="card">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <h3>GitHub</h3>
            <a
              href="https://github.com/AiFsd"
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn"
            >
              Visit
            </a>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/isaac-raja-21a083217/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    );
}

export default Introduction
