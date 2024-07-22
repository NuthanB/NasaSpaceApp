import React, { useEffect, useState } from "react";
import Card from "./Card";

function Winners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="organizers"
      className={`org-section ${isVisible ? "fade-up" : ""}`}
    >
      <h2 className="sub-title">THANKS TO OUR</h2>
      <h1 className="heading">ORGANIZERS</h1>
      <div className="cards-container">
        <Card
          img_path="./organizers/Ms-Supriya-Mathew.jpg"
          card_title="Ms. Supriya Mathew "
          card_body="Organiser, Nasa Space Apps- Harohalli. Vice
President- International Affairs"
          card_tail=""
        />
        <Card
          img_path="./organizers/Mr-Lohith-RD.jpg"
          card_title="Mr. Lohith R D"
          card_body="Local Lead, Nasa Space Apps- Harohalli. Technical
Lead, International Affairs at DSU"
          card_tail="Has been the NASA Space Apps global
nominee in 2022(Bangalore, India) and 2023(Cambridge, UK)"
        />
        <Card
          img_path="./organizers/Ms-Sudha-Deepthi.jpg"
          card_title="Ms. Sudha Deepthi"
          card_body="Co-Local Lead, Nasa Space Apps- Harohalli. Manager,
Bosch Rexroth."
          card_tail="Has been hosting NASA Space Apps for the past 12
years"
        />
        <Card
          img_path="./organizers/Ms-Shivamma-Devanna.jpg"
          card_title="Ms. Shivamma D"
          card_body="Co-Host, Nasa Space Apps- Harohalli. Professor - Data
Science Department."
          card_tail="NASA Global Mentor 2022 from Bangalore, India"
        />
      </div>
    </section>
  );
}

export default Winners;
