import React, { useRef, useState, useEffect } from 'react';
import recentPhotoOne from '../../../../assets/images/recent-photos/recent-photos-1.jpg';
import recentPhotoTwo from '../../../../assets/images/recent-photos/recent-photos-2.jpg';
import recentPhotoThree from '../../../../assets/images/recent-photos/recent-photos-3.jpg';
import recentPhotoFour from '../../../../assets/images/recent-photos/recent-photos-4.jpg';
import recentPhotoFive from '../../../../assets/images/recent-photos/recent-photos-5.jpg';
import recentPhotoSix from '../../../../assets/images/recent-photos/recent-photos-6.jpg';
import recentPhotoSeven from '../../../../assets/images/recent-photos/recent-photos-7.jpg';
import recentPhotoEight from '../../../../assets/images/recent-photos/recent-photos-8.jpg';

const photosList = [
  {
    title: 'Recent Photo 1',
    img: recentPhotoOne,
  },
  {
    title: 'Recent Photo 2',
    img: recentPhotoTwo,
  },
  {
    title: 'Recent Photo 3',
    img: recentPhotoThree,
  },
  {
    title: 'Recent Photo 4',
    img: recentPhotoFour,
  },
  {
    title: 'Recent Photo 5',
    img: recentPhotoFive,
  },
  {
    title: 'Recent Photo 6',
    img: recentPhotoSix,
  },
  {
    title: 'Recent Photo 7',
    img: recentPhotoSeven,
  },
  {
    title: 'Recent Photo 8',
    img: recentPhotoEight,
  },
  {
    title: 'Recent Photo 9',
    img: recentPhotoOne,
  },
  {
    title: 'Recent Photo 10',
    img: recentPhotoTwo,
  },
  {
    title: 'Recent Photo 11',
    img: recentPhotoThree,
  },
  {
    title: 'Recent Photo 12',
    img: recentPhotoFour,
  }
];

const RecentPhotosSlider = () => {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(0);
  const slideRef = useRef();
  const dots = useRef();

  const handleDotsClick = ({ target }) => {
    setActive(Number(target.innerText));
    target.classList.add('bg-sky-blue');
  }

  useEffect(() => {
    const dotsArr = Array.from(dots.current.children);
    dotsArr.forEach(dot => dot.classList.remove('bg-sky-blue'));
    dotsArr[active].classList.add('bg-sky-blue');
  }, [active]);

  useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const { width } = slideRef.current.getBoundingClientRect();
      setPosition(-(width * active));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  return (
    <div className='pt-5 overflow-hidden'>
      <div className='flex duration-500' style={{ transform: `translateX(${position}px)` }}>
        {photosList.map(({ img, title }, index) => (
          <figure ref={slideRef} key={`photo ${index}`} className='shrink-0 w-[100%] sm:w-[50%] lg:w-[33.3%] xl:w-[20%] px-2.5'>
            <img src={img} alt={title} />
          </figure>
        ))}
      </div>

      <div ref={dots} className='flex justify-center gap-2 pt-4'>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>0</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>1</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>2</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>3</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>4</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>5</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>6</span>
        <span onClick={handleDotsClick} className='inline-block h-3 w-3 rounded-full border border-sky-blue indent-[-7000px] cursor-pointer'>7</span>
      </div>
    </div>
  )
}

export default RecentPhotosSlider;
