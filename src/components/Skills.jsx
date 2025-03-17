import React from "react";
import "../styles/Skills.css";

// Import logos for the skills
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaGit, FaGithub, FaDatabase } from "react-icons/fa";
import { SiExpress, SiPostman, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGit />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "SQL" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">EXPERIENCE</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
