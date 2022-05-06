import React from 'react';
import { RiCheckDoubleFill } from 'react-icons/ri';

const AboutList = () => {
  return (
    <div 
      className='flex-1'
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul className='py-4'>
        <li className='flex items-center gap-2 '>
          <RiCheckDoubleFill className='text-sky-blue text-[18px]' />
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </li>
        <li className='flex items-center gap-2 mt-2 '>
          <RiCheckDoubleFill className='text-sky-blue text-[18px]' />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
        </li>
        <li className='flex items-center gap-2 mt-2 '>
          <RiCheckDoubleFill className='text-sky-blue text-[18px]' />
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </li>
      </ul>
      <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default AboutList;