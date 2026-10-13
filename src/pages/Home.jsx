import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Gauge, 
  Zap, 
  ArrowRight, 
  Play,
  Wallet,
  Wrench,
  Cpu,
  Sparkles,
  ShieldCheck,
  Check
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import TiltCard from "../components/TiltCard.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import Testimonials from "../components/Testimonials.jsx";

const initialScooters = [
  {
    id: "tepito-one",
    name: "TEPITO ONE",
    tagline: "Urban Commuter",
    description: "Stylish, efficient and perfect for city rides.",
    isPopular: false,
    colors: [
      { name: "Stealth Black", hex: "#18181b", img: "/images/tepito-one.jpg" },
      { name: "Pearl White", hex: "#f8fafc", img: "/images/scooter-city.jpg" },
      { name: "Electric Lime", hex: "#84cc16", img: "/images/tepito-max.jpg" }
    ],
    selectedColor: 0,
    specs: { range: 85, rangeSuffix: " km", speed: "55 km/h", charge: "3.2 hrs" }
  },
  {
    id: "tepito-pro",
    name: "TEPITO PRO",
    tagline: "High Performance",
    description: "More power for a smoother, premium ride.",
    isPopular: true,
    colors: [
      { name: "Pure White", hex: "#ffffff", img: "/images/tepito-pro.jpg" },
      { name: "Midnight Black", hex: "#09090b", img: "/images/tepito-one.jpg" },
      { name: "Sport Lime", hex: "#22c55e", img: "/images/tepito-max.jpg" }
    ],
    selectedColor: 0,
    specs: { range: 120, rangeSuffix: " km", speed: "75 km/h", charge: "3 hrs" }
  },
  {
    id: "tepito-max",
    name: "TEPITO MAX",
    tagline: "Long Range",
    description: "Built for longer journeys with cutting-edge tech.",
    isPopular: false,
    colors: [
      { name: "Racing Lime", hex: "#84cc16", img: "/images/tepito-max.jpg" },
      { name: "Ice White", hex: "#f1f5f9", img: "/images/hero-white-scooter.jpg" },
      { name: "Shadow Black", hex: "#18181b", img: "/images/tepito-one.jpg" }
    ],
    selectedColor: 0,
    specs: { range: 150, rangeSuffix: " km", speed: "85 km/h", charge: "2.5 hrs" }
  }
];

