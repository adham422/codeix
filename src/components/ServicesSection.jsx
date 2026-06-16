import React from "react";
import "./ServicesSection.css";
import img1 from '../../images/s1.png';
import img2 from '../../images/s2.png';
import img3 from '../../images/s3.png';
import img4 from '../../images/s4.png';
import img5 from '../../images/s5.png';
import img6 from '../../images/s6.png';
import img7 from '../../images/s7.png';
import img8 from '../../images/s8.png';
import img9 from '../../images/s9.png';
import img10 from '../../images/s10.png';
import img11 from '../../images/s11.png';

const services = {
  ar: [
    {
      title: "إنشاء متجر إلكتروني",
      desc: "تصميم وتطوير متجر إلكتروني احترافي متكامل يساعدك على زيادة المبيعات وإدارة منتجاتك بسهولة.",
      image: img1
    },
    {
      title: "تصميم لوجو",
      desc: "تصميم شعارات احترافية تعكس هوية علامتك التجارية وتترك انطباعاً مميزاً لدى العملاء.",
      image: img2
    },
    {
      title: "تصميم بنرات وصور",
      desc: "تصميم بنرات وصور إعلانية جذابة لمتجرك ومواقع التواصل الاجتماعي.",
      image: img3
    },
    {
      title: "تحسين محركات البحث SEO",
      desc: "رفع ترتيب موقعك في نتائج البحث وزيادة عدد الزيارات والعملاء المحتملين.",
      image: img4
    },
    {
      title: "برمجة ثيم خاص",
      desc: "تطوير ثيم مخصص بالكامل يتوافق مع هوية نشاطك التجاري ومتطلباتك.",
      image: img5
    },
    {
      title: "تعديلات HTML / CSS / JS",
      desc: "تنفيذ كافة التعديلات البرمجية والتطويرات المطلوبة على موقعك أو متجرك.",
      image: img6
    },
    {
      title: "تصميم ملفات الأعمال",
      desc: "تصميم بروفايل الشركات والعروض التقديمية والملفات التجارية الاحترافية.",
      image: img7
    },
    {
      title: "إدارة السوشيال ميديا",
      desc: "إدارة الحسابات وإنشاء المحتوى وتحليل الأداء لتحقيق أفضل النتائج.",
      image: img8
    },
    {
      title: "حجز دومين",
      desc: "حجز النطاقات المناسبة لنشاطك التجاري وربطها بموقعك بشكل احترافي.",
      image: img9
    },
    {
      title: "مشاريع طلابية",
      desc: "المساعدة في تنفيذ المشاريع الأكاديمية والواجبات البرمجية باحترافية.",
      image: img10
    },
    {
      title: "مشاريع التخرج",
      desc: "تنفيذ مشاريع التخرج الكاملة مع التوثيق والشرح والدعم الفني.",
      image: img11
    }
  ],

  en: [
    {
      title: "E-Commerce Store",
      desc: "Professional online store development with modern design and advanced features.",
      image: img1
    },
    {
      title: "Logo Design",
      desc: "Creative logo designs that strengthen your brand identity.",
      image: img2
    },
    {
      title: "Banners & Graphics",
      desc: "Eye-catching banners and social media graphics for your business.",
      image: img3
    },
    {
      title: "SEO Optimization",
      desc: "Improve your website ranking and attract more organic traffic.",
      image: img4
    },
    {
      title: "Custom Theme Development",
      desc: "Fully customized themes designed around your brand requirements.",
      image: img5
    },
    {
      title: "HTML / CSS / JS Edits",
      desc: "Professional website modifications and feature enhancements.",
      image: img6
    },
    {
      title: "Business Profile Design",
      desc: "Professional company profiles and presentation materials.",
      image: img7
    },
    {
      title: "Social Media Management",
      desc: "Managing and growing your social media presence effectively.",
      image: img8
    },
    {
      title: "Domain Registration",
      desc: "Register the perfect domain name for your business.",
      image: img9
    },
    {
      title: "Student Projects",
      desc: "Support and development for academic and programming projects.",
      image: img10
    },
    {
      title: "Graduation Projects",
      desc: "Professional graduation project development and support.",
      image: img11
    }
  ]
};

const ServicesSection = ({ language }) => {
  const data = services[language];

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-badge">
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </span>

        <h2>
          {language === "ar"
            ? "حلول رقمية متكاملة لنمو أعمالك"
            : "Complete Digital Solutions For Your Business"}
        </h2>
      </div>

     <div className="services-grid">
  {data.map((service, index) => (
    <div
      className="service-card"
      key={index}
      style={{
        animationDelay: `${index * 0.15}s`
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="service-image"
      />

      <div className="service-content">
        <h3>{service.title}</h3>

        <p>{service.desc}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default ServicesSection;