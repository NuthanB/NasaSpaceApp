import React from "react";

import HyperlinkIcon from "../assets/icons/hyperlink.png";
import MapPinIcon from "../assets/icons/pin.png";
import Instagram from "../assets/icons/instagram.png";
import Telegram from "../assets/icons/telegram-footer.png";

function Footer() {
  return (
    <section id="foot" className="footer">
      <div>
        <div className="footer-box">
          <img src={HyperlinkIcon} alt="hyperlink icon" />
          <a
            href="https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/harohalli/"
            className="footer-link"
          >
            NASA Space Apps Challenge 2024
          </a>
        </div>
        <div className="footer-box">
          <img src={MapPinIcon} alt="location pin icon" />
          <a
            href="https://maps.app.goo.gl/TooMk6KBsYGgSG7X7"
            className="footer-link location"
          >
            DSU Main Campus - <span className="t-sec">HAROHALLI</span>
          </a>
        </div>
        <p>
          Developed by{" "}
          <strong>
            <span className="t-sec devs">
              <a href="https://www.linkedin.com/in/nuthanb/">Nuthan B</a>,
              <a href="https://www.linkedin.com/in/pavan-ks-bhat/">
                {" "}
                Pavanananda K S
              </a>
            </span>
          </strong>
        </p>
        <p>
          Email:{" "}
          <strong>
            <span className="t-sec">lohithrd@dsu.edu.in</span>
          </strong>
        </p>
      </div>
      <div className="socials">
        <button className="social-icon">
          <a href="https://www.instagram.com/nasa.spaceappsharohalli/">
            <img src={Instagram} alt="instagram icon" />
          </a>
        </button>
        <button className="social-icon">
          <a href="https://t.me/+qA5CpmKRdQVmMGY1">
            <img
              src={Telegram}
              alt="linked in icon"
            />
          </a>
        </button>
      </div>
    </section>
  );
}

export default Footer;
