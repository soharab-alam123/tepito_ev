import { X, Play, Sparkles } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-video-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close video">
          <X size={20} />
        </button>

        <div className="video-player-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&rel=0&modestbranding=1"
            title="TEPITO EV | Ride The Change Brand Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px", border: "none", aspectRatio: "16/9", display: "block" }}
          ></iframe>
        </div>
        
        <div style={{ marginTop: "1.2rem", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
            <span className="section-tag" style={{ margin: 0 }}>BRAND FILM</span>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>• Lucknow, Uttar Pradesh</span>
          </div>
          <h4 style={{ color: "#0f172a", fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.35rem" }}>
            TEPITO EV — Accelerating India's Electric Future
          </h4>
          <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
            Experience the quiet power, innovative battery design, and exhilarating performance of TEPITO electric scooters engineered for Indian roads.
          </p>
        </div>
      </div>
    </div>
  );
}
