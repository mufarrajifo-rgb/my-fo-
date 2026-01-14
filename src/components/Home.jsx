import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';
import "./Styles.css";


const Home = () => {
  return (
    <div className="home-container">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="home-text"
      >
        <h2 className="intro">Hello, I'm</h2>
        <h1 className="name">LAFEER MUHAMED MUFARRAJ</h1>
        <h3 className="role">Fullstack Developer & Data Analytics Professional</h3>
        <p className="description">
          Specializing in React, TypeScript, Node.js, and Business Intelligence.
        </p>
        <div className="home-buttons">
          <Link to="/projects">
            <button className="btn btn-primary">View Projects</button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-secondary">Contact Me</button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="home-image"
      >
        <div className="profile-wrapper">
          <img src={profileImg} alt="Lafeef Mohamed Mufarral" className="profile-img"/>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
