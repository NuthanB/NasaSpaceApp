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
    <div id="winners" className={`winners-section ${isVisible ? "fade-up" : ""}`}>
      <h2 className="sub-title">
        CONGRATULATIONS
      </h2>
      <h1 className="heading">WINNERS</h1>
      <div className="cards-container">
        <Card
          img_path="./winners-s.jpg"
          card_body="Best Local Galactic Awards - Seniors"
        />
        <Card
          img_path="./winners-j.jpg"
          card_body="Best Local Galactic Awards - Juniors"
        />
        <Card
          img_path="./winnerslist.jpg"
          card_body="Local Galactic Awards - Seniors"
        />
        <Card
          img_path="./winnerslist1.jpg"
          card_body="Local Galactic Awards - Juniors"
        />
      </div>
    </div>
  );
}

export default Winners;
