import React from 'react';
import featuredMembersTwo from '../../../assets/images/our-story/featured-members-2.jpg'
import StorySectionTitle from '../../../components/StorySectionTitle/StorySectionTitle';

const OurStoryThree = () => {
  return (
    <div className='py-[60px] flex flex-col-reverse gap-5 lg:flex-row text-font-color font-open-sans'>
      <div className='flex-1'>
        <StorySectionTitle>Corporis temporibus maiores provident</StorySectionTitle>
        <p className='italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <p className='mt-4'>llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <figure className='flex-1 w-full'>
        <img src={featuredMembersTwo} alt="Our Story 3" />
      </figure>
   </div>
  )
}

export default OurStoryThree;
