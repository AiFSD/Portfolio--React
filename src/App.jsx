import React, { useRef, useState, useEffect } from "react";
import Heading from "./components/heading";
import Search from "./components/Search";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Allprojects from "./Datas/Allprojects";
import Contact from "./components/Contact";
import BreakingNewsTicker from "./components/BreakingNewsTicker";
import SkillCloud from "./components/SkilllCloud";
import skills from "./Datas/skillsData";
import Disclaimer from "./components/Disclaimer"; // Import the Disclaimer component

const App = () => {
  // Step 1: Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Disclaimer State
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Step 2: Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <div>
      {showDisclaimer && <Disclaimer onClose={handleCloseDisclaimer} />}{" "}
    
      <Heading
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Introduction />
      </div>
      <div>
        <Search />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Skills />
      <div ref={projectsRef}>
        <Allprojects />
      </div>
      <div>
        <SkillCloud skills={skills} />
      </div>
      <BreakingNewsTicker />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
