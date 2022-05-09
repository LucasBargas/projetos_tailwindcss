import React from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsPhone } from 'react-icons/bs';

const ContactDatas = () => {
  return (
    <div className='w-full lg:w-[35%] flex flex-col gap-10 text-font-color font-open-sans'>
      <div className='flex items-center'>
        <figure className='w-11 h-11 flex justify-center items-center rounded-full duration-500 bg-[#e7f5ff] hover:bg-sky-blue text-sky-blue hover:text-white'>
          <BsGeoAlt className='text-xl' />
        </figure>
        <div className='text-dark-blue ml-4'>
          <h3 className='font-raleway font-semibold text-[22px]'>Location:</h3>
          <p className='text-sm'>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>

      <div className='flex items-center'>
        <figure className='w-11 h-11 flex justify-center items-center rounded-full duration-500 bg-[#e7f5ff] hover:bg-sky-blue text-sky-blue hover:text-white'>
          <BsEnvelope className='text-xl' />
        </figure>
        <div className='text-dark-blue ml-4'>
          <h3 className='font-raleway font-semibold text-[22px]'>Email:</h3>
          <p className='text-sm'>info@example.com</p>
        </div>
      </div>

      <div className='flex items-center'>
        <figure className='w-11 h-11 flex justify-center items-center rounded-full duration-500 bg-[#e7f5ff] hover:bg-sky-blue text-sky-blue hover:text-white'>
          <BsPhone className='text-xl' />
        </figure>
        <div className='text-dark-blue ml-4'>
          <h3 className='font-raleway font-semibold text-[22px]'>Call:</h3>
          <p className='text-sm'>+1 5589 55488 55s</p>
        </div>
      </div>
    </div>
  )
}

export default ContactDatas;