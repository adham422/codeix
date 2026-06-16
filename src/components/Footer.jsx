import React from "react";
import "./Footer.css";
import homeImage from '../../images/home.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

const Footer = ({ language = "ar" }) => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <img src={homeImage} alt="Codeix" />

          <p>
            {language === "ar"
              ? "Codeix شركة متخصصة في تطوير المواقع الإلكترونية والأنظمة الرقمية وتقديم حلول تقنية مبتكرة تساعد الشركات على النمو."
              : "Codeix is a software company specializing in web development and digital solutions that help businesses grow."}
          </p>

        </div>

        <div className="footer-links">

          <h3>
            {language === "ar" ? "روابط سريعة" : "Quick Links"}
          </h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>

        </div>

        <div className="footer-services">

          <h3>
            {language === "ar" ? "خدماتنا" : "Services"}
          </h3>

          <span>Web Development</span>
          <span>E-Commerce</span>
          <span>UI / UX Design</span>
          <span>Custom Systems</span>

        </div>

        <div className="footer-contact">

          <h3>
            {language === "ar" ? "تواصل معنا" : "Contact Us"}
          </h3>

          <a href="mailto:codeixcompany@gmail.com">
            <MdEmail />
            codeixcompany@gmail.com
          </a>

          <a
            href="https://wa.me/201027027724"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <div className="socials">

            <a
              href="https://www.facebook.com/profile.php?id=61590337711407"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/codeix/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/codeix_company/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@codeix0?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>

            <a
              href="https://x.com/Codeix0"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/@adhamhashem5303"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Codeix. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;