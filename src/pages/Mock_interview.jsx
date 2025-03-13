import React, { useState } from "react";
import "../Css/Mock_interview.css";
import { useNavigate } from "react-router-dom";

const Mock_interview = ({ onClose }) => {
    const navigate=useNavigate();
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState(0);

  return (
    <div className="overlay">
      <div className="job-form">
        {/* Close Button */}
        <button className="close-btn" onClick={()=>navigate('/home')}>
          &times;
        </button>

        {/* Heading */}
        <h2 className="form-title">
          Tell us more about the job you <span>wish</span> to prepare for
        </h2>
        <p className="form-description">
          Add details about your job position, job description, and years of
          experience so that we can help you practice with the best questions.
        </p>

        {/* Job Position */}
        <label className="form-label">Job Position / Job Role</label>
        <input
          type="text"
          value={jobRole}
          className="form-input"
          placeholder="Enter a Job-Role"
          onChange={(e) => setJobRole(e.target.value)}
        />

        {/* Job Description */}
        <label className="form-label">Job Description</label>
        <div className="textarea-wrapper">
          <textarea
            className="form-textarea"
            placeholder="Enter job description..."
            maxLength={300}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <span className="char-count">{jobDescription.length}/300</span>
        </div>

        {/* Years of Experience */}
        <label className="form-label">Years of Experience</label>
        <input
          type="number"
          min="0"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="form-input"
        />

        {/* Generate Button */}
        <button className="generate-btn" onClick={()=>navigate('/difficulty')}>
          Generate Questions <span className="arrow"></span>
        </button>
      </div>
    </div>
  );
};

export default Mock_interview;
