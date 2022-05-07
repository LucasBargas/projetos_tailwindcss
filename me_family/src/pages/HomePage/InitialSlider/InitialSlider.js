import { useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const InitialSlider = () => {
  const [slideActive, setSlideActive] = useState(0);
  const slider = useRef();
  const sliderDots = useRef();

  const handleDotClick = ({ target }) => {
    setSlideActive(Number(target.innerText));

    target.classList.add('bg-sky-blue');
    target.classList.remove('bg-slider-btn');
  }

  useEffect(() => {
    const sliderItems = Array.from(slider.current.children);
    sliderItems.forEach(slide => {
      slide.classList.remove('opacity-100');
      slide.classList.add('opacity-0');
    });
    sliderItems[slideActive].classList.add('opacity-100');
    sliderItems[slideActive].classList.remove('opacity-0');
  }, [slideActive]);

  useEffect(() => {
    Array.from(sliderDots.current.children).forEach(dot => {
      dot.classList.remove('bg-sky-blue');
      dot.classList.add('bg-slider-btn');
    })

    Array.from(sliderDots.current.children)[slideActive].classList.add('bg-sky-blue');
    Array.from(sliderDots.current.children)[slideActive].classList.remove('bg-slider-btn');
  }, [slideActive]);

  const handleLeftSide = (sliderItems) => {
    if (slideActive > 0) setSlideActive(slideActive - 1);
    else if (slideActive === 0) setSlideActive(sliderItems.length - 1);
  }

  const handleRightSide = (sliderItems) => {
    if (slideActive < sliderItems.length - 1) setSlideActive(slideActive + 1);
    else if (slideActive === sliderItems.length - 1) setSlideActive(0);
  }

  const handleControllerSlider = ({ target }) => {
    const sliderItems = Array.from(slider.current.children);
    if (target.closest('button#btn-left')) handleLeftSide(sliderItems);
    else if (target.closest('button#btn-right')) handleRightSide(sliderItems);
  }

  const handleKeyDown = ({ key }) => {
    const sliderItems = Array.from(slider.current.children);
    if (key === 'ArrowLeft') handleLeftSide(sliderItems);
    else if (key === 'ArrowRight') handleRightSide(sliderItems);
  }

  return (
    <section className='relative bg-dark-blue h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'>
      <div ref={slider}>
        <div className='opacity-100 duration-500 absolute top-0 w-full z-30 bg-slider-one bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
        <div className='opacity-0 duration-500 absolute top-0 w-full z-20 bg-slider-two bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
        <div className='opacity-0 duration-500 absolute top-0 w-full z-10 bg-slider-three bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
      </div>

      <div ref={sliderDots} className='absolute bottom-0 z-40 p-4 w-full flex justify-center'>
        <span onClick={handleDotClick} className='inline-block bg-slider-btn mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>0</span>
        <span onClick={handleDotClick} className='inline-block bg-slider-btn mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>1</span>
        <span onClick={handleDotClick} className='inline-block bg-slider-btn mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>2</span>
      </div>

      <div className='flex justify-between px-4 absolute top-1/2 z-50 w-full'>
        <button id='btn-left' 
          onKeyDown={handleKeyDown} 
          onClick={handleControllerSlider} 
          className='flex items-center justify-center bg-red-500 w-[54px] h-[54px] rounded-full duration-500 bg-slider-btn-opacity hover:bg-slider-btn'
        >
          <MdArrowBackIosNew className='text-slider-btn text-2xl' />
        </button>

        <button 
          id='btn-right' 
          onKeyDown={handleKeyDown} 
          onClick={handleControllerSlider} 
          className='flex items-center justify-center bg-red-500 w-[54px] h-[54px] rounded-full duration-500  bg-slider-btn-opacity hover:bg-slider-btn'
        >
          <MdArrowForwardIos className='text-slider-btn text-2xl' />
        </button>
      </div>
    </section>
  )
}

export default InitialSlider;
