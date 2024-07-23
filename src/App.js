import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Counts from './components/Counts';
import Organizers from './components/Organizers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='main'>
        <About />
        <hr/>
        <Counts />
        <hr/>
        <Organizers />
        <hr/>
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
