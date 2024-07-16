import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='main'>
        <About />
      </div>
    </div>
  );
};

export default App;
