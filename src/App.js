import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DSU from './components/DSU';
import Organizers from './components/Organizers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='main'>
        <About />
        <Registration />
        <DSU />
        <Organizers />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
