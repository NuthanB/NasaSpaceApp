import React, { useEffect } from "react";

import CountsBG from "../assets/counts.jpeg";
import StudentIcon from "../assets/icons/student.png";
import LandIcon from "../assets/icons/land.png";
import VillageHouseIcon from "../assets/icons/village.png";
import PremiumBadgeIcon from "../assets/icons/premium-badge.png";
import RocketIcon from "../assets/icons/rocket.png";

export default function DSU() {
  useEffect(() => {
    const countSection = document.querySelector(".counts-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const countBoxes = document.querySelectorAll(".count-box .number");
            countSection.classList.add("animate");
            
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
    <section id="counts" className="counts-section">
      <h2 className="sub-title">INFORMATION & STATISTICS</h2>
      <h1 className="heading">About DSU</h1>
      
      <div className="flex-container">
        <div className="right-section">
          <img src={CountsBG} alt="About NASA Space Apps" />
        </div>
        <div className="left-section">
          <p>
            Dayananda Sagar University has ideally positioned itself in
            providing value-based education, research and healthcare is now all
            set to take forward its 6 decades legacy of providing world-class
            quality education in its sprawling campus at Harohalli, Bengaluru.
          </p>
          <div className="counts-subsection">
            <div className="count-box">
              <img
                className="box-icon"
                src={StudentIcon}
                alt="Student icon"
              />
              <div className="flex-container">
                <p className="number">1800</p>
                <p>Students on campus</p>
              </div>
            </div>
            <div className="count-box">
              <img
                className="box-icon"
                src={PremiumBadgeIcon}
                alt="premium badge icon"
              />
              <div className="flex-container">
                <p className="stats">NAAC A+</p>
                <p>Aggregated</p>
              </div>
            </div>
            <div className="count-box">
              <img
                className="box-icon"
                src={LandIcon}
                alt="Land icon"
              />
              <div className="flex-container">
                <p className="number">130</p>
                <p>acres of land, for the building</p>
              </div>
            </div>
            <div className="count-box">
              <img
                className="box-icon"
                src={RocketIcon}
                alt="Rokcet icon"
              />
              <div className="flex-container">
                <p className="stats">Bosch & DERBI</p>
                <p>foundations on campus</p>
              </div>
            </div>
            <div className="count-box last">
              <img
                className="box-icon"
                src={VillageHouseIcon}
                alt="Village house icon"
              />
              <div className="flex-container">
                <p className="number">4 </p>
                <p>
                  villages adopted in Kanakpura with free treatement at Sagar
                  Hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="info-end">
        This main campus is thoughtfully planned on 130 acres, with a
        picturesque site and a blossoming green environment, making it free from
        city crowds and pollution. Being a completely selfcontained campus at
        Harohalli, Kanakapura Road (35kms from Bengaluru city), it is equipped
        with the entire modern state-of-the-art infrastructure, creating a
        conducive environment for progressive experiential learning and
        futuristic growth and transforming you into next-generation innovators,
        explorers, leaders, and researchers.
      </p>
    </section>
  );
}
