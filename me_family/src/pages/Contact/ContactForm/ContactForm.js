import React from 'react';

const ContactForm = () => {
  return (
    <div className='w-full lg:w-[65%]'>
      <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-4 sm:gap-6 font-open-sans'>
        <input placeholder='Your Name' className='font-open-sans text-font-color h-11 py-1.5 px-3 outline-0 rounded border border-form-border focus:border-sky-blue block' type="text" />
        <input placeholder='Your Email' className='font-open-sans text-font-color h-11 py-1.5 px-3 outline-0 rounded border border-form-border focus:border-sky-blue block' type="text" />
        <input placeholder='Subject' className='font-open-sans text-font-color h-11 py-1.5 px-3 outline-0 rounded border border-form-border focus:border-sky-blue block sm:col-start-1 sm:col-end-3' type="text" />
        <textarea placeholder='Message' rows='5' className='font-open-sans text-font-color py-2.5 px-3 outline-0 rounded resize-none border border-form-border focus:border-sky-blue block sm:col-start-1 sm:col-end-3 overflow-y-auto' />
        <div className='sm:col-start-1 sm:col-end-3 text-center'>
          <button className='py-2.5 px-[30px] rounded inline-block text-white duration-500 bg-sky-blue hover:opacity-90'>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
