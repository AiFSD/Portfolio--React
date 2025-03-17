import React, { useState } from "react";
import "../styles/SkillCloud.css"; 
import skills from "../Datas/skillsData";

const SkillCloud = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseInfo = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="skill-cloud-container">
      <div
        className="heading2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "10px", // Reduced margin for better spacing
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#e0e0e0",
            backgroundColor: "#2a2a2a",
            padding: "20px 40px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.6)",
            textAlign: "center",
          }}
        >
          Areas of Expertise
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px", // Space before skill cloud
        }}
      >
        <p
          style={{
            fontStyle: "italic",
            color: "#bdbdbd", // Light gray color
            fontSize: "16px",
          }}
        >
          (Click on a skill to read more)
        </p>
      </div>
      <div className="skill-cloud">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-tag"
            onClick={() => handleSkillClick(skill)}
          >
            {skill.name}
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className={`skill-info ${selectedSkill ? "active" : ""}`}>
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>
          <p>Proficiency: {selectedSkill.proficiency}/5</p>
          
          <button onClick={handleCloseInfo}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SkillCloud;
