import React, { useEffect } from "react";

export default function Counts() {
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
            countSection.classList.add("animate");
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
    const increment = Math.ceil(finalCount / 50);

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
    <section id="counts" className="counts-section">
      <div className="right-section">
        <img src="./counts.jpeg" alt="About NASA Space Apps" />
      </div>
      <div className="left-section">
        <h3 className="heading">About DSU</h3>
        <p className="t-italic">
          Dayananda Sagar University has ideally positioned itself in providing
          value-based education, research and healthcare is now all set to take
          forward its 6 decades legacy of providing world-class quality
          education in its sprawling campus at Harohalli, Bengaluru.
        </p>
        <div className="counts-subsection">
          <p className="left">
            This main campus is thoughtfully planned on 130 acres, with a
            picturesque site and a blossoming green environment, making it free
            from city crowds and pollution. Being a completely selfcontained
            campus at Harohalli, Kanakapura Road (35kms from Bengaluru city), it
            is equipped with the entire modern state-of-the-art infrastructure,
            creating a conducive environment for progressive experiential
            learning and futuristic growth and transforming you into
            next-generation innovators, explorers, leaders, and researchers.
          </p>
          <div className="flex-container">
            <div className="count-box">
              <img className="box-icon" src="./icons/happy.png" alt="Happy face icon" />
              <div className="flexbox">
                <p className="number">1800+</p>
                <p>Students</p>
              </div>
            </div>
            <div className="count-box">
              <img className="box-icon" src="./icons/notes.png" alt="Journal icon" />
              <div className="flexbox">
                <p className="stats">NAAC A+</p>
                <p>approved</p>
              </div>
            </div>
            <div className="count-box box-spl-1">
              <img className="box-icon" src="./icons/village.png" alt="Village house icon" />
              <div className="flexbox">
                <p className="number">4</p>
                <p>villages adopted over</p>
              </div>
            </div>
            <div className="count-box box-spl-2">
              <img
                className="box-icon"
                src="./icons/premium-badge.png"
                alt="premium badge icon"
              />
              <div className="flexbox">
                <p className="stats">Sagar Hospitals</p>
                <p>free treatment to the adopted villages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
