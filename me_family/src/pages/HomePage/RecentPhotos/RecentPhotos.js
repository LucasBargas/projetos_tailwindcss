import React from 'react';
import HomeSectionTitle from '../../../components/HomeSectionTitle/HomeSectionTitle';
import RecentPhotosSlider from './RecentPhotosSlider/RecentPhotosSlider';

const RecentPhotos = () => {
  return (
    <section className='app-space py-15 text-font-color font-open-sans'>
      <div className='app-container'>
        <HomeSectionTitle>Recent Photos</HomeSectionTitle>
        <div className='text-center pt-10'>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <RecentPhotosSlider />
      </div>
    </section>
  )
}

export default RecentPhotos;
