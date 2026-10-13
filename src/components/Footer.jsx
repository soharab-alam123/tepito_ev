import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";

export default function Footer({ onOpenLegal }) {
  const MAP_URL = "https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z";

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
                ELECTRIC MOBILITY SOLUTIONS
              </span>
            </div>
          </Link>
          <p className="footer-description">
            Clean, silent, and sustainable electric scooters designed and engineered for Indian roads.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/share/19B1zwETyH/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-btn"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/tepito.in?utm_source=qr&igsi=ZHN6aWdzcmJ6bDE0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-btn"
            >
              <Instagram size={16} />
            </a>

          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Support */}
        <div className="footer-col">
          <h4 className="footer-heading">Customer Support</h4>
          <ul className="footer-nav-list">
            <li><Link to="/services">Warranty</Link></li>
            <li><Link to="/services">Battery & Maintenance</Link></li>
            <li><Link to="/contact">Service Request</Link></li>
            <li><Link to="/contact">Book Test Ride</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Office Locations */}
        <div className="footer-col footer-col--offices">
          <h4 className="footer-heading">Contact & Offices</h4>

          {/* Quick Contact Links */}
          <div className="footer-quick-contacts">
            <a href="tel:+919876543210" className="footer-contact-pill">
              <Phone size={14} className="text-green" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:support@tepito.in" className="footer-contact-pill">
              <Mail size={14} className="text-green" />
              <span>support@tepito.in</span>
            </a>
          </div>

          {/* Structured Office Cards */}
          <div className="footer-offices-stack">
            <a
              href="https://www.google.com/maps/search/H.NO.+2358%2F38+GALI+SHACHHADA+PATANALA+CHOWK+LUCKNOW+UP+226003"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-office-card"
            >
              <div className="office-card-header">
                <MapPin size={14} className="text-green" />
                <span className="office-card-badge">Registered Office</span>
              </div>
              <p className="office-card-addr">
                H.N. 2358/38 Gali Shachhada, Patanala Chowk, Lucknow (UP) 226003
              </p>
            </a>

            <a
              href="https://www.google.com/maps/search/431%2F310+N+Momin+Nagar+Newati+Tola+Campbell+Road+Balaganj+Lucknow+226003"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-office-card"
            >
              <div className="office-card-header">
                <MapPin size={14} className="text-green" />
                <span className="office-card-badge">Additional Office</span>
              </div>
              <p className="office-card-addr">
                431/310 N Momin Nagar, Campbell Rd, Balaganj, Lucknow (UP) 226003
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip with Corporate CIN & Legal Modals */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <div className="copyright-group">
            <p className="copyright-text">
              © 2026 TEPITO EV. All rights reserved.
            </p>

          </div>

          <div className="footer-legal-links">
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal("privacy")}
              className="footer-legal-btn"
            >
              Privacy Policy
            </button>
            <span className="divider">|</span>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal("terms")}
              className="footer-legal-btn"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
