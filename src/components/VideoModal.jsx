import { X, Play } from "lucide-react";

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
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="TEPITO EV Brand Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px", border: "none", aspectRatio: "16/9" }}
          ></iframe>
        </div>
        <div style={{ marginTop: "1rem", textAlign: "left" }}>
          <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
            TEPITO EV | Ride The Change
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.88rem", margin: 0 }}>
            Experience the silent revolution in electric mobility. Designed for urban agility and long-range power.
          </p>
        </div>
      </div>
    </div>
  );
}
