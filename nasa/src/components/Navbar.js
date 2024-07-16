import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <a href="/" className="navbar-link t-orange">
              Home
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/services" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="btn btn-winners">Winners</button>
      </div>
    </nav>
  );
};

export default Navbar;
