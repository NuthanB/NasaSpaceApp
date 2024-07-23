import React, { useEffect, useState } from "react";

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
            <img src="./icons/pin-black.png" alt="map pin icon" />
            <div className="flexbox">
                <h3>Location:</h3>
                <p className="t-orange"><strong>Dayananda Sagar University, Harohalli</strong></p>
            </div>
          </div>
          <div className="container">
            <img src="./icons/mail.png" alt="mail icon" />
            <div className="flexbox">
                <h3>Email (Local Lead):</h3>
                <p className="t-orange"><strong>rdlohith@gmail.com</strong></p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img 
            src="./icons/telegram.png" 
            alt="telegram icon" 
            onClick={() => {window.location.href="https://t.me/+qA5CpmKRdQVmMGY1"}} 
          />
          <img 
            src="./icons/gmail.png" 
            alt="email icon" 
            onClick={() => {window.location.href="#footer"}} 
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
