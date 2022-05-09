import React from 'react';
import Head from '../../utils/Head';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactDatas from './ContactDatas/ContactDatas';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
      <Head title='Lucas Bargas - MeFamily | Contact' />
      <PageTitle pageCurrent='Contact' />
      <section className='app-container py-[60px]'>
        <div className='app-space'>
          <div className='h-60 sm:h-[270px] w-full bg-map bg-cover bg-center'></div>

          <div className='flex flex-col lg:flex-row gap-8 pt-12'>
            <ContactDatas />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
