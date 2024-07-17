import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Counts from './components/Counts';
import Winners from './components/Winners';
import Contact from './components/Contact';
import AutoplayCarousel from './components/AutoplayCarousel';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='main'>
        <About />
        <AutoplayCarousel />
        <Counts />
        <AutoplayCarousel />
        <Winners />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
