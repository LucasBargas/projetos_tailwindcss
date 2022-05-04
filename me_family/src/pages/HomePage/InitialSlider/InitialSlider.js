import { useEffect, useRef, useState } from 'react';

const InitialSlider = () => {
  const [slideActive, setSlideActive] = useState(0);
  const slider = useRef();
  const sliderDots = useRef();

  const handleDotClick = ({ target }) => {
    setSlideActive(Number(target.innerText));

    target.classList.add('bg-purple-500');
    target.classList.remove('bg-yellow-500');
  }

  useEffect(() => {
    const sliderItems = Array.from(slider.current.children);
    sliderItems.forEach(slide => slide.classList.remove('opacity-100'));
    sliderItems[slideActive].classList.add('opacity-100');
  }, [slideActive]);

  useEffect(() => {
    Array.from(sliderDots.current.children).forEach(dot => {
      dot.classList.remove('bg-purple-500');
      dot.classList.add('bg-yellow-500');
    })

    Array.from(sliderDots.current.children)[slideActive].classList.add('bg-purple-500');
    Array.from(sliderDots.current.children)[slideActive].classList.remove('bg-yellow-500');
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
    if (target.id === 'btn-left') handleLeftSide(sliderItems);
    else if (target.id === 'btn-right') handleRightSide(sliderItems);
  }

  const handleKeyDown = ({ key }) => {
    const sliderItems = Array.from(slider.current.children);
    if (key === 'ArrowLeft') handleLeftSide(sliderItems);
    else if (key === 'ArrowRight') handleRightSide(sliderItems);
  }

  return (
    <section className='relative h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'>
      <div ref={slider}>
        <div className='opacity-0 absolute top-0 w-full z-30 bg-slider-one bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
        <div className='opacity-0 absolute top-0 w-full z-20 bg-slider-two bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
        <div className='opacity-0 absolute top-0 w-full z-10 bg-slider-three bg-center bg-cover h-[calc(100vh-72px)] lg:h-[calc(80vh-72px)] xl:min-h-[500px] 2xl:h-[calc(80vh-72px)] 390:h-[calc(100vh-58px)]'></div>
      </div>

      <div ref={sliderDots} className='absolute bottom-0 z-40 p-4 w-full flex justify-center'>
        <span onClick={handleDotClick} className='inline-block bg-yellow-500 mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>0</span>
        <span onClick={handleDotClick} className='inline-block bg-yellow-500 mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>1</span>
        <span onClick={handleDotClick} className='inline-block bg-yellow-500 mx-[2px] h-3 w-3 rounded-full cursor-pointer indent-[-7000px]'>2</span>
      </div>

      <div className='flex justify-between px-4 absolute top-1/2 z-50 w-full'>
        <button id='btn-left' onKeyDown={handleKeyDown} onClick={handleControllerSlider} className='bg-red-500'>Esquerda</button>
        <button id='btn-right' onKeyDown={handleKeyDown} onClick={handleControllerSlider} className='bg-red-500'>Direita</button>
      </div>
    </section>
  )
}

export default InitialSlider;
