import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./ContactCodeix.css";

const ContactCodeix = ({ language = "ar" }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const content = {
    ar: {
      badge: "تواصل معنا",
      title: "هل لديك مشروع؟",
      description:
        "أرسل لنا تفاصيل مشروعك وسنتواصل معك في أقرب وقت ممكن.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      subject: "عنوان الرسالة",
      message: "اكتب رسالتك هنا",
      button: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك بنجاح ✅",
      error: "حدث خطأ أثناء إرسال الرسالة ❌",
    },

    en: {
      badge: "Contact Us",
      title: "Have a Project in Mind?",
      description:
        "Send us your project details and our team will get back to you shortly.",
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Write Your Message",
      button: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully ✅",
      error: "Failed to send message ❌",
    },
  };

  const t = content[language];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      "service_nz80je9",
      "template_f16iah8",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "B-WHqEqWgtBpNKBRm"
    );

    await Swal.fire({
      icon: "success",
      title:
        language === "ar"
          ? "تم إرسال الرسالة بنجاح"
          : "Message Sent Successfully",
      text:
        language === "ar"
          ? "شكراً لتواصلك مع Codeix، سنقوم بالرد عليك في أقرب وقت."
          : "Thank you for contacting Codeix. We will get back to you soon.",
      confirmButtonColor: "#2563eb",
      confirmButtonText:
        language === "ar" ? "ممتاز" : "Great",
    });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title:
        language === "ar"
          ? "فشل الإرسال"
          : "Sending Failed",
      text:
        language === "ar"
          ? "حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى."
          : "An error occurred while sending your message.",
      confirmButtonColor: "#dc2626",
      confirmButtonText:
        language === "ar" ? "إغلاق" : "Close",
    });
  }

  setLoading(false);
};

  return (
    <section className="contact-codeix">
      <div className="contact-codeix-container">

        <div className="contact-codeix-info">
          <span className="contact-codeix-badge">
            {t.badge}
          </span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <form
          className="contact-codeix-form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder={t.subject}
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder={t.message}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? t.sending : t.button}
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactCodeix;