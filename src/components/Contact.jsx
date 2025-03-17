import React, { useState } from "react";
import "../styles/Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setMessageError("");

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate sending data (replace with your actual submission logic)
      console.log("Form submitted:", { name, email, message });

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 3000); // Popup disappears after 3 seconds
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">CONTACT</h2>
      <div className="contact-content">
        {/* Left Side - Contact Details */}
        <div className="contact-info">
          <h3>Drop Me a Message</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>00 0000 00 000</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>xyxyxy@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>xy xyx xyx xyx x yx x x</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className={`input-field ${nameError ? "error" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="error-message">{nameError}</p>}

          <input
            type="email"
            placeholder="Email"
            className={`input-field ${emailError ? "error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <textarea
            placeholder="Message"
            className={`input-field message-box ${
              messageError ? "error" : ""
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageError && <p className="error-message">{messageError}</p>}

          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          
        </div>
        <p>2025 - Your Portfolio, All rights reserved</p>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;