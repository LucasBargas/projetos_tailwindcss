import React from 'react';
import Head from '../../utils/Head';
import AboutSection from './AboutSection/AboutSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import InitialSlider from './InitialSlider/InitialSlider';
import RecentPhotos from './RecentPhotos/RecentPhotos';

const HomePage = () => {
  return (
    <>
      <Head title='Lucas Bargas - MeFamily | Home' />
      <InitialSlider />
      <AboutSection />
      <FeaturesSection />
      <RecentPhotos />
    </>
  )
}

export default HomePage;
