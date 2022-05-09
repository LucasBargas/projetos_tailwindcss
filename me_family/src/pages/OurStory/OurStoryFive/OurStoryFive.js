import React from 'react';
import featuredMembersFour from '../../../assets/images/our-story/featured-members-4.jpg'
import StorySectionTitle from '../../../components/StorySectionTitle/StorySectionTitle';

const OurStoryFive = () => {
  return (
    <div className='py-[60px] flex flex-col-reverse gap-5 lg:flex-row text-font-color font-open-sans'>
      <div className='flex-1'>
        <StorySectionTitle>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</StorySectionTitle>
        <p className='italic mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <p className='mt-4'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <figure className='flex-1 w-full'>
        <img src={featuredMembersFour} alt="Our Story 5" />
      </figure>
   </div>
  )
}

export default OurStoryFive;
