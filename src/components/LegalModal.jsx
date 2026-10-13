import { X, ShieldCheck, FileText } from "lucide-react";

export default function LegalModal({ isOpen, onClose, activeTab = "privacy" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card legal-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="legal-modal-header" style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
            <ShieldCheck size={20} className="text-green" />
            <span className="section-tag" style={{ margin: 0 }}>LEGAL & COMPLIANCE</span>
          </div>
          <h3 className="modal-title" style={{ fontSize: "1.5rem" }}>
            {activeTab === "privacy" ? "Privacy & Data Protection Policy" : "Terms & Conditions of Service"}
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.45 }}>
            TEPITO ELECTRIC MOBILITY SOLUTIONS • CIN: U47912UP2022PTC173748 • GSTIN: 09AAQCM3723K1ZZ • PAN: AAQCM3723K
            <br />
            Registered Office: H.N. 2358/38 Gali Shachhada, Patanala Chowk, Lucknow, UP – 226003
          </p>
        </div>

        <div className="legal-modal-body" style={{ maxHeight: "380px", overflowY: "auto", paddingRight: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.65 }}>
          {activeTab === "privacy" ? (
            <>
              <h4 style={{ color: "#0f172a", marginTop: "0.5rem", marginBottom: "0.35rem" }}>1. Information We Collect</h4>
              <p>
                When you book a test ride, submit an inquiry, or interact with TEPITO EV, we collect essential contact details such as your name, mobile number, email address, and preferred showroom city (Lucknow, UP).
              </p>

              <h4 style={{ color: "#0f172a", marginTop: "1rem", marginBottom: "0.35rem" }}>2. Purpose of Data Use</h4>
              <p>
                Your contact details are used strictly to coordinate test ride schedules, provide vehicle financing estimates, dispatch warranty notifications, and deliver customer support. We do not sell or lease customer information to third-party advertisers.
              </p>

              <h4 style={{ color: "#0f172a", marginTop: "1rem", marginBottom: "0.35rem" }}>3. Data Security & Storage</h4>
              <p>
                All personal information is stored securely in encrypted databases conforming to Indian Information Technology (IT) Act guidelines. You may request data removal or opt out of promotional messages at any time by contacting support@tepito.in.
              </p>
            </>
          ) : (
            <>
              <h4 style={{ color: "#0f172a", marginTop: "0.5rem", marginBottom: "0.35rem" }}>1. Test Ride Eligibility & License Requirements</h4>
              <p>
                <strong>Low-Speed Commuter Series:</strong> No driving licence or RTO registration is required under Indian CMVR regulations (top speed capped at 25 km/h, motor output 250W). Riders aged 16+ are welcome.
                <br />
                <strong>High-Speed Models:</strong> Test ride participants must hold a valid two-wheeler driving licence. Helmet safety protocols apply to all test rides at our authorized Lucknow showroom or doorstep handover.
              </p>

              <h4 style={{ color: "#0f172a", marginTop: "1rem", marginBottom: "0.35rem" }}>2. Scooter Specifications & Range</h4>
              <p>
                Stated ranges (85 km, 120 km, 150 km) are certified Indian Driving Cycle (IDC) test figures. Actual real-world range may vary depending on rider weight, terrain, tire pressure, and riding mode.
              </p>

              <h4 style={{ color: "#0f172a", marginTop: "1rem", marginBottom: "0.35rem" }}>3. Warranty & Battery Coverage</h4>
              <p>
                Our 3-Year / 50,000 km warranty covers the lithium-ion battery pack, brushless hub motor, and electronic controller against manufacturing defects when serviced at authorized centers.
              </p>
            </>
          )}
        </div>

        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #e2e8f0", textAlign: "right" }}>
          <button onClick={onClose} className="btn-pill-outline" style={{ padding: "0.5rem 1.4rem" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
