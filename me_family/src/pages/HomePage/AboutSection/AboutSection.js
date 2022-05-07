import React from 'react';
import HomeSectionTitle from '../../../components/HomeSectionTitle/HomeSectionTitle';
import AboutList from './AboutList/AboutList';
import aboutImage from '../../../assets/images/about.jpg'

const AboutSection = () => {
  return (
    <section className='app-space py-15 text-font-color font-open-sans'>
      <div className='app-container'>
        <HomeSectionTitle>My & Family</HomeSectionTitle>
        <div className='text-center pt-10 pb-6'>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-7'>
          <figure className='flex-1'>
            <img className='block' src={aboutImage} alt="About Img" />
          </figure>
          <AboutList />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
