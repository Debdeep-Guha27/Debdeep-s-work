import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/DifficultyLevel.css";


const DifficultyLevel = () => {
  const navigate = useNavigate();

  const handleSelectDifficulty = (level) => {
    navigate(`/allow`);
  };

  return (
    <div
    className="difficulty"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'}`,
    }}
  >
    <div className="difficulty-overlay">
      <div className="difficulty-container">
        {/* Close Button */}
        <button className="close-btn" onClick={() => navigate(-1)}>
          &#10006;
        </button>

        {/* Title */}
        <h2 className="difficulty-title">Choose Your Difficulty Level</h2>
        <p className="difficulty-description">
          Add details about your job position, job description, and years of
          experience so that we can help you practice with the best questions.
        </p>

        {/* Difficulty Options */}
        <div className="difficulty-options">
          <div
            className="difficulty-card"
            onClick={() => handleSelectDifficulty("easy")}
          >
            <span className="icon">🖐</span>
            <div>
              <h3>Easy</h3>
              <p>
                Add details about your job position, job description, and years
                of experience so that we can help you practice with the best
                questions.
              </p>
            </div>
          </div>

          <div
            className="difficulty-card"
            onClick={() => handleSelectDifficulty("medium")}
          >
            <span className="icon">⚫⚫</span>
            <div>
              <h3>Medium</h3>
              <p>
                Add details about your job position, job description, and years
                of experience so that we can help you practice with the best
                questions.
              </p>
            </div>
          </div>

          <div
            className="difficulty-card"
            onClick={() => handleSelectDifficulty("hard")}
          >
            <span className="icon">🔥</span>
            <div>
              <h3>Hard</h3>
              <p>
                Add details about your job position, job description, and years
                of experience so that we can help you practice with the best
                questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DifficultyLevel;