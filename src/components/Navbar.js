import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <section className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./icons/logo-dark.png" alt="logo" />
          <img src="./icons/dsu.png" alt="logo" />
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
              href="#home"
              className={`navbar-link ${
                activeLink === "home" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>  
          </li>
          <li className="navbar-menu-item">
            <a
              href="#about"
              className={`navbar-link ${
                activeLink === "about" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#organizers"
              className={`navbar-link ${
                activeLink === "organizers" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("organizers")}
            >
              Organizers
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#foot"
              className={`navbar-link ${
                activeLink === "foot" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("foot")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