const whyFeatures = [
  {
    id: "eco",
    title: "Eco Friendly",
    description: "Zero emissions for a cleaner environment.",
    icon: Leaf
  },
  {
    id: "cost",
    title: "Cost Effective",
    description: "Save more on fuel and maintenance.",
    icon: Wallet
  },
  {
    id: "maintenance",
    title: "Low Maintenance",
    description: "Reliable performance with minimal service.",
    icon: Wrench
  },
  {
    id: "technology",
    title: "Smart Technology",
    description: "Modern features for a smarter ride.",
    icon: Cpu
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.12,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Home({ onOpenVideo, onOpenSpecs }) {
  const navigate = useNavigate();
  const [scooterList, setScooterList] = useState(initialScooters);

  const handleColorChange = (scooterIndex, colorIndex) => {
    setScooterList((prev) => {
      const updated = [...prev];
      updated[scooterIndex] = {
        ...updated[scooterIndex],
        selectedColor: colorIndex
      };
      return updated;
    });
  };

  const scrollToScooters = () => {
    const el = document.getElementById("our-scooters");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper home-page">
      {/* Cinematic Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} custom={0} className="section-tag">
              RIDE THE CHANGE
            </motion.span>
            
            <motion.h1 variants={fadeInUp} custom={1} className="hero-title">
              Smart Electric Mobility for a <span className="title-highlight">Cleaner Tomorrow</span>
            </motion.h1>

            <motion.p variants={fadeInUp} custom={2} className="hero-subtitle">
              Experience powerful performance, modern design and zero emissions with TEPITO EV electric scooters.
            </motion.p>

            <motion.div variants={fadeInUp} custom={3} className="hero-btn-group">
              <MagneticButton
                onClick={() => navigate("/contact")}
                className="btn-pill-green"
              >
                <span>Book a Test Ride</span>
                <span className="btn-arrow">→</span>
              </MagneticButton>

              <MagneticButton 
                onClick={scrollToScooters} 
                className="btn-pill-outline btn-with-play-outline"
              >
                <span>Explore Models</span>
                <Play size={14} className="play-icon-outline" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="hero-floating-script"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 4 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>Cleaner Greener Smarter Future</span>
            </motion.div>
            
            <div className="hero-image-container">
              <img
                src="/images/hero-white-scooter.jpg"
                alt="TEPITO EV Modern White Electric Scooter"
                className="hero-scooter-img"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Animated Performance Stats Strip */}
        <div className="container stats-bar-container">
          <motion.div 
            className="stats-pill-grid"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Leaf size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">
                  <AnimatedCounter target={100} suffix="%" />
                </span>
                <span className="stat-pill-label">Electric</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Gauge size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">
                  <AnimatedCounter target={120} suffix=" km" />
                </span>
                <span className="stat-pill-label">Range</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Zap size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">
                  <AnimatedCounter target={3} suffix=" hrs" />
                </span>
                <span className="stat-pill-label">Fast Charging</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <div className="co2-badge-icon">0</div>
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">Zero</span>
                <span className="stat-pill-label">Emissions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Ride / 3D Tilt Scooters with Color Switcher */}
      <section id="our-scooters" className="scooters-section">
        <div className="container">
          <motion.div 
            className="section-header-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">OUR SCOOTERS</span>
            <h2 className="section-title">Choose Your Ride</h2>
            <p className="section-subtitle">
              Designed for every journey, built for a better planet.
            </p>
          </motion.div>

          <div className="scooters-card-grid">
            {scooterList.map((item, idx) => {
              const activeColor = item.colors[item.selectedColor];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard 
                    className={`scooter-card ${item.isPopular ? "scooter-card--popular" : ""}`}
                    maxTilt={6}
                  >
                    {item.isPopular && (
                      <div className="popular-badge">
                        <span>Most Popular</span>
                      </div>
                    )}
                    
                    <div className="scooter-card__image-box">
                      <motion.img
                        key={activeColor.img}
                        src={activeColor.img}
                        alt={`${item.name} in ${activeColor.name}`}
                        className="scooter-card__img"
                        initial={{ opacity: 0.6, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                      />
                    </div>

                    {/* Interactive Color Selection Pills */}
                    <div className="scooter-color-selector">
                      <span className="color-label">Color: <strong>{activeColor.name}</strong></span>
                      <div className="color-dots-row">
                        {item.colors.map((c, cIdx) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => handleColorChange(idx, cIdx)}
                            className={`color-dot-btn ${item.selectedColor === cIdx ? "active" : ""}`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                            aria-label={`Select ${c.name}`}
                          >
                            {item.selectedColor === cIdx && (
                              <Check size={12} color={c.hex === "#ffffff" ? "#000" : "#fff"} strokeWidth={3} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="scooter-card__body">
                      <h3 className="scooter-card__name">{item.name}</h3>
                      <span className="scooter-card__tagline">{item.tagline}</span>

                      <div className="scooter-card__specs-row">
                        <div className="spec-item">
                          <span className="spec-val">{item.specs.range}{item.specs.rangeSuffix}</span>
                          <span className="spec-lbl">Range</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-val">{item.specs.speed}</span>
                          <span className="spec-lbl">Top Speed</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-val">{item.specs.charge}</span>
                          <span className="spec-lbl">Charging</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenSpecs ? onOpenSpecs(item) : navigate("/contact")}
                        className={item.isPopular ? "scooter-card__btn-green" : "scooter-card__btn-outline"}
                      >
                        <span>View Details</span>
                        <span className="btn-arrow">→</span>
                      </button>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Mobility Banner Section with Parallax Depth */}
      <section className="movement-banner-section">
        <div className="container">
          <motion.div 
            className="movement-banner-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="movement-banner-bg-img" 
              style={{ backgroundImage: "url('/images/rider-sustainable.jpg')" }} 
            />
            <div className="movement-banner-overlay" />
            
            <div className="movement-banner-inner">
              <div className="movement-banner-content">
                <span className="banner-tag">SUSTAINABLE MOBILITY</span>
                <h2 className="movement-banner-title">
                  A Cleaner Planet for Future Generations
                </h2>
                <p className="movement-banner-subtitle">
                  Join the movement towards sustainable mobility with TEPITO EV. Switch to electric. Switch to a better tomorrow.
                </p>
                <MagneticButton
                  onClick={onOpenVideo}
                  className="btn-pill-green btn-with-play"
                >
                  <span>Watch Our Story</span>
                  <div className="play-icon-circle">
                    <Play size={13} fill="#0b110d" color="#0b110d" />
                  </div>
                </MagneticButton>
              </div>

              {/* Right Side Sustainable Badges with micro hover */}
              <div className="movement-banner-badges">
                <div className="banner-badge-item">
                  <div className="banner-badge-icon">
                    <Leaf size={18} className="text-green" />
                  </div>
                  <div className="banner-badge-text">
                    <strong>0%</strong>
                    <span>Emissions</span>
                  </div>
                </div>

                <div className="banner-badge-item">
                  <div className="banner-badge-icon">
                    <Zap size={18} className="text-green" />
                  </div>
                  <div className="banner-badge-text">
                    <strong>100%</strong>
                    <span>Electric</span>
                  </div>
                </div>

                <div className="banner-badge-item">
                  <div className="banner-badge-icon">
                    <Sparkles size={18} className="text-green" />
                  </div>
                  <div className="banner-badge-text">
                    <strong>Greener</strong>
                    <span>Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why TEPITO EV / Built for a Better Tomorrow Section with Staggered Reveal */}
      <section className="why-tepito-section">
        <div className="container">
          <motion.div 
            className="section-header-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">WHY TEPITO EV</span>
            <h2 className="section-title">Built for a Better Tomorrow</h2>
            <p className="section-subtitle">
              More than just a ride — it's a step towards a cleaner, greener and smarter future.
            </p>
          </motion.div>

          <div className="why-features-grid">
            {whyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div 
                  key={feat.id} 
                  className="why-feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="why-feature-icon-box">
                    <IconComp size={24} className="text-green" />
                  </div>
                  <h3 className="why-feature-title">{feat.title}</h3>
                  <p className="why-feature-desc">{feat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Rider Reviews / Testimonials Section */}
      <Testimonials />
    </div>
  );
}
