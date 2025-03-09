// Form.jsx
import React, { useState } from "react";
import "../Css/Form.css";
 
const Form = () => {
  const [difficulty, setDifficulty] = useState(1);

  return (
    <div className="form-container">
      <div className="header">
        <div className="logo"><img src= "/AI Interview Logo.jpg"/></div>
        <h2 className="title1">MOCKMATE AI</h2>
      </div>

      
      <div className="section">
        <h3>Job Details</h3>
        <label>Job Position / Job Role</label>
        <input type="text" value="UI / UX Designer" readOnly />
        
        <label>Job Description</label>
        <textarea readOnly>Senior UI / UX Designer...</textarea>
        
        <label>Years of Experience</label>
        <input type="number" value="2" readOnly />
      </div>
      
      <div className="section">
        <h3>Personal Details</h3>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />
        
        <label>Experience Details</label>
        <textarea placeholder="Describe your experience"></textarea>
      </div>
      
      <div className="section">
        <h3>Interview Settings</h3>
        <div className="interview-settings-box"><label className="label-box">Level {difficulty}: {difficulty === 1 ? "Easy" : difficulty === 2 ? "Medium" : "Hard"} Difficulty</label>
        <input 
          type="range" 
          min="1" 
          max="3" 
          value={difficulty} 
          onChange={(e) => setDifficulty(Number(e.target.value))} 
        />
        <div className="range-labels">
          <span>Easy</span><span>Medium</span><span>Hard</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Form;