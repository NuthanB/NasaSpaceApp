import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [brandImgPath, setBrandImgPath] = useState("./logo-dark.png");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
      setBrandImgPath("./logo-dark.png");
    } else {
      setScrolled(false);
      setBrandImgPath("./logo-dark.png");
    }

    const sections = document.querySelectorAll("section");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        offset >= sectionTop - 60 &&
        offset < sectionTop + sectionHeight - 60
      ) {
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
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveLink(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={brandImgPath} alt="logo" />
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
              href="#home"
              className={`navbar-link ${
                activeLink === "gallery" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Gallery
            </a>
          </li>
          <li className="navbar-menu-item">
            <a
              href="#contact"
              className={`navbar-link ${
                activeLink === "contact" ? "t-orange" : ""
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="btn btn-winners"
          onClick={() => scrollToSection("winners")}
        >
          Winners
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
