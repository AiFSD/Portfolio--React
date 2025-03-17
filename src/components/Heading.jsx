import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import "../styles/heading.css";

const Heading = ({
  scrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <div className="Head">
      <FontAwesomeIcon icon={faMicrosoft} size="3x" className="logo" />

      <nav>
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li
            className="contact-btn"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
