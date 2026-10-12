import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ onOpenTestRide }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
      <header className="site-header">
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

          {/* Action CTA */}
          <div className="header-actions">
            <button
              onClick={onOpenTestRide}
              className="btn-pill-green desktop-only-btn"
            >
              Book a Test Ride
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation"
            >
              <Menu size={26} color="#ffffff" />
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
              <X size={26} color="#ffffff" />
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
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenTestRide) onOpenTestRide();
              }}
              className="btn-pill-green btn-block"
            >
              Book a Test Ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
