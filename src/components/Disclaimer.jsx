import React, { useEffect } from "react";
import "../styles/Disclaimer.css";

const Disclaimer = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Lock scroll
    return () => {
      document.body.style.overflow = "unset"; // Unlock scroll on unmount
    };
  }, []);

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-content">
        <h2>Disclaimer</h2>
        <p>
          This is a dummy website created for demonstration purposes. Some
          buttons and "send" functionalities may not work.
        </p>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
};

export default Disclaimer;
