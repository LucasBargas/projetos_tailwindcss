import React from 'react';
import featuredMembersThree from '../../../assets/images/our-story/featured-members-3.jpg'
import StorySectionTitle from '../../../components/StorySectionTitle/StorySectionTitle';
import { BiCheck } from 'react-icons/bi';

const OurStoryFour = () => {
  return (
    <div className='py-[60px] flex flex-col gap-5 lg:flex-row text-font-color font-open-sans'>
      <figure className='flex-1 w-full'>
        <img src={featuredMembersThree} alt="Our Story 3" />
      </figure>

      <div className='flex-1'>
        <StorySectionTitle>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</StorySectionTitle>
        <p className='mt-2'>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>

        <ul className='py-4'>
          <li className='flex gap-3'><BiCheck className='text-sky-blue text-2xl' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li className='mt-4 flex gap-3'><BiCheck className='text-sky-blue text-2xl' />Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li className='mt-4 flex gap-3'><BiCheck className='text-sky-blue text-2xl' />Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
        </ul>
      </div>
   </div>
  )
}

export default OurStoryFour;
