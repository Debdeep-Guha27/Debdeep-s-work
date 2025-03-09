import React from "react";
import { FaComments } from "react-icons/fa";
import "../Css/Chatbox.css";

const Chatbox = () => {
  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <button className="new-btn"><FaComments className="icon" /> New</button>
        <img src="/Ellipse 2540.png" alt="User" className="profile-pic" />
      </div>
      <div className="chatbox-content">
        <ul>
          <li>✅ Fill the Remaining Details</li>
          <li>✅ Click on Start Interview Button</li>
          <li>✅ Let us complete the question first, then start answering.</li>
          <li>✅ Quality Workmanship</li>
        </ul>
      </div>
      <div className="chatbox-footer">
        <button className="default-btn">🎤 Default</button>
        <button className="interview-btn">📞 Begin Interview</button>
      </div>
    </div>
  );
};

export default Chatbox;