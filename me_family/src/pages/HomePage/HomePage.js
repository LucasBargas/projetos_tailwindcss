import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import InitialSlider from './InitialSlider/InitialSlider';

const HomePage = () => {
  return (
    <>
      <InitialSlider />
      <AboutSection />
      <FeaturesSection />
    </>
  )
}

export default HomePage;
