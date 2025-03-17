import React, { useState } from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSubmitted(true); // Show thank you message
    setTimeout(() => {
      setShowForm(false); // Close form after 2 seconds
      setSubmitted(false); // Reset form state
    }, 2000);
  };

  return (
    <div className="about-container">
      {/* Left Section - Profile Image */}
      <div className="image-container">
        <img
          src="https://i.pinimg.com/736x/ce/40/6f/ce406f10bd609248f1be1938bb05cc2c.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>

      {/* Right Section - About Me Text */}
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p
          style={{
            fontFamily: "Arial, sans-serif", // Modern, clean font
            fontSize: "18px", // Readable font size
            lineHeight: "1.6", // Comfortable line spacing
            color: "#e0e0e0", // Light gray for readability on dark backgrounds
            textShadow: "0 0 5px rgba(255, 255, 255, 0.2)", // Subtle glow effect
            fontWeight: "400", // Regular font weight
            textAlign: "justify", // Justified text for a polished look
          }}
        >
          I'm a Full-Stack Developer specializing in React and Node.js,
          passionate about building scalable, user-centric web applications. I
          craft clean, efficient code to transform ideas into seamless digital
          solutions, focusing on problem-solving and collaborative development.
          Let's build something amazing together.
        </p>

        {/* Buttons */}
        <div className="btn-container">
          <button className="hire-btn" onClick={() => setShowForm(true)}>
            HIRE ME
          </button>
          <button className="resume-btn">
            <a
              href="https://drive.google.com/file/d/1TxmQ0FCpzcIXULGSNVEGPcUOuX4p0EXl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            {!submitted ? (
              <>
                <h3>Hire Me</h3>
                <form onSubmit={handleSubmit}>
                  <label>Name:</label>
                  <input type="text" placeholder="Your Name" required />

                  <label>Email:</label>
                  <input type="email" placeholder="Your Email" required />

                  <label>Message:</label>
                  <textarea placeholder="Your Message" required></textarea>

                  <button type="submit">Send</button>
                  <button type="button" onClick={() => setShowForm(false)}>
                    Close
                  </button>
                </form>
              </>
            ) : (
              <h3>Thank you for your message! 😊</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
