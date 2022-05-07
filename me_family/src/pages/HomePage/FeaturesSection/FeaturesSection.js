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
    text: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
  },
  {
    icon: <BsBoundingBox />,
    title: 'Sed ut perspiciatis',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    icon: <BsBroadcast />,
    title: 'Magni Dolores',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    icon: <BsCamera />,
    title: 'Nemo Enim',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
  },
  {
    icon: <BsDiagram3 />,
    title: 'Eiusmod Tempor',
    text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  },
];

const FeaturesSection = () => {
  return (
    <section className='app-space py-15 text-font-color font-open-sans'>
      <div className='app-container'>
        <div className='grid gap-y-8 sm:grid-cols-2 sm:gap-x-[25px] lg:grid-cols-3 lg:gap-x-[28px] lg:gap-y-8'>
          {features.map(({ icon, title, text }) => (
            <div key={title} className='text-center'>
              <figure className='flex justify-center'>
                <span className='flex items-center justify-center h-20 w-20 rounded-full shadow-feature text-[34px] text-sky-blue'>
                  {icon}
                </span>
              </figure>
              <div className='pb-6 pt-4 relative after:absolute after:bottom-3.5 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:w-[50px] after:bg-sky-blue after:-trans'>
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
