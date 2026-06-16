import React from "react";
import "./SkillsSection.css";
import homeImage from '../../images/h1.png';


const SkillsSection = ({ language = "ar" }) => {
    const content = {
        ar: {
            title: "مهاراتنا",
            items: [
                {
                    title: "تحليل الأعمال",
                    desc: "ندرس متطلبات مشروعك بعناية لنقدم حلولاً رقمية تناسب أهداف نشاطك التجاري."
                },
                {
                    title: "الهندسة البرمجية",
                    desc: "تصميم أنظمة قوية وقابلة للتوسع بأفضل المعايير التقنية الحديثة."
                },
                {
                    title: "التطوير",
                    desc: "بناء مواقع وتطبيقات احترافية بأداء سريع وتجربة مستخدم مميزة."
                }
            ]
        },
        
        en: {
            title: "Our Skills",
            items: [
                {
                    title: "Business Analysis",
                    desc: "We study your requirements carefully to deliver solutions that fit your business goals."
                },
                {
                    title: "Software Engineering",
                    desc: "Building scalable and reliable systems using modern engineering standards."
                },
                {
                    title: "Development",
                    desc: "Creating high-performance websites and applications with exceptional user experiences."
                }
            ]
        }
    };
    
    const data = content[language];
    
    return (
        <section
        className={`skills-section ${
        language === "ar" ? "rtl" : "ltr"
      }`}
            >
            <div className="container">
            
            <div className="section-title">
            <span>{data.title}</span>
            </div>
            
            <div className="skills-wrapper">
            <div className="skills-image">
            <img src={homeImage} alt="Codeix Development" />
            </div>
            <div className="skills-content">
            {data.items.map((item, index) => (
                <div
                className="skill-card"
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
                >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                </div>
            ))}
            </div>
            
            
            
            </div>
            </div>
            </section>
        );
    };
    
    export default SkillsSection;