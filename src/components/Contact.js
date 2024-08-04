import React, { useEffect, useState } from "react";

import MapIcon from "../assets/icons/pin-black.png";
import MailIcon from "../assets/icons/mail.png";
import Telegram from "../assets/icons/telegram.png";
import GMail from "../assets/icons/gmail.png" ;

function Contact() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 100);

  return () => clearTimeout(timer);
 }, []);

  return (
    <section id="contact" className={`contact-section ${isVisible ? "fade-up" : ""}`}>
      <h1 className="heading">CONTACT US</h1>
      <div className="row">
        <div className="left-section">
          <div className="container">
            <img src={MapIcon} alt="map pin icon" />
            <div className="flexbox">
                <h3>Location:</h3>
                <p className="t-orange"><strong>Dayananda Sagar University, Harohalli</strong></p>
            </div>
          </div>
          <div className="container">
            <img src={MailIcon} alt="mail icon" />
            <div className="flexbox">
                <h3>Email (Local Lead):</h3>
                <p className="t-orange"><strong>lohithrd@dsu.edu.in</strong></p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img 
            src={Telegram} 
            alt="telegram icon" 
            onClick={() => {window.location.href="https://t.me/+qA5CpmKRdQVmMGY1"}} 
          />
          <img 
            src={GMail}
            alt="email icon" 
            onClick={() => {window.location.href="#footer"}} 
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
