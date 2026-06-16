import React, { useState } from "react";
import "./FAQSection.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = ({ language = "ar" }) => {
  const [active, setActive] = useState(null);

  const faqData = {
    ar: [
      {
        question: "ما الخدمات التي تقدمها Codeix ؟",
        answer:
          "نقدم تصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، الأنظمة المخصصة، لوحات التحكم، وتطوير تطبيقات الويب الحديثة."
      },
      {
        question: "كم تستغرق مدة تنفيذ المشروع؟",
        answer:
          "تعتمد المدة على حجم المشروع ومتطلباته، ولكن أغلب المشاريع يتم تنفيذها خلال أسبوعين إلى ثمانية أسابيع."
      },
      {
        question: "هل يمكن تطوير نظام مخصص لشركتي؟",
        answer:
          "بالتأكيد، نقوم ببناء أنظمة مخصصة بالكامل تناسب طبيعة عمل شركتك وتساعد على تحسين الإنتاجية."
      },
      {
        question: "هل تقدمون الدعم والصيانة بعد التسليم؟",
        answer:
          "نعم، نوفر خدمات الدعم الفني والصيانة والتحديثات لضمان استقرار المشروع وتحقيق أفضل أداء."
      },
      {
        question: "هل يمكن ربط الموقع بوسائل الدفع والشحن؟",
        answer:
          "نعم، نقوم بدمج بوابات الدفع الإلكتروني وأنظمة الشحن المختلفة بما يناسب احتياجات مشروعك."
      }
    ],

    en: [
      {
        question: "What services does Codeix provide?",
        answer:
          "We develop websites, e-commerce stores, custom systems, dashboards, and modern web applications."
      },
      {
        question: "How long does a project take?",
        answer:
          "Project duration depends on requirements, but most projects are completed within 2 to 8 weeks."
      },
      {
        question: "Can you build a custom system for my company?",
        answer:
          "Absolutely. We build tailored systems that fit your workflow and business goals."
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We offer maintenance, technical support, and future updates."
      },
      {
        question: "Can you integrate payment gateways?",
        answer:
          "Yes. We integrate secure payment gateways and shipping systems based on your business needs."
      }
    ]
  };

  const data = faqData[language];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      className={`faq-section ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="faq-header">
        <h2>
          {language === "ar"
            ? "الأسئلة الشائعة"
            : "Frequently Asked Questions"}
        </h2>

        <p>
          {language === "ar"
            ? "إجابات سريعة وواضحة على أكثر الأسئلة التي تصلنا من عملائنا."
            : "Quick answers to the most common questions from our clients."}
        </p>
      </div>

      <div className="faq-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${
              active === index ? "active" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              <div className="faq-icon">
                {active === index ? (
                  <FiMinus />
                ) : (
                  <FiPlus />
                )}
              </div>
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;