import React from 'react';
import TypingAnim from './TypingAnim';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1>Until next time,</h1>
      <div className='typing'>
        <h1>forever</h1>
        <TypingAnim words={["Inspiring", "Innovating", "Creating", "Empowering"]} />
      </div>
      <h2>Earth's largest Local event NASASPACEAPPS '23</h2>
      <div className='hero-links'>
        <a className='t-orange' href="/">4218 participants</a>
        <a className='t-orange' href="/">443 Teams</a>
        <a className='t-orange' href="/">58 Bootcamps</a>
      </div>
    </section>
  );
}

export default Hero;
