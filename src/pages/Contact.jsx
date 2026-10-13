import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  Instagram,
  Facebook
} from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";

export default function Contact() {
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

  const MAP_URL = "https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z";

  return (
    <div className="page-wrapper contact-page">
      {/* Header Eyebrow & Title with Motion */}
      <section className="contact-header-section">
        <div className="container">
          <motion.div 
            className="contact-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">GET IN TOUCH</span>
            <h1 className="page-main-title">
              We're Here to Help
            </h1>
            <p className="page-main-desc">
              Have questions about our scooters, services or want to book a test ride? Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Split: 4 Contact Cards on Left, Form on Right with Staggered Motion */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: 4 Cards (2x2 grid) & Social Strip */}
            <div className="contact-left-col">
              <div className="contact-info-cards-grid">
              <motion.div 
                className="contact-mini-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-mini-icon-wrap">
                  <MapPin size={22} className="text-green" />
                </div>
                <div className="contact-mini-body">
                  <span className="contact-mini-label">Our Location</span>
                  <a 
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-mini-val contact-mini-link"
                  >
                    Lucknow, Uttar Pradesh, India
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-mini-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-mini-icon-wrap">
                  <Phone size={22} className="text-green" />
                </div>
                <div className="contact-mini-body">
                  <span className="contact-mini-label">Call Us</span>
                  <a href="tel:+919876543210" className="contact-mini-val contact-mini-link">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-mini-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-mini-icon-wrap">
                  <Mail size={22} className="text-green" />
                </div>
                <div className="contact-mini-body">
                  <span className="contact-mini-label">Email Us</span>
                  <a href="mailto:support@tepito.in" className="contact-mini-val contact-mini-link">
                    support@tepito.in
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-mini-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-mini-icon-wrap">
                  <Clock size={22} className="text-green" />
                </div>
                <div className="contact-mini-body">
                  <span className="contact-mini-label">Working Hours</span>
                  <span className="contact-mini-val">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Social Links Quick Connect */}
            <div className="contact-social-strip" style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginTop: "1.25rem", padding: "0.85rem 1.25rem", backgroundColor: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)" }}>
              <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                Follow TEPITO EV:
              </span>
              <a 
                href="https://www.instagram.com/tepito.in?utm_source=qr&igsi=ZHN6aWdzcmJ6bDE0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", fontWeight: 700, color: "#e1306c", textDecoration: "none", padding: "0.35rem 0.85rem", borderRadius: "9999px", backgroundColor: "#fdf2f8" }}
              >
                <Instagram size={15} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/19B1zwETyH/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", fontWeight: 700, color: "#1877f2", textDecoration: "none", padding: "0.35rem 0.85rem", borderRadius: "9999px", backgroundColor: "#eff6ff" }}
              >
                <Facebook size={15} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form with Motion */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <div className="form-success-alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} className="text-green" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our team in Lucknow will contact you at <strong>{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button onClick={handleReset} className="btn-pill-outline" style={{ marginTop: "1.25rem" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-clean">
                  <div className="form-group-clean">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-clean"
                    />
                  </div>

                  <div className="form-group-clean">
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-clean"
                    />
                  </div>

                  <div className="form-group-clean">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-clean"
                    />
                  </div>

                  <div className="form-group-clean">
                    <textarea
                      required
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input-clean form-textarea-clean"
                    ></textarea>
                  </div>

                  <MagneticButton type="submit" className="btn-pill-green btn-block">
                    <span>Send Message</span>
                    <span className="btn-arrow">→</span>
                  </MagneticButton>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showroom & Map Bottom Section with Motion */}
      <section className="contact-showroom-section">
        <div className="container">
          <motion.div 
            className="showroom-map-split-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Map Preview Box */}
            <div className="map-preview-card">
              <iframe
                title="TEPITO EV Lucknow Location"
                src="https://maps.google.com/maps?q=Patanala%20Chowk,%20Lucknow,%20Uttar%20Pradesh%20226003&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-badge-overlay"
              >
                <div className="map-pin-circle">
                  <MapPin size={18} className="text-green" />
                </div>
                <div className="map-badge-text">
                  <span className="map-badge-city">Lucknow</span>
                  <span className="map-badge-state">Uttar Pradesh, India</span>
                </div>
              </a>
            </div>

            {/* Visit Showroom Box */}
            <div className="showroom-visit-card">
              <div className="showroom-visit-img-box">
                <img
                  src="/images/contact-showroom.jpg"
                  alt="TEPITO EV Lucknow Showroom"
                  className="showroom-visit-img"
                />
              </div>
              <div className="showroom-visit-body">
                <h3 className="showroom-visit-title">Visit Our Showroom</h3>
                <p className="showroom-visit-desc">
                  Experience TEPITO EV scooters in person and take a test ride today.
                </p>
                <MagneticButton
                  onClick={() => window.open(MAP_URL, "_blank")}
                  className="btn-pill-green"
                  style={{ alignSelf: "flex-start", marginTop: "auto" }}
                >
                  <span>Get Directions</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
