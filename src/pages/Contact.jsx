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
            <span className="section-tag">GET IN TOUCH • TEPITO EV</span>
            <h1 className="page-main-title">
              We're Here to Help You Ride Electric
            </h1>
            <p className="page-main-desc">
              Have questions about our electric scooters, test rides, or dealership inquiries? Visit our Lucknow offices or message us directly.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Main Split: Contact Cards on Left, Form on Right with Staggered Motion */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Cards & Social Strip */}
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
                    <span className="contact-mini-label">Registered ®️ Office</span>
                    <a
                      href="https://www.google.com/maps/search/H.NO.+2358%2F38+GALI+SHACHHADA+PATANALA+CHOWK+LUCKNOW+UP+226003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-mini-val contact-mini-link"
                      style={{ fontSize: "0.85rem", lineHeight: 1.35 }}
                    >
                      H.N. 2358/38 Gali Shachhada, Patanala Chowk, Lucknow – 226003
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-mini-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="contact-mini-icon-wrap">
                    <MapPin size={22} className="text-green" />
                  </div>
                  <div className="contact-mini-body">
                    <span className="contact-mini-label">Additional Office</span>
                    <a
                      href="https://www.google.com/maps/search/431%2F310+N+Momin+Nagar+Newati+Tola+Campbell+Road+Balaganj+Lucknow+226003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-mini-val contact-mini-link"
                      style={{ fontSize: "0.85rem", lineHeight: 1.35 }}
                    >
                      431/310 N Momin Nagar, Campbell Rd, Balaganj, Lucknow – 226003
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
                  transition={{ duration: 0.5, delay: 0.25 }}
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

      {/* Dual Offices & Experience Centers Section with Motion */}
      <section className="contact-showroom-section">
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-tag">VISIT OUR HUBS IN LUCKNOW</span>
            <h2 className="section-main-heading">Experience TEPITO EV In Person</h2>
            <p className="section-sub-desc">
              Walk into our authorized experience centers in Lucknow for instant test rides, vehicle inspection, and battery demonstrations.
            </p>
          </div>

          <div className="dual-offices-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
            {/* Card 1: Registered Office & Chowk Experience Hub */}
            <motion.div
              className="office-hub-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem", boxShadow: "var(--shadow-md)" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#16a34a", background: "#f0fdf4", padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>
                  REGISTERED ®️ OFFICE & HEAD SHOWROOM
                </span>
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Chowk, Lucknow</span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Patanala Chowk Center
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  <strong>Address:</strong> H.N. 2358/38 Gali Shachhada, Patanala Chowk, Lucknow, Uttar Pradesh – 226003
                </p>
                <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.35rem" }}>
                  📍 Incorporated Headquarters • Full Scooter Lineup & Test Track
                </p>
              </div>

              <div style={{ height: "180px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                <iframe
                  title="Patanala Chowk Lucknow Office"
                  src="https://maps.google.com/maps?q=H.NO.+2358/38+Gali+Shachhada+Patanala+Chowk+Lucknow+226003&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
                <MagneticButton
                  onClick={() => window.open("https://www.google.com/maps/search/H.NO.+2358%2F38+GALI+SHACHHADA+PATANALA+CHOWK+LUCKNOW+UP+226003", "_blank")}
                  className="btn-pill-green btn-block"
                  style={{ justifyContent: "center" }}
                >
                  <span>Get Directions</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Card 2: Additional Office & Campbell Road Balaganj Hub */}
            <motion.div
              className="office-hub-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem", boxShadow: "var(--shadow-md)" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0284c7", background: "#f0f9ff", padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>
                  ADDITIONAL OFFICE & SERVICE HUB
                </span>
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Balaganj, Lucknow</span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Balaganj Campbell Road Center
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  <strong>Address:</strong> H.No. 431/310 N, Momin Nagar Newati Tola, Opp. Manas Hospital, Campbell Road, Balaganj, Lucknow, UP – 226003
                </p>
                <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.35rem" }}>
                  📍 Customer Service Hub • Battery Diagnostics & Quick Support
                </p>
              </div>

              <div style={{ height: "180px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                <iframe
                  title="Balaganj Lucknow Office"
                  src="https://maps.google.com/maps?q=431/310+N+Momin+Nagar+Campbell+Road+Balaganj+Lucknow+226003&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
                <MagneticButton
                  onClick={() => window.open("https://www.google.com/maps/search/431%2F310+N+Momin+Nagar+Newati+Tola+Campbell+Road+Balaganj+Lucknow+226003", "_blank")}
                  className="btn-pill-green btn-block"
                  style={{ justifyContent: "center" }}
                >
                  <span>Get Directions</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
