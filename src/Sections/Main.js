import React from 'react';
import Typewriter from '../WebFun/Typewriter';
import PRO from '../Image/3d-render.jpg';
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
            Frontend developer with proficiency in creating user-friendly and responsive web applications.
          </p>
          <div className="button-container">
            <button className="btn left-btn" > <a href="#contact">Hire me</a></button>
            <button className="btn right-btn">
            <a href="/path/to/your/file.pdf" download="Filename.pdf">Download CV </a>
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


/* import React from 'react';
import Typewriter from '../WebFun/Typewriter';
import PRO from '../Image/3d-render.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Main.css';

const Main = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <div className="text-and-banner">
            <h1 className='GT'>Hello there, </h1>
            <div className="pad mb-3">
              <Typewriter
                texts={["a Full Stack Engineer", "Yusuf Abdulfatai G.F.T"]}
                speed={80}
                delay={1000}
              />
            </div>
            <p className="intro-text">
              Frontend developer with proficiency in creating user-friendly and responsive web applications.
            </p>
            <div className="button-container mt-3">
              <button className="btn btn-primary me-2 mb-2">Hire me</button>
              <button className="btn btn-outline-secondary mb-2">Download CV</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="banner-container">
            <img 
              src={PRO} 
              alt="Banner" 
              className="img-fluid rounded shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main; */