import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/header';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/Contact';
import ClientPage from './components/layout/clientPage';
import NotFoundPage from './components/templates/404';
import CharitableContributions from './components/pages/CharitableContributions';

import './style/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-page" element={<ClientPage />} />
        <Route path="/charitable-contributions" element={<CharitableContributions />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
