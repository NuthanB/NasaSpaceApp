import React from 'react';
import TypingAnim from './TypingAnim';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(section);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <h1>At DSU, we are ...</h1>
      <div className='typing'>
        <TypingAnim words={["Inspiring", "Innovating", "Creating", "Empowering"]} />
      </div>
      <button 
        className="btn btn-register"
        onClick={() => scrollToSection("register")}
      >
        Register Now
      </button>
      <h2>Going to be... World's largest NASA Space Apps Local Event 2024</h2>
    </section>
  );
}
