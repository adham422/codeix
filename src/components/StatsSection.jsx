import React, { useEffect, useState } from "react";
import "./StatsSection.css";

import {
  FaHandshake,
  FaChartLine,
  FaHeadset,
  FaAward
} from "react-icons/fa";

const StatsSection = ({ language = "ar" }) => {
  const [partners, setPartners] = useState(0);
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [support, setSupport] = useState(0);

  useEffect(() => {
    const animateCounter = (
      target,
      setter,
      duration = 2000
    ) => {
      let start = 0;

      const increment =
        target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateCounter(6000, setPartners);
    animateCounter(3000, setProjects);
    animateCounter(8, setExperience);
    animateCounter(24, setSupport);
  }, []);

  const content = {
    ar: {
      title: "أرقام تتحدث عن نجاحنا",
      subtitle:
        "نفخر بثقة عملائنا وشركائنا، ونسعى دائماً لتقديم حلول تقنية مبتكرة تحقق نتائج حقيقية.",

      partners: "شريك وثق بخدماتنا",
      projects: "مشروع تم تنفيذه",
      experience: "سنوات من الخبرة",
      support: "دعم فني متواصل"
    },

    en: {
      title: "Numbers That Reflect Success",
      subtitle:
        "We take pride in helping businesses grow through innovative digital solutions and long-term support.",

      partners: "Trusted Partners",
      projects: "Completed Projects",
      experience: "Years of Experience",
      support: "Technical Support"
    }
  };

  const data = content[language];

  return (
    <section
      className={`stats-section ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="stats-header">
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="icon-circle">
            <FaHandshake />
          </div>

          <h3>+{partners}</h3>
          <p>{data.partners}</p>
        </div>

        <div className="stat-card">
          <div className="icon-circle">
            <FaChartLine />
          </div>

          <h3>+{projects}</h3>
          <p>{data.projects}</p>
        </div>

        <div className="stat-card">
          <div className="icon-circle">
            <FaAward />
          </div>

          <h3>{experience}+</h3>
          <p>{data.experience}</p>
        </div>

        <div className="stat-card">
          <div className="icon-circle">
            <FaHeadset />
          </div>

          <h3>{support}/7</h3>
          <p>{data.support}</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;