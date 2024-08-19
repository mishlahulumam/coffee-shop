import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <HeroBanner />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
