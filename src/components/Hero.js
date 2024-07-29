import React from 'react';
import TypingAnim from './TypingAnim';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1>At DSU,</h1>
      <div className='typing'>
        <h1>we are</h1>
        <TypingAnim words={["Inspiring", "Innovating", "Creating", "Empowering"]} />
      </div>
      <h2>Going to be... World's largest NASA Space Apps Local Event 2024</h2>
    </section>
  );
}

export default Hero;
