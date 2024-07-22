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
    <div id="contact" className={`contact-section ${isVisible ? "fade-up" : ""}`}>
      <h2 className="sub-title">CONTACT</h2>
      <h1 className="heading">CONTACT US</h1>

      {/* Google Maps location */}

      <div className="row">
        <div className="left-section">
          <div className="container">
            <img src="./pin.png" />
            <div className="flexbox">
                <h3>Location:</h3>
                <p>Dayananda Sagar University, Harohalli</p>
            </div>
          </div>
          <div className="container">
            <img src="./mail.png" />
            <div className="flexbox">
                <h3>Email:</h3>
                <p>dsu-harohalli@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <form>
            <div className="two-field">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input className="subject" type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="10" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
