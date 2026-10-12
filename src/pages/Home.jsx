import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Gauge, 
  Zap, 
  CloudRain, 
  ArrowRight, 
  Play,
  CheckCircle2,
  BatteryCharging
} from "lucide-react";

const scooters = [
  {
    id: "tepito-one",
    name: "TEPITO ONE",
    tagline: "Urban Commuter",
    description: "Stylish, efficient and perfect for city rides.",
    image: "/images/tepito-one.jpg",
    specs: { range: "85 km", speed: "55 km/h", charge: "3.2 hrs" }
  },
  {
    id: "tepito-pro",
    name: "TEPITO PRO",
    tagline: "High Performance",
    description: "More power for a smoother ride.",
    image: "/images/tepito-pro.jpg",
    specs: { range: "120 km", speed: "75 km/h", charge: "3 hrs" }
  },
  {
    id: "tepito-max",
    name: "TEPITO MAX",
    tagline: "Long Range",
    description: "Built for longer journeys with advanced features.",
    image: "/images/tepito-max.jpg",
    specs: { range: "150 km", speed: "85 km/h", charge: "2.5 hrs" }
  }
];

export default function Home({ onOpenTestRide, onOpenVideo }) {
  const [selectedScooter, setSelectedScooter] = useState(null);

  const scrollToScooters = () => {
    const el = document.getElementById("our-scooters");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="section-tag">RIDE THE CHANGE</span>
            <h1 className="hero-title">
              Smart Electric Mobility for a Cleaner Tomorrow
            </h1>
            <p className="hero-subtitle">
              Experience powerful performance, modern design and zero emissions with TEPITO EV electric scooters.
            </p>
            <div className="hero-btn-group">
              <button
                onClick={() => onOpenTestRide && onOpenTestRide("TEPITO PRO")}
                className="btn-pill-green"
              >
                Book a Test Ride
              </button>
              <button onClick={scrollToScooters} className="btn-pill-outline">
                <span>Explore Models</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-glow-backdrop" />
            <img
              src="/images/hero-white-scooter.jpg"
              alt="TEPITO EV Modern White Electric Scooter"
              className="hero-scooter-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar-section">
        <div className="container">
          <div className="stats-pill-grid">
            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Leaf size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">100%</span>
                <span className="stat-pill-label">Electric</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Gauge size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">120 km</span>
                <span className="stat-pill-label">Range</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Zap size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">3 hrs</span>
                <span className="stat-pill-label">Fast Charging</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <div className="co2-badge-icon">CO₂</div>
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">Zero</span>
                <span className="stat-pill-label">Emissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Ride / Our Scooters Section */}
      <section id="our-scooters" className="scooters-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">OUR SCOOTERS</span>
            <h2 className="section-title">Choose Your Ride</h2>
            <p className="section-subtitle">
              Designed for every journey, built for a better planet.
            </p>
          </div>

          <div className="scooters-card-grid">
            {scooters.map((item) => (
              <div key={item.id} className="scooter-card">
                <div className="scooter-card__image-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="scooter-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="scooter-card__body">
                  <h3 className="scooter-card__name">{item.name}</h3>
                  <span className="scooter-card__tagline">{item.tagline}</span>
                  <p className="scooter-card__desc">{item.description}</p>
                  
                  {item.specs && (
                    <div className="scooter-card__specs-row">
                      <span className="scooter-spec-chip">⚡ {item.specs.range} Range</span>
                      <span className="scooter-spec-chip">🚀 {item.specs.speed}</span>
                      <span className="scooter-spec-chip">⏱️ {item.specs.charge}</span>
                    </div>
                  )}

                  <button
                    onClick={() => onOpenTestRide && onOpenTestRide(item.name)}
                    className="scooter-card__link-btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement CTA Banner */}
      <section className="movement-banner-section">
        <div className="container">
          <div className="movement-banner-card">
            <div className="movement-banner-bg-img" style={{ backgroundImage: "url('/images/rider-sustainable.jpg')" }} />
            <div className="movement-banner-overlay" />
            <div className="movement-banner-content">
              <h2 className="movement-banner-title">
                Join the Movement for a Greener Tomorrow
              </h2>
              <p className="movement-banner-subtitle">
                Switch to electric. Switch to a cleaner, smarter future.
              </p>
              <button
                onClick={onOpenVideo}
                className="btn-pill-green btn-with-play"
              >
                <span>Watch Video</span>
                <div className="play-icon-circle">
                  <Play size={14} fill="#000" color="#000" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
