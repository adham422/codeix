
import "./TestimonialsSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaStar } from "react-icons/fa";

const TestimonialsSection = ({ language = "ar" }) => {
  const testimonials = {
    ar: [
      {
        name: "أحمد خالد",
        company: "متجر إلكتروني",
        text: "تجربة رائعة جداً، فريق احترافي والتسليم كان أسرع من المتوقع."
      },
      {
        name: "محمد علي",
        company: "شركة تسويق",
        text: "أفضل شركة تعاملت معها في تصميم وتطوير المواقع."
      },
      {
        name: "سارة محمود",
        company: "عيادة طبية",
        text: "الموقع ظهر بشكل احترافي وساعدنا في زيادة العملاء."
      },
      {
        name: "يوسف سمير",
        company: "شركة عقارات",
        text: "التواصل ممتاز والتنفيذ مطابق تماماً لما طلبناه."
      },
      {
        name: "محمود شريف",
        company: "مطعم",
        text: "واجهة جميلة وسرعة عالية في الموقع."
      },
      {
        name: "منة الله",
        company: "متجر ملابس",
        text: "أنصح بالتعامل مع Codeix بكل ثقة."
      }
    ],

    en: [
      {
        name: "Ahmed Khaled",
        company: "E-Commerce Store",
        text: "Amazing experience and very professional team."
      },
      {
        name: "Mohamed Ali",
        company: "Marketing Agency",
        text: "One of the best web development companies."
      },
      {
        name: "Sarah Mahmoud",
        company: "Medical Clinic",
        text: "The website helped us attract more customers."
      },
      {
        name: "Youssef Samir",
        company: "Real Estate",
        text: "Excellent communication and execution."
      },
      {
        name: "Mahmoud Sherif",
        company: "Restaurant",
        text: "Beautiful design and excellent performance."
      },
      {
        name: "Mennatallah",
        company: "Fashion Store",
        text: "Highly recommended."
      }
    ]
  };

  const data = testimonials[language];

  return (
    <section
      className={`testimonials-section ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="section-header">
        <h2>
          {language === "ar"
            ? "ماذا يقول عملاؤنا عن Codeix ؟"
            : "What Clients Say About Codeix"}
        </h2>

        <p>
          {language === "ar"
            ? "نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل تجربة ممكنة."
            : "Trusted by businesses that value quality and innovation."}
        </p>
      </div>

      <Swiper
        dir="ltr"
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        loop={true}
        spaceBetween={24}
        allowTouchMove={true}
        className="testimonials-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review">
                "{item.text}"
              </p>

              <div className="client">
                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;