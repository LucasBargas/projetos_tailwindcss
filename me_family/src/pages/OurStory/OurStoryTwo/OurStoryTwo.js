import React from 'react';
import featuredMembersOne from '../../../assets/images/our-story/featured-members-1.jpg'
import StorySectionTitle from '../../../components/StorySectionTitle/StorySectionTitle';
import { BiCheck } from 'react-icons/bi';

const OurStoryOne = () => {
  return (
    <div className='py-[60px] flex flex-col gap-5 lg:flex-row text-font-color font-open-sans'>
      <figure className='flex-1 w-full'>
        <img src={featuredMembersOne} alt="Our Story 1" />
      </figure>

      <div className='flex-1'>
        <StorySectionTitle>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</StorySectionTitle>
        <p className='italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <ul className='py-4'>
          <li className='flex gap-3'><BiCheck className='text-sky-blue text-2xl' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li className='mt-4 flex gap-3'><BiCheck className='text-sky-blue text-2xl' />Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        </ul>
      </div>
   </div>
  )
}

export default OurStoryOne;
