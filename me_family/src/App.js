import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import OurStory from './pages/OurStory/OurStory';
import Events from './pages/Events/Events';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import ButtonReturn from './layout/ButtonReturn.js/ButtonReturn';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='390:mt-[66px] xs:mt-[72px]'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='our-story' element={<OurStory />} />
          <Route path='events' element={<Events />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <ButtonReturn />
    </BrowserRouter>
  )
}

export default App;
