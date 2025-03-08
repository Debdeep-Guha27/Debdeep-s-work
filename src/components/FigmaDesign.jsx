import React from 'react';
import '../Css/FigmaDesign.css';
import Navbar from './Navbar';
import { useRef } from 'react';
import ChooseUs from '../pages/ChooseUs';
import Feature from '../pages/Features';
const FigmaDesign = () => {

  const handleButtonClick = (buttonLabel) => {
    alert(`${buttonLabel} clicked!`);
  };
  const featureRef = useRef(null);
  const scrollToFeature = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar scrollToFeature={scrollToFeature}/>
      <div
      className="figma-design"
      >

      {/* Main content */}
      <div className="content-wrapper">
        <h1 className="main-heading">
          Ace Your Next Interview with AI-Powered Mock Sessions
        </h1>
        <p className="sub-heading">Practice, Improve, Succeed.....</p>

        <div className="button-group">
          <button onClick={() => handleButtonClick('Explore More 1')}>
            Dashboard
          </button>
          <button onClick={() => handleButtonClick('Explore More 2')}>
            Explore More
          </button>
        </div>
      </div>
    </div>

    <div id="feature" ref={featureRef}>
        <Feature />
    </div>

    <div><ChooseUs/></div>
    </>
  );
};

export default FigmaDesign;