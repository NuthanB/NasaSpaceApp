import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const countSection = document.querySelector(".counts-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const countBoxes = document.querySelectorAll(".count-box .number");
            countBoxes.forEach((box) => {
              animateCount(box);
            });
            observer.unobserve(countSection);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(countSection);
  }, []);

  const animateCount = (element) => {
    const finalCount = parseInt(element.innerText, 10);
    let currentCount = 0;
    const increment = Math.ceil(finalCount / 100);

    const updateCount = () => {
      currentCount += increment;
      if (currentCount > finalCount) {
        currentCount = finalCount;
      }
      element.innerText = currentCount;

      if (currentCount < finalCount) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  return (
    <div className="counts-section">
      <div className="right-section">
        <img src="./counts.jpg" alt="About NASA Space Apps" />
      </div>
      <div className="left-section">
        <h3 className="heading">Earth's Largest Local Event</h3>
        <p>
          NASA Space Apps '23, the Earth's largest local event, was successfully
          hosted at Dayananda Sagar University in Harohalli, Bangalore,
          showcasing innovative solutions for space apps challenges.
        </p>
        <div className="grid-container">
          <div className="count-box">
            <img className="box-icon" src="./happy.png" alt="Participants" />
            <div className="flexbox">
              <p className="number">57999</p>
              <p>Participants</p>
            </div>
          </div>
          <div className="count-box">
            <img className="box-icon" src="./notes.png" alt="Boot Camps" />
            <div className="flexbox">
              <p className="number">8715</p>
              <p>Teams</p>
            </div>
          </div>
          <div className="count-box">
            <img className="box-icon" src="./clock.png" alt="Teams" />
            <div className="flexbox">
              <p className="number">402</p>
              <p>Local Events</p>
            </div>
          </div>
          <div className="count-box">
            <img className="box-icon" src="./premium-badge.png" alt="Awards" />
            <div className="flexbox">
              <p className="number">5556</p>
              <p>Projects Submitted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
