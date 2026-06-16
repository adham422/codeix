import React from "react";
import "./SupportSection.css";
import img from "../../images/h3.PNG"

import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const SupportSection = ({ language = "ar" }) => {
  return (
    <section className="support-section">

      <div className="support-container">

        <div className="support-image">

          <img
            src= {img} 
            alt="Codeix Support"
          />

        </div>

        <div className="support-content">

          <span className="support-badge">
            {language === "ar"
              ? "دعم فني متواصل"
              : "24/7 Support"}
          </span>

          <h2>
            {language === "ar"
              ? "نرافقك حتى بعد تسليم المشروع"
              : "We Stay With You After Launch"}
          </h2>

          <p>
            {language === "ar"
              ? "في Codeix لا ينتهي دورنا عند تسليم الموقع أو النظام. نقدم دعماً فنياً مدى الحياة، ومتابعة مستمرة، بالإضافة إلى شروحات فيديو مخصصة على قناتنا في يوتيوب حسب احتياجات عملائنا."
              : "At Codeix our mission doesn't stop after delivery. We provide lifetime technical support, continuous assistance, and dedicated YouTube tutorials tailored to our clients' needs."}
          </p>

          <div className="support-features">

            <div className="feature">
               {language === "ar"
                ? "دعم فني مدى الحياة"
                : "Lifetime Support"}
            </div>

            <div className="feature">
               {language === "ar"
                ? "متابعة على مدار 24 ساعة"
                : "24/7 Assistance"}
            </div>

            <div className="feature">
               {language === "ar"
                ? "شروحات فيديو مخصصة"
                : "Custom Video Tutorials"}
            </div>

            <div className="feature">
               {language === "ar"
                ? "حل المشاكل بسرعة"
                : "Fast Problem Solving"}
            </div>

          </div>

          <div className="support-buttons">

            <a
              href="https://wa.me/201027027724"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              {language === "ar"
                ? "تواصل واتساب"
                : "WhatsApp"}
            </a>

            <a
              href="https://www.youtube.com/@adhamhashem5303"
              target="_blank"
              rel="noreferrer"
              className="youtube-btn"
            >
              <FaYoutube />
              {language === "ar"
                ? "قناة يوتيوب"
                : "YouTube Channel"}
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SupportSection;