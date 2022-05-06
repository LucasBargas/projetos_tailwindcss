import React from 'react';
import Logo from './Logo/Logo';
import NavHeader from './NavHeader/NavHeader';

const Header = () => {
  return (
    <header className='app-space py-[15px] fixed top-0 left-0 z-[60] bg-white w-full shadow-header'>
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
