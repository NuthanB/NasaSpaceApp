import React, { useEffect } from "react";
import AboutImg from "../assets/about.jpg";

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("animate");
            observer.unobserve(aboutSection);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="flex-container">
        <div className="left-section">
          <h2 className="sub-title">INTRODUCTION</h2>
          <h1 className="heading">NASA Space Apps</h1>
          <p>
            NASA Space Apps is an annual international hackathon that brings
            together global participants to tackle challenges in space
            exploration and Earth science. Organized by NASA, it encourages
            teamwork, creativity, and innovation using NASA's open data. This
            event unites experts and enthusiasts from diverse backgrounds,
            making it a hub for advancing science and technology. Join us in
            Harohalli to be part of this global movement with a unique local
            touch.
          </p>
          <p>
            The NASA International Space Apps Challenge is a hackathon for
            coders, scientists, designers, storytellers, makers, technologists,
            and innovators around the world to come together and use open data
            from NASA and its Space Agency Partners to create solutions to
            challenges we face on Earth and in space.
          </p>
        </div>
        <div className="right-section">
          <img src={AboutImg} alt="About NASA Space Apps" />
        </div>
      </div>
    </section>
  );
}
