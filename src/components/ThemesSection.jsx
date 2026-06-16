import  { useState } from "react";
import "./ThemesSection.css";

import theme4 from '../../images/t4.png';
import theme5 from '../../images/t5.png';


const themes = [
  // SALLA
  {
    id: 1,
    platform: "salla",
    image: theme5,
    demoUrl: "https://salla.sa/dev-8zyb2fsjmuxinhn4",
    ar: {
      title: "ثيم الماس",
      description: "ثيم احترافي سريع ومتجاوب لجميع الأجهزة.",
    },
    en: {
      title: "Almas Theme",
      description: "Professional responsive theme.",
    },
  },
  {
    id: 2,
    platform: "salla",
    image: theme4,
    demoUrl: "https://demostore.salla.sa/dev-gjcfjciqpgfw8zgv",
    ar: {
      title: "ثيم مليكة",
      description: "تصميم عصري يساعد على زيادة المبيعات.",
    },
    en: {
      title: "Malika Theme",
      description: "Modern design focused on conversions.",
    },
  },

  // ZID
  {
    id: 7,
    platform: "zid",
    image: theme5,
    demoUrl: "https://f4pj2k.zid.store/",
    ar: {
      title: "ثيم ماس زد",
      description: "للمتاجر متعددة المنتجات.",
    },
    en: {
      title: "Almas Zid Theme",
      description: "For multi-product stores.",
    },
  },
  
];

const content = {
  ar: {
    title: "الثيمات والتطبيقات",
    subtitle: "ثيمات احترافية عالية الجودة لمتاجر سلة وزد وشوبيفاي",
    demoBtn: "عرض الديمو",
    tabs: {
      salla: "سلة",
      zid: "زد",
      shopify: "شوبيفاي",
    },
  },

  en: {
    title: "Themes & Apps",
    subtitle: "Premium themes for Salla, Zid and Shopify stores",
    demoBtn: "View Demo",
    tabs: {
      salla: "Salla",
      zid: "Zid",
      shopify: "Shopify",
    },
  },
};

export default function ThemesSection({ language = "ar" }) {
  const [activeTab, setActiveTab] = useState("salla");

  const t = content[language];

  const filteredThemes = themes.filter(
    (theme) => theme.platform === activeTab
  );

  return (
    <section
      className="themes-section"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="tabs">
          <button
            className={`tab ${
              activeTab === "salla" ? "active" : ""
            }`}
            onClick={() => setActiveTab("salla")}
          >
            {t.tabs.salla}
          </button>

          <button
            className={`tab ${
              activeTab === "zid" ? "active" : ""
            }`}
            onClick={() => setActiveTab("zid")}
          >
            {t.tabs.zid}
          </button>

          <button
            className={`tab ${
              activeTab === "shopify" ? "active" : ""
            }`}
            onClick={() => setActiveTab("shopify")}
          >
            {t.tabs.shopify}
          </button>
        </div>

        <div className="themes-grid">
          {filteredThemes.map((theme) => (
            <div
              className="theme-card"
              key={theme.id}
            >
              <img
                src={theme.image}
                alt={theme[language].title}
              />

              <h3>{theme[language].title}</h3>

              <p>
                {theme[language].description}
              </p>

              <a
                href={theme.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                {t.demoBtn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}