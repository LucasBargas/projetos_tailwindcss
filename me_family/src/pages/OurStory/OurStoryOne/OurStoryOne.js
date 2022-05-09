import React from 'react';
import introImg from '../../../assets/images/our-story/intro.jpg'
import StorySectionTitle from '../../../components/StorySectionTitle/StorySectionTitle';

const OurStoryOne = () => {
  return (
    <div className='py-[60px] flex flex-col-reverse gap-5 lg:flex-row text-font-color font-open-sans'>
      <div className='flex-1'>
        <StorySectionTitle>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</StorySectionTitle>
        <p className='italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <ul className='py-4'>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li className='mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li className='mt-4'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>

        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <figure className='flex-1 w-full'>
        <img src={introImg} alt="IntroImage" />
      </figure>
   </div>
  )
}

export default OurStoryOne;
