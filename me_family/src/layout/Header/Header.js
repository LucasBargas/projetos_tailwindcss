import React from 'react';
import Logo from './Logo/Logo';
import NavHeader from './NavHeader/NavHeader';

const Header = () => {
  return (
    <header className='app-space py-[15px]'>
      <div className='app-container'>
        <div className='flex justify-between items-center'>
          <Logo />
          <NavHeader />
        </div>
      </div>
    </header>
  )
}

export default Header;
