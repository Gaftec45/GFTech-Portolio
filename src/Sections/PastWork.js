import React from 'react';
import LOG from '../Image/Logistics.jpeg';
import RES from '../Image/Restaurant.jpeg';
import TEG from '../Image/tegafate.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/PastWork.css';

function PastWork() {
  return (
    <section className="past-work container mt-5">
      <h2 className="text-center mb-5">Past Work</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="cardd h-100 shadow-sm">
            <img src={ LOG } alt="Logistic Website" className="card-img-top uniform-img" />
            <div className="card-body">
              <h3 className="card-title">Logistic Website</h3>
              {/* <p className="card-text">Description of Project 1.</p> */}
            </div>
            <div className="card-footer bg-white">
              <div className="tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Express</span>
              </div>
              <a href="https://sendit-app-two.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="cardd h-100 shadow-sm">
            <img src={ RES } alt="Restaurant Website" className="card-img-top uniform-img" />
            <div className="card-body">
              <h3 className="card-title">Restaurant Website</h3>
              {/* <p className="card-text">Description of Project 2.</p> */}
            </div>
            <div className="card-footer bg-white">
              <div className="tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Express</span>
              </div>
              <a href="https://gourmet-dun.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="cardd h-100 shadow-sm">
            <img src={ TEG } alt="Portfolio Website For Tegafate" className="card-img-top uniform-img" />
            <div className="card-body">
              <h3 className="card-title">Portfolio Website For Tegafate</h3>
              {/* <p className="card-text">Description of Project 3.</p> */}
            </div>
            <div className="card-footer bg-white">
              <div className="tags">
                {/* <span className="tag">React.js</span> */}
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Express</span>
              </div>
              <a href="https://tegafate.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastWork;