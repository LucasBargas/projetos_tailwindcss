import React from 'react';
import Head from '../../utils/Head';
import PageTitle from '../../components/PageTitle/PageTitle';
import eventsOne from '../../assets/images/events/events-1.jpg';
import eventsTwo from '../../assets/images/events/events-2.jpg';

const Events = () => {
  return (
    <>
      <Head title='Lucas Bargas - MeFamily | Events' />
      <PageTitle pageCurrent='Events' />
      <section className='app-space py-[60px]'>
        <div className='app-container'>
          <div className='flex flex-col xl:flex-row gap-8 text-font-color font-open-sans'>
            <div>
              <figure className='overflow-hidden'>
                <img className='w-full duration-300 hover:scale-110' src={eventsOne} alt="Events 1" />
              </figure>

              <div className='w-[88%] m-auto p-[30px] shadow-events bg-white relative top-[-60px]'>
                <h3 className='text-center font-bold font-raleway text-dark-blue text-xl'>Lara's 1th Birthday</h3>
                <p className='text-center italic my-4'>Sunday, September 26th at 7:00 pm</p>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>

            <div>
              <figure className='overflow-hidden'>
                <img className='w-full duration-300 hover:scale-110' src={eventsTwo} alt="Events 2" />
              </figure>

              <div className='w-[88%] m-auto p-[30px] shadow-events bg-white relative top-[-60px]'>
                <h3 className='text-center font-bold font-raleway text-dark-blue text-xl'>James 6th Birthday</h3>
                <p className='text-center italic my-4'>Sunday, November 15th at 7:00 pm</p>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events;
