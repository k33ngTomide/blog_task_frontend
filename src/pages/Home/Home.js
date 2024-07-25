import React from 'react';
import HeroSection from './HeroSection';
import FeaturedPosts from './FeaturedPost';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <FeaturedPosts />
      
    </div>
  );
};

export default Home;