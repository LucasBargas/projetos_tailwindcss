import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import OurStoryOne from './OurStoryOne/OurStoryOne';
import OurStoryTwo from './OurStoryTwo/OurStoryTwo';
import OurStoryThree from './OurStoryThree/OurStoryThree';
import OurStoryFour from './OurStoryFour/OurStoryFour';
import OurStoryFive from './OurStoryFive/OurStoryFive';

const OurStory = () => {
  return (
    <>
      <PageTitle pageCurrent='Our Story' />
      <section className='app-space'>
        <div className='app-container'>
          <OurStoryOne />
          <OurStoryTwo />
          <OurStoryThree />
          <OurStoryFour />
          <OurStoryFive />
        </div>
      </section>
    </>
  )
}

export default OurStory;
