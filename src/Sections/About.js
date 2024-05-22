import React from 'react';
import '../Styling/About.css';
import ABD from '../Image/About.jpg';

function About() {
  return (
    <section className="about container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={ABD} alt="About me" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center text-md-start mb-4">Coding is my passion.</h2>
          <p className="lead">
            As an experienced developer, I bring a meticulous eye for detail and a steadfast dedication to user-centered design. I strive to create intuitive interfaces, developing responsive websites that seamlessly adapt and captivate users across all devices and platforms.
          </p>
          <p className="lead">
            With every keystroke, I bring ideas to life, transforming concepts into functional, visually appealing realities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;