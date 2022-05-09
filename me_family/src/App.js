import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import OurStory from './pages/OurStory/OurStory';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import ButtonReturn from './layout/ButtonReturn/ButtonReturn';
import NotFound from './pages/NotFound/NotFound';
import Footer from './layout/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='390:mt-[66px] mt-[72px]'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='our-story' element={<OurStory />} />
          <Route path='events' element={<Events />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <ButtonReturn />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
