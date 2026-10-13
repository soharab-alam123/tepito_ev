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
  Check,
  CheckCircle2,
  FileCheck,
  BatteryCharging,
  Fuel,
  ArrowUpRight,
  TrendingDown,
  ShoppingBag
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import TiltCard from "../components/TiltCard.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import Testimonials from "../components/Testimonials.jsx";

const initialScooters = [
  {
    id: "tepito-one",
    name: "TEPITO ONE",
    category: "no-license",
    tagline: "Urban Commuter • No License Series",
    description: "Designed for city rides, students & families. Zero driving license and zero RTO registration required.",
    isPopular: false,
    licenseBadge: "⚡ NO LICENSE REQUIRED",
    licenseSub: "100% Street Legal • CMVR Exempt",
    colors: [
      { name: "Stealth Black", hex: "#18181b", img: "/images/tepito-one.jpg" },
      { name: "Pearl White", hex: "#f8fafc", img: "/images/scooter-city.jpg" },
      { name: "Electric Lime", hex: "#84cc16", img: "/images/tepito-max.jpg" }
    ],
    selectedColor: 0,
    specs: { range: 85, rangeSuffix: " km", speed: "25 km/h", charge: "3.2 hrs" }
  },
  {
    id: "tepito-pro",
    name: "TEPITO PRO",
    category: "high-speed",
    tagline: "High Performance • City & Highway",
    description: "Spirited acceleration and heavy-duty chassis built for longer commutes with fast highway performance.",
    isPopular: true,
    licenseBadge: "🚀 HIGH SPEED PRO",
    licenseSub: "75 km/h Top Speed • 120 km Range",
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
    category: "high-speed",
    tagline: "Ultra Long Range • Touring Series",
    description: "Maximum endurance with an ultra-high capacity battery for long daily rides and zero range anxiety.",
    isPopular: false,
    licenseBadge: "⭐ 150 KM ULTRA RANGE",
    licenseSub: "85 km/h Top Speed • 3.6 kWh Pack",
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
    title: "100% Eco-Friendly",
    description: "Zero tailpipe emissions and clean quiet operation for fresh Indian cities.",
    icon: Leaf
  },
  {
    id: "cost",
    title: "₹0.15 / KM Running Cost",
    description: "Save over ₹35,000 every year compared to petrol scooters.",
    icon: Wallet
  },
  {
    id: "maintenance",
    title: "Minimal Maintenance",
    description: "No engine oil, spark plugs, or clutch plates to replace. Low recurring costs.",
    icon: Wrench
  },
  {
    id: "technology",
    title: "Smart Fast Charging",
    description: "Detachable lithium pack charges from any regular 5A home socket in 3 hours.",
    icon: Cpu
  }
];

