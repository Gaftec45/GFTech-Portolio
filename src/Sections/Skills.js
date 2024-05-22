import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiReact as SiReactNative } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Skills.css';
import TECH from '../Image/Technology.jpg';

function Skills() {
  return (
    <section className="skills container mt-5">
      <h2 className="text-center mb-4">Skills</h2>
      <img src={TECH} alt="Skills" className="img-fluid mb-4 rounded" />
      <h2 className="text-center mb-4">Technologies I've Used</h2>
      <ul className="list-unstyled d-flex flex-wrap justify-content-center">
        <li className="skill-item m-3">
          <FaReact size={30} className="me-2" style={{ color: '#61DAFB' }} /> React.js
        </li>
        <li className="skill-item m-3">
          <FaNodeJs size={30} className="me-2" style={{ color: '#339933' }} /> Node.js
        </li>
        <li className="skill-item m-3">
          <FaHtml5 size={30} className="me-2" style={{ color: '#E34F26' }} /> HTML
        </li>
        <li className="skill-item m-3">
          <FaCss3Alt size={30} className="me-2" style={{ color: '#1572B6' }} /> CSS
        </li>
        <li className="skill-item m-3">
          <SiMongodb size={30} className="me-2" style={{ color: '#47A248' }} /> MongoDB
        </li>
        <li className="skill-item m-3">
          <SiExpress size={30} className="me-2" style={{ color: '#000000' }} /> Express.js
        </li>
        <li className="skill-item m-3">
          <SiJavascript size={30} className="me-2" style={{ color: '#F7DF1E' }} /> JavaScript
        </li>
        <li className="skill-item m-3">
          <SiReactNative size={30} className="me-2" style={{ color: '#61DAFB' }} /> React Native
        </li>
        <li className="skill-item m-3">
          <FaBootstrap size={30} className="me-2" style={{ color: '#7952B3' }} /> Bootstrap CSS
        </li>
      </ul>
    </section>
  );
}

export default Skills;