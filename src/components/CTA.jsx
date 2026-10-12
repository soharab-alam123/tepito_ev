import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

export default function CTA({
  title = "Ready to experience the future of daily commutes?",
  subtitle = "Book a free doorstep test ride or visit our experience center today. Zero petrol, zero hassle.",
  primaryAction = "Book Test Ride",
  primaryLink = "/contact"
}) {
  return (
    <section className="section" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner__inner">
            <div style={{ maxWidth: "620px" }}>
              <div className="pill-badge">
                <span className="dot"></span>
                <span>Zero Commitment • 100% Electric</span>
              </div>
              <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
              <p style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "1.8rem" }}>
                {subtitle}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.95rem", color: "var(--brand-mint)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle size={17} /> <span>Instant 24-hr Approval</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle size={17} /> <span>3-Year Battery Warranty</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle size={17} /> <span>Doorstep Delivery</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <Link to={primaryLink} className="btn btn--lg">
                <span>{primaryAction}</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn--ghost" style={{ textAlign: "center" }}>
                Explore EMI Plans (₹1,999/mo)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
