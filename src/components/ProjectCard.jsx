import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="category">{project.category}</h2>
      <p className="technologies">
        <strong>Technologies Used:</strong> {project.TechnologiesUsed}
      </p>
      <ul className="project-list">
        {project.Project.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>
      <button
        className="view-button"
        onClick={() =>
          window.open("https://github.com/AiFSD?tab=repositories", "_blank")
        }
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;

