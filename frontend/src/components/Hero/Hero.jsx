import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-category">Featured</span>
          <h2 className="hero-title">Mastering Modern Web Development</h2>
          <p className="hero-excerpt">Learn the latest technologies and frameworks to build amazing web applications.</p>
          <Link to="/create" className="hero-read-more">Start Writing</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;