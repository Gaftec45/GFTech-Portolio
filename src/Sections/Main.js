import React from 'react';
import Typewriter from '../WebFun/Typewriter';
import PRO from '../Image/3d-render.jpg';
import CV from '../Image/GFTechCV.pdf';
import '../Styling/Main.css';

const Main = () => {
  return (
    <div className="wrapper container mt-5">
      <div className="main-content">
        <div className="text-and-banner">
          <h1 className="GT">Hello there, </h1>
          <div className="pad">
            <Typewriter
              texts={["a Full Stack Engineer", "Yusuf Abdulfatai G.F.T"]}
              speed={80}
              delay={1000}
            />
          </div>
          <p className="intro-text">
            In an ever-changing digital world where technology transforms our everyday lives, I stand ready as a software engineer, harnessing the power of code to create engaging online experiences.
          </p>
          <div className="button-container">
            <button className="btn left-btn"><a href="#contact">Hire me</a></button>
            <button className="btn right-btn">
              <a href={CV} download="GFTechCV.pdf">Download CV</a>
            </button>
          </div>
        </div>
        <div className="banner-container">
          <img 
            src={PRO} 
            alt="Banner" 
            className="banner" 
          />
        </div>
      </div>
    </div>
  );
};

export default Main;