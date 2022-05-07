import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import InitialSlider from './InitialSlider/InitialSlider';
import RecentPhotos from './RecentPhotos/RecentPhotos';

const HomePage = () => {
  return (
    <>
      <InitialSlider />
      <AboutSection />
      <FeaturesSection />
      <RecentPhotos />
    </>
  )
}

export default HomePage;
