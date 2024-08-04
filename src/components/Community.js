import React, { useEffect, useRef } from "react";

export default function Community() {
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
            }, index * 200);
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
    <div className="circle-container" ref={stepsRef}>
      <div
        className="circle"
        id="circle1"
      >
        <span className="number">57,999</span>
        <span className="label">Registrants</span>
      </div>
      <div
        className="circle"
        id="circle2"
      >
        <span className="number">387</span>
        <span className="label">Local Leads</span>
      </div>
      <div
        className="circle"
        id="circle3"
      >
        <span className="number">135</span>
        <span className="label">Subject Matter Experts</span>
      </div>
      <div
        className="circle"
        id="circle4"
      >
        <span className="number">26</span>
        <span className="label">Amplification Collaborations</span>
      </div>
      <div
        className="circle"
        id="circle5"
      >
        <span className="number">24</span>
        <span className="label">Navigators</span>
      </div>
      <div
        className="circle"
        id="circle6"
      >
        <span className="number">13</span>
        <span className="label">Initial BFR Trainers</span>
      </div>
    </div>
  );
}
