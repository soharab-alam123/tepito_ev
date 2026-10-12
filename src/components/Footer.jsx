import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer({ onOpenTestRide }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand-logo">
            <img
              src="/images/tepito-logo.jpg"
              alt="Tepito Logo"
              className="footer-brand-img"
            />
            <div className="footer-brand-text">
              <span className="brand-title">
                TEPITO <span className="text-green">EV</span>
              </span>
              <span className="brand-subtitle">
                Electric Mobility Solutions
              </span>
            </div>
          </Link>
          <p className="footer-description">
            Clean, silent, and sustainable electric scooters designed and engineered for Indian roads.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><Link to="/">Home & Models</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Support */}
        <div className="footer-col">
          <h4 className="footer-heading">Customer Support</h4>
          <ul className="footer-nav-list">
            <li><Link to="/services">Warranty</Link></li>
            <li><Link to="/services">Battery & Maintenance</Link></li>
            <li><Link to="/contact">Service Request</Link></li>
            <li>
              {onOpenTestRide ? (
                <button
                  onClick={onOpenTestRide}
                  style={{
                    color: "inherit",
                    background: "none",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  Book Test Ride
                </button>
              ) : (
                <Link to="/contact">Book Test Ride</Link>
              )}
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact-list">
            <li className="contact-item-address">
              <MapPin size={18} className="footer-icon text-green" />
              <a 
                href="https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-address-text"
                style={{ color: "var(--text-secondary)", textDecoration: "none", lineHeight: 1.5 }}
              >
                H.No. 2358–38 Gali Shachhada,<br />
                Patanala Chowk,<br />
                Lucknow, UP – 226003
              </a>
            </li>
            <li className="contact-item-phone">
              <Phone size={18} className="footer-icon text-green" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="contact-item-email">
              <Mail size={18} className="footer-icon text-green" />
              <a href="mailto:support@tepito.in">support@tepito.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p className="copyright-text">
            © 2026 TEPITO. All rights reserved.
          </p>
          {/* <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy</Link>
            <span className="divider">|</span>
            <Link to="/terms-conditions">Terms</Link>
            <span className="divider">|</span>
            <Link to="/contact">Support</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
