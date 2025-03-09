// Allow.jsx
import "../Css/Allow.css";
import React from "react";
import microphone from "../assets/headphone.jpg";
import video from "../assets/video.jpg";
import headphone from "../assets/headphone.jpg";
import start from "../assets/start.jpg";
import { useNavigate } from "react-router-dom";
const Allow = () => {
  const navigate = useNavigate();
  return (
    <div className="allow-container">
      <h1 className="title">Before you start the session</h1>
      <div className="instructions">
        <div className="instruction">
          <div className="icon-container">
            <img src={microphone} alt="Headphone" />
          </div>
          <p>Make Sure You Are In A Quiet And Peaceful Environment</p>
        </div>
        <div className="instruction">
          <div className="icon-container">
            <img src={video} alt="Camera" />
          </div>
          <p>Microphone And Camera Is Required Throughout The Interview</p>
        </div>
        <div className="instruction">
          <div className="icon-container">
            <img src={headphone} alt="Microphone" />
          </div>
          <p>During Answering The Question Turn On The Microphone</p>
        </div>
      </div>
      <div className="session-info">
        <div className="session-box">
          <div className="icon-container">
            <img src={start} alt="UI UX Designer" />
          </div>
          <div className="session-text">
            <h2>UI/UX Designer</h2>
            <p>Demo</p>
          </div>
        </div>
        <button className="start-btn" onClick={()=>navigate('/interviewchatbox')}>Start</button>
      </div>
    </div>
  );
};

export default Allow;
