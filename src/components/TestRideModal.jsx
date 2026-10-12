import { useState } from "react";
import { X, CheckCircle2, Calendar, Phone, User, MapPin } from "lucide-react";

export default function TestRideModal({ isOpen, onClose, preselectedModel = "TEPITO PRO" }) {
  const [model, setModel] = useState(preselectedModel);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Panipat, Haryana");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setDate("");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleResetAndClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleResetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} color="#22c55e" />
            </div>
            <h3 className="modal-title">Test Ride Booked!</h3>
            <p className="modal-text">
              Thank you, <strong>{name}</strong>! Your test ride for the{" "}
              <strong className="text-green">{model}</strong> in {city} is confirmed. Our Panipat team will call you shortly at <strong>{phone}</strong>.
            </p>
            <button className="btn-pill-green" onClick={handleResetAndClose} style={{ marginTop: "1.5rem" }}>
              Back to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="section-tag" style={{ marginBottom: "0.25rem" }}>TEST RIDE</div>
            <h3 className="modal-title">Book a Test Ride</h3>
            <p className="modal-subtitle">
              Feel the power, silence, and thrill of TEPITO EV. Pick your preferred model and date.
            </p>

            <div className="model-selector-chips">
              {["TEPITO ONE", "TEPITO PRO", "TEPITO MAX"].map((m) => (
                <button
                  type="button"
                  key={m}
                  className={`model-chip ${model === m ? "active" : ""}`}
                  onClick={() => setModel(m)}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} className="input-icon" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Showroom Location</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-pill-green btn-block" style={{ marginTop: "1rem" }}>
              Confirm Test Ride Booking →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
