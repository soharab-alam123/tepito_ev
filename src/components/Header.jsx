import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll detection for compact glass state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-container">
          {/* Logo with official red Tepito brand mark */}
          <Link to="/" className="site-logo" aria-label="TEPITO EV Home">
            <img
              src="/images/tepito-logo.jpg"
              alt="Tepito Logo"
              className="site-logo__img"
            />
            <div className="site-logo__text-wrap">
              <span className="site-logo__text">
                TEPITO <span className="text-green">EV</span>
              </span>
              <span className="site-logo__subtext">
                Electric Mobility Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "desktop-nav__link active" : "desktop-nav__link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "desktop-nav__link active" : "desktop-nav__link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "desktop-nav__link active" : "desktop-nav__link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "desktop-nav__link active" : "desktop-nav__link"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Action CTA with Magnetic Pull Physics */}
          <div className="header-actions">
            <MagneticButton
              onClick={() => navigate("/contact")}
              className="btn-pill-green desktop-only-btn"
            >
              <span>Book a Test Ride</span>
              <span className="btn-arrow">→</span>
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-drawer__overlay" onClick={() => setIsOpen(false)} />
        <div className="mobile-drawer__content">
          <div className="mobile-drawer__top">
            <Link to="/" className="site-logo" onClick={() => setIsOpen(false)}>
              <img
                src="/images/tepito-logo.jpg"
                alt="Tepito Logo"
                className="site-logo__img"
              />
              <div className="site-logo__text-wrap">
                <span className="site-logo__text">
                  TEPITO <span className="text-green">EV</span>
                </span>
                <span className="site-logo__subtext">
                  Electric Mobility Solutions
                </span>
              </div>
            </Link>
            <button
              className="mobile-drawer__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="mobile-drawer__links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "mobile-drawer__link active" : "mobile-drawer__link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "mobile-drawer__link active" : "mobile-drawer__link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "mobile-drawer__link active" : "mobile-drawer__link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "mobile-drawer__link active" : "mobile-drawer__link"
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="mobile-drawer__footer">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-pill-green btn-block"
              style={{ textAlign: "center", display: "inline-flex", justifyContent: "center", alignItems: "center" }}
            >
              <span>Book a Test Ride</span>
              <span className="btn-arrow">→</span>
            </Link>

            <a
              href="https://tepito.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-ecommerce-link"
              style={{
                marginTop: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#16a34a",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                padding: "0.65rem",
                borderRadius: "9999px",
                textDecoration: "none"
              }}
            >
              <span>🛍️ Visit E-Commerce Store (tepito.in)</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
