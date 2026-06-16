import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThemesSection from './components/ThemesSection';
import ServicesShowcase from './components/ServicesShowcase';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import StatsSection from './components/StatsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import SupportSection from './components/SupportSection';
import PartnersSection from './components/PartnersSection';
import AboutCodeix from './components/AboutCodeix';
import ContactCodeix from './components/ContactCodeix';


function App() {
  const [lang, setLang] = useState('ar');
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };
  
  useEffect(() => {
    document.documentElement.dir =
    lang === 'ar' ? 'rtl' : 'ltr';
    
    document.documentElement.lang = lang;
  }, [lang]);
  
return (
  <div className="min-h-screen bg-gray-50">

    <Navbar
      lang={lang}
      toggleLanguage={toggleLanguage}
    />

    <section id="home">
      <Home language={lang} />
    </section>

    <section id="services">
      <ServicesSection language={lang} />
    </section>

    <section id="themes">
      <ThemesSection language={lang} />
    </section>

    <section id="stats">
      <StatsSection language={lang} />
    </section>

    <section id="showcase">
      <ServicesShowcase language={lang} />
    </section>

    <section id="support">
      <SupportSection language={lang} />
    </section>

    <section id="partners">
      <PartnersSection language={lang} />
    </section>

    <section id="skills">
      <SkillsSection language={lang} />
    </section>

    <section id="about">
      <AboutCodeix language={lang} />
    </section>

    <section id="contact">
      <ContactCodeix language={lang} />
    </section>

    <section id="faq">
      <FAQSection language={lang} />
    </section>

    <section id="testimonials">
      <TestimonialsSection language={lang} />
    </section>

    <Footer language={lang} />

  </div>
);
}

export default App;