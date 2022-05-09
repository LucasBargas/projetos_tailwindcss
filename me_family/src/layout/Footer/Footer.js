import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsSkype } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-[30px] bg-dark-blue'>
      <div className='app-space text-white font-open-sans'>
        <div className='app-container text-center'>
          <h3 className='font-poppins font-bold text-4xl'>MeFamily</h3>
          <p className='italic text-sm mt-4'>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div className='flex justify-center flex-wrap py-10'>
            <a className='bg-sky-blue mx-1 h-9 w-9 rounded-full flex justify-center items-center' target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
              <BsTwitter />
            </a>
            <a className='bg-sky-blue mx-1 h-9 w-9 rounded-full flex justify-center items-center' target="_blank" href="https://www.facebook.com/" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a className='bg-sky-blue mx-1 h-9 w-9 rounded-full flex justify-center items-center' target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a className='bg-sky-blue mx-1 h-9 w-9 rounded-full flex justify-center items-center' target="_blank" href="https://www.skype.com/pt-br/" rel="noopener noreferrer">
              <BsSkype />
            </a>
            <a className='bg-sky-blue mx-1 h-9 w-9 rounded-full flex justify-center items-center' target="_blank" href="https://www.linkedin.com/in/lucas-bargas-56618b16b/" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

          <div>
            <p className="leading-6 text-sm">Esta aplicação web é uma réplica desenvolvida, a fins estudantis, por <a className="font-bold hover:underline" target="_blank" href="https://projetoslucasbargas.com/" rel="noopener noreferrer">Lucas Bargas</a>, com base em uma aplicação encontrada na web. Porém, toda a codificação é própria.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
