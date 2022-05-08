import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';

const NavHeader = () => {
  const [menuMobile, setMenuMobile] = useState(null);
  const navLinks = useRef();
  const { pathname } = useLocation();

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setMenuMobile(null);
  }

  const handleClick = ({ target }) => {
    if (menuMobile) setMenuMobile(null);

    setTimeout(() => {
      if (target.classList.contains('active')) {
        target.classList.add('text-sky-blue');
        target.classList.remove('text-dark-blue');
      }
    }, 50);
  }

  useEffect(() => {
    const navLinksArr = Array.from(navLinks.current.children);
    navLinksArr.forEach(link => {
      if (link.children[0].classList.contains('active')) {
        link.children[0].classList.add('text-sky-blue');
        link.children[0].classList.remove('text-dark-blue');
      }
    })

    if (pathname === '/') navLinksArr[0].children[0].classList.add('text-sky-blue');
  }, [pathname]);

  return (
    <div>
      <nav onClick={handleOutsideClick} className={`${menuMobile ? 'flex' : 'hidden'} flex-col-reverse items-end fixed top-0 left-0 z-50 h-screen w-full p-4 bg-menu-mobile 276:p-3 lg:flex lg:flex-row lg:static lg:h-auto lg:w-auto lg:bg-white lg:p-0`}>
        <ul ref={navLinks} className='flex flex-col px-5 py-2 bg-white h-screen w-full overflow-y-auto rounded-sm lg:h-auto lg:flex-row lg:p-0 lg:rounded-none lg:w-auto'>
          <li>
            <NavLink onClick={handleClick} className='block font-medium text-[15px] py-3 lg:pl-8 lg:py-2 text-dark-blue duration-500 hover:text-sky-blue' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className='block font-medium text-[15px] py-3 lg:pl-8 lg:py-2 text-dark-blue duration-500 hover:text-sky-blue' to="/our-story">Our Story</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className='block font-medium text-[15px] py-3 lg:pl-8 lg:py-2 text-dark-blue duration-500 hover:text-sky-blue' to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className='block font-medium text-[15px] py-3 lg:pl-8 lg:py-2 text-dark-blue duration-500 hover:text-sky-blue' to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button onClick={() => setMenuMobile(null)} className='text-white text-[28px] mb-4 390:text-2xl lg:hidden'>
          <IoClose />
        </button>
      </nav>

      <button onClick={() => setMenuMobile(true)} className={`${menuMobile ? 'hidden' : 'block'} text-dark-blue text-2xl 390:text-xl lg:hidden`}>
        <AiOutlineMenu />
      </button>
    </div>
  )
}

export default NavHeader;
