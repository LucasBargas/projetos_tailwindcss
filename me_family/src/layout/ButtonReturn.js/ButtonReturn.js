import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ButtonReturn = () => {
  const [button, setButton] = useState(false);

  const handleClick = ({ target }) => {
    if (target.closest('button')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 105) {
        setButton(true);

      } else if (window.pageYOffset < 105) {
        setButton(null);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      className={`animate-show-button fixed right-4 bottom-4 z-[58] flex items-center justify-center w-10 h-10 rounded-full bg-sky-blue hover:opacity-80 ${button ? `${'opacity-100'} ${'visible'} ${'duration-500'}` : `${'opacity-0'} ${'invisible'} ${'duration-500'}`}`}
      onClick={handleClick}
    >
    <FiArrowUp className='text-white text-xl' />
  </button>
  )
}

export default ButtonReturn;
