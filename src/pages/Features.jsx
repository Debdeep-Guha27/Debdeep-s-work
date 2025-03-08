// Features.jsx
import React from "react";
import "../Css/Features.css";
import mock_interview from "../assets/mock-interview.jpg";
import sample_questions from "../assets/sample-questions.jpg";
import ai_support from "../assets/ai-support.png";
//import { FiArrowUp } from "react-icons/fi";
const Features = () => {
  return (
    <>
      <section className="features-section">
        <h2 className="heading">Explore Our Program</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src={mock_interview} alt="Mock Interview" />
            <h3>Mock Interview</h3>
            <p>Practice with AI-driven mock interviews tailored to your job role.</p>
            <button className="know-more-button">Know More
        
            </button>
          </div>
          <div className="feature-card">
            <img src={sample_questions} alt="Sample Questions" />
            <h3>Sample Questions</h3>
            <p>Access a curated list of common and technical interview questions.</p>
            <button className="know-more-button">Know More
        
             </button>
          </div>
          <div className="feature-card">
            <img src={ai_support} alt="AI Support" />
            <h3>AI Support</h3>
            <p>Get real-time feedback and AI-generated suggestions for improvement.</p>
            <button className="know-more-button">Know More
        

            </button>
          </div>
        </div>
    
      </section>
    
    </> 
    
  );
};

export default Features;