const noLicenseReasons = [
  {
    icon: FileCheck,
    title: "No Driving License Required",
    desc: "Under Central Motor Vehicles Rules (CMVR), electric two-wheelers with a top speed capped at 25 km/h and 250W BLDC motor do not require a driving license. Ideal for students (16+), homemakers, and seniors."
  },
  {
    icon: ShieldCheck,
    title: "Zero RTO Registration & No Road Tax",
    desc: "Skip long lines at RTO offices, documentation hassles, and high registration taxes. No number plate delay — drive home your TEPITO EV on the exact day of purchase."
  },
  {
    icon: BatteryCharging,
    title: "Detachable 5A Home Charging",
    desc: "No dedicated EV charger needed. Simply carry the lightweight portable battery to your home or office desk and plug into any ordinary 5A mobile switch socket. 0 to 100% in 3 hours."
  },
  {
    icon: Fuel,
    title: "15 Paise / KM vs ₹2.60 Petrol",
    desc: "A full battery charge consumes approximately 1.2 electricity units (~₹10) for 85 km. That means you save up to ₹3,000+ every single month on daily commutes."
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
  const [dailyKm, setDailyKm] = useState(30);

  const heroColors = [
    { name: "Pearl White", hex: "#ffffff", label: "Pearl White", img: "/images/hero-white-scooter.jpg" },
    { name: "Stealth Black", hex: "#18181b", label: "Stealth Black", img: "/images/tepito-one.jpg" },
    { name: "Electric Lime", hex: "#22c55e", label: "Electric Lime", img: "/images/tepito-max.jpg" }
  ];
  const [heroColorIdx, setHeroColorIdx] = useState(0);
  const activeHeroColor = heroColors[heroColorIdx];

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

  // Calculate annual savings
  const yearlyPetrolCost = Math.round(dailyKm * 365 * 2.62);
  const yearlyEvCost = Math.round(dailyKm * 365 * 0.14);
  const yearlySavings = yearlyPetrolCost - yearlyEvCost;

  return (
    <div className="page-wrapper home-page">
      {/* Cinematic Hero Section with High-Attraction Hooks & Interactive Previews */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} custom={0} className="section-tag hero-search-tag">
              ⚡ BEST ELECTRIC SCOOTERS IN INDIA • NO LICENSE REQUIRED
            </motion.span>
            
            <motion.h1 variants={fadeInUp} custom={1} className="hero-title">
              Ride Smart with India's Best EV Scooters — <span className="title-highlight">No License Required</span>
            </motion.h1>

            <motion.p variants={fadeInUp} custom={2} className="hero-subtitle">
              Experience zero petrol costs, zero emissions, and zero RTO registration paperwork. Enjoy 85–150 km certified range, 3-hour portable home charging, and just ₹0.15/km running cost with TEPITO EV.
            </motion.p>

            {/* High-Attraction Key Benefit Pills */}
            <motion.div variants={fadeInUp} custom={2.5} className="hero-attraction-pills">
              <span className="hero-pill-item">
                <CheckCircle2 size={16} className="text-green" />
                <strong>No License Required</strong> (City Series)
              </span>
              <span className="hero-pill-item">
                <CheckCircle2 size={16} className="text-green" />
                <strong>Zero RTO Paperwork</strong>
              </span>
              <span className="hero-pill-item">
                <CheckCircle2 size={16} className="text-green" />
                <strong>Portable Home Charging</strong>
              </span>
              <span className="hero-pill-item">
                <CheckCircle2 size={16} className="text-green" />
                <strong>Save ₹35,000+/Year</strong>
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} custom={3} className="hero-btn-group">
              <MagneticButton
                onClick={() => navigate("/contact")}
                className="btn-pill-green"
              >
                <span>Book a Test Ride Free</span>
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
            {/* Ambient Radial Energy Glow */}
            <div className="hero-ambient-glow" />

            {/* Interactive Floating Badge Chips */}
            <motion.div 
              className="hero-floating-stat top-left"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="stat-chip-icon">
                <ShieldCheck size={16} className="text-green" />
              </div>
              <div className="stat-chip-text">
                <strong>0 RTO Hassle</strong>
                <span>No License Needed</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-floating-stat top-right"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div className="stat-chip-icon">
                <Zap size={16} className="text-green" />
              </div>
              <div className="stat-chip-text">
                <strong>150 KM Range</strong>
                <span>Fast Home Charging</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-floating-script"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 4 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>No License • 0 Petrol • 100% Savings</span>
            </motion.div>
            
            <div className="hero-image-container">
              <motion.img
                key={activeHeroColor.img}
                src={activeHeroColor.img}
                alt={`TEPITO EV Electric Scooter in ${activeHeroColor.name}`}
                className="hero-scooter-img"
                initial={{ opacity: 0.7, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                loading="eager"
              />
            </div>

            {/* Interactive Hero Color Dock */}
            <div className="hero-color-dock">
              <span className="hero-color-dock-label">
                Color: <strong>{activeHeroColor.label}</strong>
              </span>
              <div className="hero-color-dots">
                {heroColors.map((c, i) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setHeroColorIdx(i)}
                    className={`hero-color-dot ${heroColorIdx === i ? "active" : ""}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    aria-label={`Select ${c.name}`}
                  >
                    {heroColorIdx === i && (
                      <Check size={11} color={c.hex === "#ffffff" ? "#000" : "#fff"} strokeWidth={3} />
                    )}
                  </button>
                ))}
              </div>
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
                <span className="stat-pill-label">Electric (0 Petrol)</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Gauge size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">
                  <AnimatedCounter target={150} suffix=" km" />
                </span>
                <span className="stat-pill-label">Max Range</span>
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
                <span className="stat-pill-label">Fast Home Charging</span>
              </div>
            </div>

            <div className="stat-pill-card">
              <div className="stat-pill-icon-wrap">
                <Wallet size={22} className="text-green" />
              </div>
              <div className="stat-pill-info">
                <span className="stat-pill-value">₹0.15</span>
                <span className="stat-pill-label">Running Cost / KM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: High-Conversion "Why India Loves No-License EV Scooters" Section */}
      <section className="no-license-highlight-section">
        <div className="container">
          <motion.div 
            className="section-header-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">INDIA'S COMMUTER REVOLUTION</span>
            <h2 className="section-title">Why Riders Choose No-License Electric Scooters</h2>
            <p className="section-subtitle">
              Enjoy pure freedom without test queues, RTO tax, or expensive petrol prices.
            </p>
          </motion.div>

          <div className="no-license-reasons-grid">
            {noLicenseReasons.map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <motion.div 
                  key={reason.title}
                  className="no-license-reason-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="reason-icon-wrap">
                    <IconComponent size={24} className="text-green" />
                  </div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-desc">{reason.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose Your Ride / 3D Tilt Scooters with Category Filter & Color Switcher */}
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
                    {item.isPopular ? (
                      <div className="popular-badge">
                        <span>Most Popular</span>
                      </div>
                    ) : item.category === "no-license" ? (
                      <div className="popular-badge" style={{ backgroundColor: "#22c55e", color: "#000000" }}>
                        <span>No License Needed</span>
                      </div>
                    ) : null}
                    
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

      {/* NEW: Interactive Petrol vs TEPITO EV Savings Calculator */}
      <section className="savings-calc-section">
        <div className="container">
          <div className="savings-calc-card">
            <div className="savings-calc-left">
              <span className="section-tag">SAVINGS CALCULATOR</span>
              <h2 className="calc-title">How Much Will You Save?</h2>
              <p className="calc-desc">
                Calculate your exact savings by switching from an expensive petrol scooter to a TEPITO EV.
              </p>

              <div className="slider-box" style={{ marginTop: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <label htmlFor="dailyKmSlider" style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                    Daily Commute Distance:
                  </label>
                  <span className="slider-val-badge">
                    <strong>{dailyKm}</strong> km / day
                  </span>
                </div>
                <input
                  id="dailyKmSlider"
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.35rem" }}>
                  <span>10 km</span>
                  <span>45 km</span>
                  <span>80 km</span>
                </div>

                {/* Quick Presets */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Quick Pick:</span>
                  {[15, 30, 45, 60].map((km) => (
                    <button
                      key={km}
                      type="button"
                      onClick={() => setDailyKm(km)}
                      className={`calc-preset-chip ${dailyKm === km ? "active" : ""}`}
                    >
                      {km} km
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="savings-calc-right">
              <div className="savings-stat-box petrol-box">
                <span className="stat-label">Petrol Scooter Cost / Year</span>
                <span className="stat-amount red-amount">₹ {yearlyPetrolCost.toLocaleString("en-IN")}</span>
                <span className="stat-note">Based on ₹105/L & 40 km/L</span>
              </div>

              <div className="savings-stat-box ev-box">
                <span className="stat-label">TEPITO EV Electricity Cost / Year</span>
                <span className="stat-amount green-amount">₹ {yearlyEvCost.toLocaleString("en-IN")}</span>
                <span className="stat-note">Based on ₹0.14/km charging cost</span>
              </div>

              {/* Visual Cost Reduction Bar */}
              <div style={{ padding: "0.75rem 1rem", backgroundColor: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", fontWeight: 700, marginBottom: "6px" }}>
                  <span style={{ color: "#ef4444" }}>Petrol: 100%</span>
                  <span style={{ color: "#16a34a" }}>TEPITO EV: Only ~5% Cost</span>
                </div>
                <div style={{ height: "8px", width: "100%", backgroundColor: "#fee2e2", borderRadius: "9999px", overflow: "hidden" }}>
                  <motion.div 
                    style={{ height: "100%", backgroundColor: "#22c55e", borderRadius: "9999px" }}
                    animate={{ width: `${Math.max(5, Math.round((yearlyEvCost / yearlyPetrolCost) * 100))}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="savings-total-banner">
                <div className="total-icon-wrap">
                  <TrendingDown size={28} className="text-green" />
                </div>
                <div>
                  <span className="total-label">YOU SAVE EVERY YEAR:</span>
                  <span className="total-amount">₹ {yearlySavings.toLocaleString("en-IN")}*</span>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#86efac", marginTop: "2px" }}>
                    🎉 Equal to ~350 Litres of petrol saved!
                  </span>
                </div>
              </div>

              <MagneticButton
                onClick={() => navigate("/contact")}
                className="btn-pill-green btn-block"
                style={{ justifyContent: "center", marginTop: "1rem" }}
              >
                <span>Start Saving — Book Test Ride</span>
                <span className="btn-arrow">→</span>
              </MagneticButton>
            </div>
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

      {/* Tepito Ecosystem Cross-Promotion Card (Pure Clean White Theme) */}
      <section className="ecosystem-banner-section" style={{ padding: "4rem 0", backgroundColor: "var(--bg-surface)" }}>
        <div className="container">
          <div 
            className="ecosystem-card-box" 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "var(--radius-xl)", 
              padding: "3.2rem", 
              display: "flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              justifyContent: "space-between", 
              gap: "2.5rem", 
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-md)"
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span 
                className="section-tag" 
                style={{ 
                  color: "#15803d", 
                  borderColor: "#86efac", 
                  backgroundColor: "#f0fdf4",
                  fontWeight: 800
                }}
              >
                TEPITO BRAND ECOSYSTEM
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 900, marginTop: "0.6rem", marginBottom: "0.6rem", color: "#0f172a", letterSpacing: "-0.02em" }}>
                One Brand. Two Powerful Destinations.
              </h3>
              <p style={{ color: "#475569", fontSize: "0.98rem", lineHeight: 1.65 }}>
                Experience clean, smart electric mobility at <strong>tepito.co.in</strong>, and explore our official online shopping store for premium electronics and lifestyle products at <strong>tepito.in</strong>.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://tepito.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-green"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <ShoppingBag size={17} />
                <span>Shop at tepito.in</span>
                <span className="btn-arrow">↗</span>
              </a>
              <button
                onClick={scrollToScooters}
                className="btn-pill-outline"
              >
                <span>Explore Scooters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Rider Reviews / Testimonials Section */}
      <Testimonials />
    </div>
  );
}
