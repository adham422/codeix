import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

// استيراد الصورة الأساسية (اللابتوب والموبايل)
import homeImage from '../../images/home.png'; 

const Home = ({ language }) => {
  const isAr = language === 'ar';

  // نصوص الموقع بما فيها البطاقات الطائرة
  const content = {
    ar: {
      badge: "أكثر من 6,000 متجر اختار كوديكس كشريك",
      title: "نتجاوز حدود الثيم..",
      desc: "بمنظومة متكاملة تجمع الإبداع، الأداء والتجربة في حل واحد لنجاح متجرك.",
      btn: "ابدأ استشارتك مجاناً",
      // نصوص البطاقات الذكية
      cardPlatform: "أكبر منصة سعودية 🇸🇦",
      cardSales: "مبيعات خيالية 📈",
      cardProfit: "الأرباح السنوية",
      cardProfitVal: "+154,000 ر.س",
      cardThemes: "مكتبة ثيمات متنوعة 🎨"
    },
    en: {
      badge: "Over 6,000 stores chose Codeix as a partner",
      title: "Beyond the Theme limits..",
      desc: "An integrated system combining creativity, performance, and experience in one solution for your store's success.",
      btn: "Start Your Free Consultation",
      // English floating cards text
      cardPlatform: "Top Saudi Platform 🇸🇦",
      cardSales: "Crazy Sales 📈",
      cardProfit: "Annual Profit",
      cardProfitVal: "+$41,000 USD",
      cardThemes: "Diverse Theme Library 🎨"
    }
  };

  const current = isAr ? content.ar : content.en;

  // إعدادات ظهور المحتوى لأول مرة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={`home-hero ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <motion.div 
          className="hero-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* الجانب النصي */}
          <div className="hero-content">
            <motion.div variants={itemVariants} className="badge">
              <span className="icon">👑</span>
              {current.badge}
            </motion.div>

            <motion.h1 variants={itemVariants} className="main-title">
              {current.title}
            </motion.h1>

            <motion.p variants={itemVariants} className="description">
              {current.desc}
            </motion.p>

            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'https://wa.me/201027027724'}
              className="cta-button"
            >
              {current.btn}
            </motion.button>
          </div>

          {/* جانب الصورة والبطاقات السحرية العائمة */}
          <div className="hero-image-container">
            <div className="image-box">
              
              {/* الصورة الأساسية النظيفة */}
              <img src={homeImage} alt="Dashboard Preview" className="main-img" />

              {/* 1. بطاقة أكبر منصة (أعلى اليمين في العربي) */}
              <div className="float-card card-platform">
                <div className="card-dot pulse-orange"></div>
                <span>{current.cardPlatform}</span>
              </div>

              {/* 2. بطاقة مبيعات خيالية (وسط الصورة) */}
              <div className="float-card card-sales">
                <span>{current.cardSales}</span>
              </div>

              {/* 3. بطاقة الأرباح والرسم البياني المصغر */}
              <div className="float-card card-profit">
                <p className="profit-title">{current.cardProfit}</p>
                <h3 className="profit-value">{current.cardProfitVal}</h3>
                <div className="mini-chart">
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                  <span className="bar bar-4"></span>
                </div>
              </div>

              {/* 4. بطاقة مكتبة الثيمات المتنوعة (أسفل اليسار عند الموبايل) */}
              <div className="float-card card-themes">
                <span>{current.cardThemes}</span>
              </div>

              {/* الـ Shadow الأرضي */}
              <div className="image-shadow"></div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;