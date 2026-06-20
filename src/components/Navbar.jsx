import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../images/logo.png';

const Navbar = ({ lang, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const text = {
    ar: {
      brandSub: "شركة برمجيات",

      about: "من نحن",
      services: "خدماتنا",
      portfolio: "مشاريعنا",
      partners: "شركاؤنا",
      contact: "تواصل معنا",
      startProject: "الدعم الفنى",
    },

    en: {
      brandSub: "Software Company",
      about: "About Us",
      services: "Services",
      portfolio: "Projects",
      partners: "Partners",
      contact: "Contact Us",

      startProject: "Technical Support",
    },
  };

  const currentDir = lang === "ar" ? "rtl" : "ltr";

  return (
    <nav className="codeix-navbar" dir={currentDir}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo-section">
          <div className="logo-icon-placeholder">
            <img className="main-logo" src={logo} alt="Codeix Logo" />
          </div>

          <div className="logo-text">
            <span className="brand-name">Codeix</span>

            <span className="brand-sub">
              {text[lang].brandSub}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">

          <a href="#about" className="nav-link">
            {text[lang].about}
          </a>

          <a href="#services" className="nav-link">
            {text[lang].services}
          </a>

          <a href="#themes" className="nav-link">
            {text[lang].portfolio}
          </a>

          <a href="#partners" className="nav-link">
            {text[lang].partners}
          </a>

          <a href="#contact" className="nav-link">
            {text[lang].contact}
          </a>

        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions-desktop">

          <button
            onClick={toggleLanguage}
            className="btn-secondary lang-switch-btn"
          >
            🌐 {lang === "ar" ? "English" : "العربية"}
          </button>

          <a href="https://wa.me/201027027724" className="btn-primary">
            {text[lang].startProject}
          </a>

        </div>

        {/* Mobile Actions */}
        <div className="navbar-mobile-toggle">

          <button
            onClick={toggleLanguage}
            className="mobile-language-btn"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-btn"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar-mobile-menu ${
          isOpen ? "is-open" : ""
        }`}
      >

        <a
          href="#about"
          className="mobile-nav-link"
          onClick={() => setIsOpen(false)}
        >
          {text[lang].about}
        </a>

        <a
          href="#services"
          className="mobile-nav-link"
          onClick={() => setIsOpen(false)}
        >
          {text[lang].services}
        </a>

        <a
          href="#themes"
          className="mobile-nav-link"
          onClick={() => setIsOpen(false)}
        >
          {text[lang].portfolio}
        </a>

        <a
          href="#partners"
          className="mobile-nav-link"
          onClick={() => setIsOpen(false)}
        >
          {text[lang].partners}
        </a>

        <a
          href="#contact"
          className="mobile-nav-link"
          onClick={() => setIsOpen(false)}
        >
          {text[lang].contact}
        </a>

        <div className="mobile-menu-actions">

          <a
            href="#contact"
            className="btn-primary text-center"
          >
            {text[lang].startProject}
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;