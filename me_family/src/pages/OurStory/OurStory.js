import React from 'react';
import Head from '../../utils/Head';
import PageTitle from '../../components/PageTitle/PageTitle';
import OurStoryOne from './OurStoryOne/OurStoryOne';
import OurStoryTwo from './OurStoryTwo/OurStoryTwo';
import OurStoryThree from './OurStoryThree/OurStoryThree';
import OurStoryFour from './OurStoryFour/OurStoryFour';
import OurStoryFive from './OurStoryFive/OurStoryFive';
import Members from './Members/Members';

const OurStory = () => {
  return (
    <>
      <Head title='Lucas Bargas - MeFamily | Our Story' />
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
      <Members />
    </>
  )
}

export default OurStory;
