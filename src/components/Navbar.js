import React, { useState, useEffect } from "react";
import "../App.css";
import NASALogo from "../assets/icons/logo-dark.png";
import DSULogo from "../assets/icons/dsu.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        if(isOpen) toggleMenu();
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);

      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.clientHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isOpen, toggleMenu]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setActiveLink(id);
      setIsOpen(false);
    }
  };

  return (
    <section
      className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
        visible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={DSULogo}
            alt="DSU logo"
            onClick={() => scrollToSection("home")}
          />
          <img
            src={NASALogo}
            alt="NASA logo"
            onClick={() => scrollToSection("home")}
          />
        </div>
        <div className={`navbar-toggle ${isOpen ? "open" : ""}`}>
          <button onClick={toggleMenu} className="navbar-toggle-button">
            {isOpen ? (
              <svg
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-menu-item">
            <a
              href="#about"
              className={`navbar-link ${activeLink === "about" ? "t-sec" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              Introduction
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#register"
              className={`navbar-link ${
                activeLink === "register" ? "t-sec" : ""
              }`}
              onClick={() => scrollToSection("register")}
            >
              Registration
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#counts"
              className={`navbar-link ${
                activeLink === "counts" ? "t-sec" : ""
              }`}
              onClick={() => scrollToSection("counts")}
            >
              DSU
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#organizers"
              className={`navbar-link ${
                activeLink === "organizers" ? "t-sec" : ""
              }`}
              onClick={() => scrollToSection("organizers")}
            >
              Organizers
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
