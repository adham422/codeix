import React from "react";
import "./ServicesShowcase.css";
import homeImage from '../../images/h2.png';
const content = {
  ar: {
    title: "إنشاء المتاجر الإلكترونية",
    description:
      "نقوم بتصميم وتطوير متاجر إلكترونية احترافية على مختلف المنصات مع تجربة مستخدم مميزة وأداء عالي يساعدك على زيادة المبيعات.",
    features: [
      "تصميم واجهات احترافية ومتجاوبة.",
      "تهيئة المتجر لمحركات البحث SEO.",
      "ربط بوابات الدفع والشحن.",
      "إدارة المنتجات والأقسام.",
      "دعم فني ومتابعة بعد الإطلاق.",
      "تحسين سرعة وأداء المتجر."
    ],
    button: "ابدأ مشروعك الآن"
  },

  en: {
    title: "E-Commerce Store Development",
    description:
      "We build professional online stores with modern design, excellent user experience, and high performance to help grow your business.",
    features: [
      "Responsive and modern design.",
      "SEO optimization.",
      "Payment & shipping integration.",
      "Products and categories management.",
      "Technical support after launch.",
      "Performance optimization."
    ],
    button: "Start Your Project"
  }
};

const ServicesShowcase = ({
  language = "ar",
  image = homeImage
}) => {
  const data = content[language];

  return (
    <section
      className={`services-showcase ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
    
      <div className="showcase-content">
        <span className="section-tag">Codeix</span>

        <h2>{data.title}</h2>

        <p>{data.description}</p>

        <ul>
          {data.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button className="showcase-btn" onClick={() => window.location.href = 'https://wa.me/201027027724'}>
          {data.button}
        </button>
      </div>

        <div className="showcase-image">
        <img src={image} alt={data.title} />
      </div>

    </section>
  );
};

export default ServicesShowcase;