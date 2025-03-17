import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = [
  {
    id: 1,
    category: "Full Stack",
    TechnologiesUsed: "Express.js, Node.js, HTML, CSS, React, SQL, MongoDB",
    Project: [
      "Bulk Mail App (email tracking)",
      "Hall Booking",
      "Shopping Kart",
      "E-commerce Site",
    ],
  },
  {
    id: 2,
    category: "Frontend Development",
    TechnologiesUsed: "HTML, CSS, React, Bootstrap, JavaScript",
    Project: [
      "Price Card",
      "Dynamic Websites",
      "Formik Validation",
      "GitHub Page",
    ],
  },
  {
    id: 3,
    category: "Backend Development",
    TechnologiesUsed: "Express.js, Node.js, JavaScript",
    Project: [
      "Timestamp API",
      "Problem Solving (Promises, Asynchronous, REST APIs)",
    ],
  },
  {
    id: 4,
    category: "Database Management",
    TechnologiesUsed: "SQL, MongoDB",
    Project: [
      "Database integration and CRUD operations for all full-stack apps",
    ],
  },
];

function Allprojects() {
  // 🟢 State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🟢 Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? Projects
      : Projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <div className="all">
        <h1>Projects</h1>
      </div>

      {/* 🟢 Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("Full Stack")}>
          Full Stack
        </button>
        <button onClick={() => setSelectedCategory("Frontend Development")}>
          Frontend
        </button>
        <button onClick={() => setSelectedCategory("Backend Development")}>
          Backend
        </button>
        <button onClick={() => setSelectedCategory("Database Management")}>
          Database
        </button>
      </div>

      {/* 🟢 Display Filtered Projects */}
      <div className="Project-cards">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Allprojects;
