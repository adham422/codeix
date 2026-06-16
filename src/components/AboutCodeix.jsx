import React from "react";
import "./AboutCodeix.css";

import {
  FaBullhorn,
  FaPaintBrush,
  FaCode,
  FaStore,
  FaShareAlt,
  FaGlobe,
  FaFileAlt,
  FaMobileAlt,
  FaGoogle,
  FaSearch,
  FaImage,
  FaPenNib,
  FaShoppingCart,
  FaTachometerAlt,
} from "react-icons/fa";

const AboutCodeix = ({ language = "ar" }) => {
  const content = {
    ar: {
      badge: "من نحن",

      title: "نحوّل الأفكار إلى حلول رقمية متكاملة",

      description:
        "في Codeix نطوّر مواقع ويب احترافية ومتاجر إلكترونية وثيمات مخصصة لمنصات سلة وزد وشوبيفاي، بالإضافة إلى تصميم واجهات المستخدم والهوية البصرية التي تساعد العلامات التجارية على النمو.",

      services: [
        "إدارة حملات إعلانية ونقل متجر من منصة أخرى",
        "برمجة ثيم خاص على منصة سلة",
        "تعديلات CSS و JavaScript",
        "برمجة ثيم خاص على منصة زد",
        "إدارة السوشيال ميديا",
        "حجز دومين",
        "عمل CV بنظام ATS",
        "إنشاء تطبيق موبايل",
        "ربط خدمات Google",
        "تحسين محركات البحث",
        "تصميم بنرات وصور أقسام",
        "تصميم لوجو",
        "إنشاء متجر إلكتروني احترافي",
        "إضافة المنتجات وتحسين سرعة المتجر",
      ],
    },

    en: {
      badge: "About Us",

      title: "Turning Ideas Into Digital Solutions",

      description:
        "At Codeix, we build professional websites, e-commerce stores, custom Salla, Zid, and Shopify themes, along with modern UI/UX and branding solutions that help businesses grow.",

      services: [
        "Advertising Campaign Management & Store Migration",
        "Custom Salla Theme Development",
        "CSS & JavaScript Customization",
        "Custom Zid Theme Development",
        "Social Media Management",
        "Domain Registration",
        "ATS-Friendly CV Creation",
        "Mobile App Development",
        "Google Services Integration",
        "Search Engine Optimization (SEO)",
        "Banner & Category Image Design",
        "Logo Design",
        "Professional E-commerce Store Development",
        "Product Upload & Store Speed Optimization",
      ],
    },
  };

  const data = content[language];

  const icons = [
    <FaBullhorn />,
    <FaPaintBrush />,
    <FaCode />,
    <FaStore />,
    <FaShareAlt />,
    <FaGlobe />,
    <FaFileAlt />,
    <FaMobileAlt />,
    <FaGoogle />,
    <FaSearch />,
    <FaImage />,
    <FaPenNib />,
    <FaShoppingCart />,
    <FaTachometerAlt />,
  ];

  return (
    <section className="about-codeix">
      <div className="about-codeix-container">

        <div className="about-codeix-content">

          <span className="about-codeix-badge">
            {data.badge}
          </span>

          <h2>{data.title}</h2>

          <p>{data.description}</p>

          <div className="about-codeix-services">
            {data.services.map((item, index) => (
              <div
                key={index}
                className="about-codeix-service"
              >
                {icons[index]}

                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="about-codeix-visual">

          <div className="about-codeix-glow"></div>

          <div className="about-codeix-card">

            <FaCode />

            <h3>Codeix</h3>

            <p>
              Web Development
              <br />
              UI/UX Design
              <br />
              E-Commerce Solutions
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCodeix;