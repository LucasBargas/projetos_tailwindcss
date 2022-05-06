import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link className='inline-block text-dark-blue text-[28px] font-semibold font-raleway 390:text-2xl' to='/'>
        Me & Family
      </Link>
    </div>
  )
}

export default Logo;
