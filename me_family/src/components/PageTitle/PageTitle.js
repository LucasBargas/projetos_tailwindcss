import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ pageCurrent }) => {
  return (
    <section className='app-space py-4 bg-[#f5f7fb]'>
      <div className='app-container'>

        <div className='text-font-color flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <h1 className='font-raleway text-[28px] 390:text-2xl font-light'>{pageCurrent}</h1>

          <ul className='flex font-open-sans text-sm'>
            <li><Link className='text-sky-blue' to='/'>Home</Link></li>
            <li className='before:content-["/"] before:px-2'>{pageCurrent}</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default PageTitle;
