import React from 'react';
import { BsDiagram3, BsCamera, BsBroadcast, BsBoundingBox, BsBarChart, BsLaptop } from 'react-icons/bs';

const features = [
  {
    icon: <BsLaptop />,
    title: 'Lorem Ipsum',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <BsBarChart />,
    title: 'Dolor Sitema',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <BsBoundingBox />,
    title: 'Sed ut perspiciatis',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <BsBroadcast />,
    title: 'Magni Dolores',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <BsCamera />,
    title: 'Nemo Enim',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <BsDiagram3 />,
    title: 'Eiusmod Tempor',
    text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
];

const FeaturesSection = () => {
  return (
    <section className='app-space py-15 text-font-color font-open-sans'>
      <div className='app-container'>
        <div className='grid gap-y-8 sm:grid-cols-2 sm:gap-x-[25px] lg:grid-cols-3 lg:gap-[28px]'>
          {features.map(({ icon, title, text }) => (
            <div key={title} className='text-center'>
              <figure className='flex justify-center'>
                <span className='flex items-center justify-center h-20 w-20 rounded-full shadow-feature text-[34px] text-sky-blue'>
                  {icon}
                </span>
              </figure>
              <div>
                <h3 className='text-lg font-raleway font-semibold'>{title}</h3>
              </div>
              <div>
                <p className='text-sm leading-6'>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
