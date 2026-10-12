import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function Contact({ onOpenTestRide }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-hero-content">
              <span className="section-tag">GET IN TOUCH</span>
              <h1 className="page-main-title">
                We're Here to Help
              </h1>
              <p className="page-main-desc">
                Have questions about our scooters, services or booking a test ride? Reach out to us anytime.
              </p>
            </div>
            <div className="contact-hero-img-wrap">
              <img
                src="/images/hero-scooter.jpg"
                alt="TEPITO EV In Showroom"
                className="contact-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Contact Info Cards (2x2) */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card__icon-wrap">
                <MapPin size={24} className="text-green" />
              </div>
              <div className="contact-card__body">
                <span className="contact-card__title">Our Location</span>
                <a 
                  href="https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__value" 
                  style={{ fontSize: "0.95rem", lineHeight: 1.4, display: "inline-block", color: "#ffffff" }}
                >
                  H.No. 2358–38 Gali Shachhada, Patanala Chowk, Lucknow, UP – 226003
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrap">
                <Phone size={24} className="text-green" />
              </div>
              <div className="contact-card__body">
                <span className="contact-card__title">Call Us</span>
                <a href="tel:+919876543210" className="contact-card__value">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrap">
                <Mail size={24} className="text-green" />
              </div>
              <div className="contact-card__body">
                <span className="contact-card__title">Email Us</span>
                <a href="mailto:support@tepito.in" className="contact-card__value">
                  support@tepito.in
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrap">
                <Clock size={24} className="text-green" />
              </div>
              <div className="contact-card__body">
                <span className="contact-card__title">Working Hours</span>
                <span className="contact-card__value">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Split Section */}
      <section className="contact-form-map-section">
        <div className="container">
          <div className="form-map-grid">
            {/* Form Column */}
            <div className="contact-form-box">
              <h3 className="form-box-title">Send us a Message</h3>
              
              {submitted ? (
                <div className="form-success-alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={40} color="#22c55e" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our customer support team will contact you at <strong>{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button onClick={handleReset} className="btn-pill-outline" style={{ marginTop: "1rem" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      required
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-pill-green btn-block">
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Live Interactive Google Maps Column */}
            <div className="map-widget-box" style={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "480px" }}>
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  padding: "1rem 1.25rem", 
                  backgroundColor: "var(--bg-card)", 
                  borderBottom: "1px solid var(--border-subtle)" 
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MapPin size={20} className="text-green" />
                  <div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", display: "block", lineHeight: 1.2 }}>
                      Patanala Chowk, Lucknow
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                      UP – 226003
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                  style={{ padding: "0.45rem 1rem", fontSize: "0.82rem", textDecoration: "none" }}
                >
                  <span>Open Full Map</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Real Interactive Google Maps Embed */}
              <div style={{ flex: 1, width: "100%", minHeight: "400px", position: "relative" }}>
                <iframe
                  title="TEPITO EV Google Maps Location"
                  src="https://maps.google.com/maps?q=H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+226003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    minHeight: "420px",
                    display: "block"
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Showroom Section */}
      <section className="showroom-visit-section">
        <div className="container">
          <div className="showroom-visit-card">
            <div className="showroom-visit-text">
              <h2 className="showroom-visit-title">
                Visit Our Showroom & Head Office
              </h2>
              <p className="showroom-visit-desc">
                Experience TEPITO EV scooters in person and take a test ride today at our Lucknow location.
              </p>
              <a
                href="https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-green"
              >
                <span>Get Directions</span>
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="showroom-visit-visual">
              <img
                src="/images/contact-showroom.jpg"
                alt="TEPITO EV Showroom Floor"
                className="showroom-visit-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
