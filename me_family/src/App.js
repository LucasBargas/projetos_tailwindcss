import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
