import React, { useEffect, useRef } from "react";

import HyperlinkIcon from "../assets/icons/hyperlink.png";

function Registration() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = [...entry.target.querySelectorAll("*")];
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("visible");
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="register" className="registration" ref={stepsRef}>
      <h2 className="sub-title">REGISTRATION</h2>
      <h1 className="heading">Steps to Register</h1>
      <div className="steps">
        <div className="step">
          <h3>01</h3>
          <p>
            <span className="link">
              <img src={HyperlinkIcon} alt="Hyperlink icon" />
              <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/">
                Click here
              </a>
            </span>
            {" "}
            and log in or register
          </p>
        </div>
        <div className="arrow"></div>
        <div className="step">
          <h3>02</h3>
          <p>
            Click on "<span className="t-spcl">Explore the Hackathon</span>" in the top right corner, then
            select "<span className="t-spcl">2024 Local Event</span>" or{" "}
            <span className="link">
              <img src={HyperlinkIcon} alt="Hyperlink icon" />
              <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/harohalli">
                click here
              </a>
            </span>  
          </p>
        </div>
        <div className="arrow"></div>
        <div className="step">
          <h3>03</h3>
          <p>
            Search for "<span className="t-spcl">Harohalli</span>" and click on "<span className="t-spcl">Choose this local event</span>". Then
            click on "<span className="t-spcl">Confirm registration</span>".
          </p>
        </div>
      </div>
    </section>
  );
}

export default Registration;
