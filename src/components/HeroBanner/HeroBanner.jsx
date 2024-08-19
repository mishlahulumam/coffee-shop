import React from 'react';
import './HeroBanner.css';
import bannerImage from '../../assets/images/banner.jpg';

function HeroBanner() {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>Grind The Essentials</h1>
      <p>Made with Indonesia's Finest Beans for your everyday modern coffee experience</p>
    </div>
  );
}

export default HeroBanner;
