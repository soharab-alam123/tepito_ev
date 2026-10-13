import { useNavigate } from "react-router-dom";
import { X, BatteryCharging, Gauge, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";

export default function SpecsModal({ isOpen, onClose, scooter }) {
  const navigate = useNavigate();
  if (!isOpen || !scooter) return null;

  const handleTestRideClick = () => {
    onClose();
    navigate("/contact");
  };

  const fullSpecs = {
    "tepito-one": {
      tag: "⚡ No License Required • Urban Commuter",
      price: "₹ 54,999*",
      range: "85 km (Certified)",
      speed: "25 km/h (CMVR License-Exempt)",
      license: "No License Required (0 RTO Needed)",
      motor: "250W High-Efficiency BLDC Hub Motor",
      battery: "1.9 kWh Portable Lithium-ion (Detachable)",
      chargeTime: "3.2 Hours (0-100% on 5A socket)",
      brakes: "Front Disc / Rear Drum + CBS",
      suspension: "Telescopic Hydraulic",
      bootSpace: "20 Litres",
      weight: "72 kg",
      warranty: "3 Years / 50,000 km"
    },
    "tepito-pro": {
      tag: "🚀 High Performance City Explorer",
      price: "₹ 84,999*",
      range: "120 km (Certified)",
      speed: "75 km/h",
      license: "Standard 2-Wheeler License (RTO)",
      motor: "2.5 kW High-Torque BLDC Motor",
      battery: "2.9 kWh Portable Smart Li-ion",
      chargeTime: "3.0 Hours (0-100%)",
      brakes: "Dual Disc Brakes + Regen CBS",
      suspension: "Heavy-Duty Telescopic & Dual Rear",
      bootSpace: "24 Litres (Full-Face Helmet)",
      weight: "84 kg",
      warranty: "3 Years / 50,000 km"
    },
    "tepito-max": {
      tag: "⭐ Ultra Long Range Touring",
      price: "₹ 1,04,999*",
      range: "150 km (Certified)",
      speed: "85 km/h",
      license: "Standard 2-Wheeler License (RTO)",
      motor: "3.2 kW Peak Ultra BLDC Motor",
      battery: "3.6 kWh Advanced Smart Pack",
      chargeTime: "2.5 Hours Fast Charge",
      brakes: "Dual Disc Brakes + Anti-Lock CBS",
      suspension: "Premium Monoshock Hydraulic",
      bootSpace: "26 Litres Deep Storage",
      weight: "89 kg",
      warranty: "3 Years / 50,000 km"
    }
  };

  const details = fullSpecs[scooter.id] || fullSpecs["tepito-pro"];
  const activeColor = scooter.colors ? scooter.colors[scooter.selectedColor || 0] : null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card specs-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="specs-modal-header">
          <span className="section-tag" style={{ marginBottom: "0.25rem" }}>
            {details.tag}
          </span>
          <h3 className="modal-title" style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>
            {scooter.name}
          </h3>
          <p className="modal-subtitle" style={{ marginBottom: "1rem" }}>
            Complete Technical Specifications & Features
          </p>
        </div>

        <div className="specs-modal-body-grid">
          {/* Left: Scooter Visual */}
          <div className="specs-modal-visual">
            <div className="specs-modal-img-wrap">
              <img
                src={activeColor ? activeColor.img : scooter.image}
                alt={scooter.name}
                className="specs-scooter-img"
              />
            </div>
            {activeColor && (
              <div className="specs-color-pill">
                <span>Color: <strong>{activeColor.name}</strong></span>
              </div>
            )}
            <div className="specs-price-box">
              <span className="price-label">Starting Ex-Showroom</span>
              <span className="price-value">{details.price}</span>
            </div>
          </div>

          {/* Right: Technical Specs Table */}
          <div className="specs-modal-table-wrap">
            <div className="specs-table-grid">
              <div className="spec-table-row" style={{ backgroundColor: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "0.45rem 0.75rem" }}>
                <span className="spec-name" style={{ color: "#166534", fontWeight: 700 }}>📋 License Status</span>
                <span className="spec-data" style={{ color: "#15803d", fontWeight: 800 }}>{details.license}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">⚡ Certified Range</span>
                <span className="spec-data"><strong>{details.range}</strong></span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">🚀 Top Speed</span>
                <span className="spec-data"><strong>{details.speed}</strong></span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">🔋 Battery Pack</span>
                <span className="spec-data">{details.battery}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">⏱️ Charging Time</span>
                <span className="spec-data">{details.chargeTime}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">⚙️ Powertrain</span>
                <span className="spec-data">{details.motor}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">🛑 Braking System</span>
                <span className="spec-data">{details.brakes}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">📦 Boot Space</span>
                <span className="spec-data">{details.bootSpace}</span>
              </div>
              <div className="spec-table-row">
                <span className="spec-name">🛡️ Warranty</span>
                <span className="spec-data"><span className="text-green">✓</span> {details.warranty}</span>
              </div>
            </div>

            {/* Action CTA inside modal */}
            <div className="specs-modal-actions" style={{ marginTop: "1.4rem", display: "flex", gap: "0.85rem" }}>
              <MagneticButton
                onClick={handleTestRideClick}
                className="btn-pill-green"
                style={{ flex: 1 }}
              >
                <span>Book a Test Ride</span>
                <span className="btn-arrow">→</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
