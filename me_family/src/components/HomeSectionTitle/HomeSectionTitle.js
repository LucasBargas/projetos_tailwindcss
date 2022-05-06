import React from 'react';

const HomeSectionTitle = ({ children }) => {
  return (
    <h2 
      className='relative z-[2] text-center uppercase font-bold text-font-color text-32 font-raleway after:absolute after:z-[3] after:top-16 after:left-1/2 after:w-[120px] after:h-px after:-translate-x-2/4 after:bg-light-gray before:absolute before:z-[4] before:-bottom-[18px] before:left-1/2 before:w-[40px] before:h-[3px] before:-translate-x-2/4 before:bg-sky-blue'
    >
    {children}
    </h2>
  )
}

export default HomeSectionTitle;
