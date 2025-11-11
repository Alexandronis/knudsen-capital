import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PageLoader from './components/layout/PageLoader';
import './styles/main.scss';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Portfolio = lazy(() => import('./components/pages/Portfolio'));
const Contact = lazy(() => import('./components/pages/Contact'));
const ClientPage = lazy(() => import('./components/layout/ClientPage'));
const CharitableContributions = lazy(() => import('./components/pages/CharitableContributions'));
const NotFoundPage = lazy(() => import('./components/templates/404'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-page" element={<ClientPage />} />
          <Route path="/charitable-contributions" element={<CharitableContributions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
