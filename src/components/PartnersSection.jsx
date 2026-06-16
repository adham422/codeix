import React from "react";
import "./PartnersSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../images/m1.webp";
import img2 from "../../images/m2.webp";
import img3 from "../../images/m3.avif";
import img4 from "../../images/m4.webp";
import img5 from "../../images/m5.webp";
import img6 from "../../images/m6.avif";
import img7 from "../../images/m7.webp";
import img8 from "../../images/m8.webp";
import img9 from "../../images/m9.png";
import img10 from "../../images/m10.png";

const PartnersSection = ({ language = "ar" }) => {
  const basePartners = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  // تكرار بسيط للـ loop
  const partners = [...basePartners, ...basePartners];

  return (
    <section id="partners" className="partners-section">
      <div className={`partners-header ${language === "ar" ? "rtl" : "ltr"}`}>
        <h2>
          {language === "ar"
            ? "شركاء النجاح"
            : "Success Partners"}
        </h2>

        <p>
          {language === "ar"
            ? "نفخر بثقة عملائنا وشركائنا الذين اختاروا Codeix كشريك تقني لهم."
            : "We are proud to be trusted by our clients and partners."}
        </p>
      </div>

      <Swiper
        dir="ltr"
        modules={[Autoplay]}
        loop
        loopedSlides={basePartners.length}
        loopAdditionalSlides={10}
        allowTouchMove={false}
        centeredSlides={false}
        speed={7000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          468: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        className="partners-swiper"
      >
        {partners.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="partner-card">
              <img
                src={logo}
                alt={`partner-${index}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartnersSection;