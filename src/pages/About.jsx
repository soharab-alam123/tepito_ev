import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Sparkles, 
  ArrowRight,
  BatteryCharging,
  Cpu,
  Wrench,
  ShieldCheck,
  Award,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

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

const MAP_URL = "https://www.google.com/maps/search/H.NO.+2358-38+GALI+SHACHHADA+PATANALA+CHOWK,+LUCKNOW,+UTTAR+PRADESH+%E2%80%93+226003/@26.8613744,80.8853119,13z";

const whyUsFeatures = [
  {
    icon: BatteryCharging,
    title: "Portable Smart Battery",
    desc: "Charge anywhere like a smartphone. Detachable high-density lithium pack with 3-hour fast charging from any regular 5A socket."
  },
  {
    icon: Cpu,
    title: "High-Torque Powertrain",
    desc: "Whisper-quiet, high-efficiency BLDC motor engineered for instant throttle response and effortless overtaking in city traffic."
  },
  {
    icon: Wrench,
    title: "Built for Indian Terrains",
    desc: "Heavy-duty hydraulic telescopic suspension, reinforced high-tensile steel frame, and high ground clearance for Lucknow roads."
  },
  {
    icon: ShieldCheck,
    title: "Local UP Support Network",
    desc: "Direct headquarters at Patanala Chowk, Lucknow ensuring doorstep service, genuine spare parts, and certified technician support."
  }
];

const milestones = [
  {
    year: "2022",
    title: "Official Incorporation",
    desc: "TEPITO EV was incorporated in Lucknow, Uttar Pradesh (CIN: U47912UP2022PTC173748 • GSTIN: 09AAQCM3723K1ZZ • PAN: AAQCM3723K) with a bold mission: accessible, high-efficiency electric mobility for everyday Indians."
  },
  {
    year: "2023",
    title: "R&D & Stress Testing",
    desc: "Over 50,000 km of rigorous road testing across Uttar Pradesh weather extremes, perfecting portable fast-charging batteries and license-free low-speed compliance."
  },
  {
    year: "2024",
    title: "Dual Lucknow Centers Launch",
    desc: "Opened our premier customer experience hubs at Patanala Chowk (Registered Office) and Balaganj Campbell Road (Additional Service Hub) for direct sales, test rides, and warranty."
  },
  {
    year: "Today",
    title: "10,000+ Happy Riders",
    desc: "Rapidly expanding community of daily commuters saving over ₹35,000/year on fuel while preserving the environment with zero emissions."
  }
];

const certifications = [
  {
    icon: Award,
    title: "ARAI Certified",
    subtitle: "Complete road safety & regulatory compliance"
  },
  {
    icon: ShieldCheck,
    title: "IP67 Water Resistant",
    subtitle: "Weatherproof battery pack & electricals"
  },
  {
    icon: CheckCircle2,
    title: "100% Street Legal",
    subtitle: "RTO registered with govt subsidy support"
  },
  {
    icon: Clock,
    title: "3 Years / 50,000 KM",
    subtitle: "Comprehensive warranty on battery & motor"
  }
];

export default function About() {
  const navigate = useNavigate();

  const scrollToStory = () => {
    const el = document.getElementById("our-story-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper about-page">
      {/* Hero Section with Motion */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <motion.div 
              className="about-hero-content"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.span variants={fadeInUp} custom={0} className="section-tag">
                ABOUT TEPITO EV
              </motion.span>
              <motion.h1 variants={fadeInUp} custom={1} className="page-main-title">
                Driven by a Cleaner Future
              </motion.h1>
              <motion.p variants={fadeInUp} custom={2} className="page-main-desc">
                At TEPITO EV, we believe in a greener, smarter and more sustainable India.
                Based in Lucknow, we design and build electric scooters that combine innovation,
                reliability and style for everyday riders.
              </motion.p>
              <motion.div variants={fadeInUp} custom={3} className="about-hero-btn-group">
                <MagneticButton onClick={scrollToStory} className="btn-pill-green">
                  <span>Our Story</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div 
              className="about-hero-img-wrap"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/about-showroom.jpg"
                alt="TEPITO EV Showroom Lucknow"
                className="about-hero-img"
              />
              
              {/* Made in Lucknow Badge with float effect */}
              <motion.div 
                className="made-in-lucknow-badge"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="badge-text-group">
                  <span className="badge-line-1">Made in Lucknow</span>
                  <span className="badge-line-2">Built for India</span>
                  <span className="badge-line-3">For a Cleaner Tomorrow</span>
                </div>
                <div className="badge-india-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="india-svg" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(34,197,94,0.15)" />
                    <circle cx="12" cy="9" r="2.5" fill="#22c55e" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Row (4 stats with AnimatedCounter) */}
      <section className="about-metrics-section">
        <div className="container">
          <motion.div 
            className="about-metrics-grid"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-metric-card">
              <span className="metric-number">
                <AnimatedCounter target={10} suffix="K+" />
              </span>
              <span className="metric-label">Happy Riders</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">
                <AnimatedCounter target={50} suffix="+" />
              </span>
              <span className="metric-label">Cities Covered</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">
                <AnimatedCounter target={100} suffix="%" />
              </span>
              <span className="metric-label">Electric Powered</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">
                0
              </span>
              <span className="metric-label">Tailpipe Emissions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars in Sleek Dark Container with Staggered Entrance */}
      <section className="about-pillars-dark-section">
        <div className="container">
          <motion.div 
            className="pillars-dark-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pillars-dark-grid">
              <motion.div 
                className="pillar-dark-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="pillar-dark-icon-wrap">
                  <Target size={24} className="text-green" />
                </div>
                <h3 className="pillar-dark-title">Our Mission</h3>
                <p className="pillar-dark-desc">
                  To make electric mobility accessible, reliable, and affordable for every Indian.
                </p>
              </motion.div>

              <motion.div 
                className="pillar-dark-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="pillar-dark-icon-wrap">
                  <Eye size={24} className="text-green" />
                </div>
                <h3 className="pillar-dark-title">Our Vision</h3>
                <p className="pillar-dark-desc">
                  A cleaner and greener India with zero emission commutes for future generations.
                </p>
              </motion.div>

              <motion.div 
                className="pillar-dark-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="pillar-dark-icon-wrap">
                  <Heart size={24} className="text-green" />
                </div>
                <h3 className="pillar-dark-title">Our Values</h3>
                <p className="pillar-dark-desc">
                  Innovation, customer first philosophy, and uncompromising engineering quality.
                </p>
              </motion.div>

              <motion.div 
                className="pillar-dark-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="pillar-dark-icon-wrap">
                  <Sparkles size={24} className="text-green" />
                </div>
                <h3 className="pillar-dark-title">Our Impact</h3>
                <p className="pillar-dark-desc">
                  Saving millions of liters of petrol and reducing CO2 emissions every single day.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section with Scroll Reveal */}
      <section id="our-story-section" className="about-story-section">
        <div className="container">
          <div className="story-split-grid">
            <motion.div 
              className="story-image-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/rider-story.jpg"
                alt="TEPITO EV Rider Exploring Nature"
                className="story-img"
              />
            </motion.div>

            <motion.div 
              className="story-content-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title">
                A Passion for Sustainable Mobility
              </h2>
              <p className="story-paragraph">
                TEPITO EV was founded with a clear, ambitious mission — to accelerate India’s shift toward sustainable, accessible, and thrilling electric mobility. Designed and assembled in Uttar Pradesh, our scooters are purpose-built for Indian road conditions, offering unmatched reliability, smart battery technology, and zero tailpipe emissions.
              </p>
              <p className="story-paragraph">
                Whether you commute every day through bustling city traffic or explore weekend highways, TEPITO EV delivers quiet confidence, effortless acceleration, and exceptional cost savings every single kilometer.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <MagneticButton
                  onClick={() => navigate("/contact")}
                  className="btn-pill-green"
                >
                  <span>Book a Test Ride</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Engineering & Tech Highlights ("Why Choose TEPITO EV") */}
      <section className="about-tech-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">ENGINEERED FOR INDIA</span>
            <h2 className="section-title">Why Riders Choose TEPITO EV</h2>
            <p className="section-subtitle">
              Built from the ground up to solve daily Indian commuting challenges with cutting-edge EV technology and local service reliability.
            </p>
          </div>

          <div className="about-tech-grid">
            {whyUsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-tech-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="about-tech-icon-wrap">
                    <Icon size={24} className="text-green" />
                  </div>
                  <h3 className="about-tech-title">{feat.title}</h3>
                  <p className="about-tech-desc">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Company Milestones / Our Journey Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">OUR JOURNEY</span>
            <h2 className="section-title">Milestones That Define Us</h2>
            <p className="section-subtitle">
              From our incorporation in Lucknow to empowering thousands of daily commuters across Uttar Pradesh.
            </p>
          </div>

          <div className="timeline-horizontal-track">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="timeline-badge-wrap">
                  <span className="timeline-year-badge">{item.year}</span>
                  <div className="timeline-dot-pin" />
                </div>
                <h3 className="timeline-card-title">{item.title}</h3>
                <p className="timeline-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Certifications & Trust Badges Strip */}
      <section className="about-certifications-section">
        <div className="container">
          <div className="certifications-bar">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div key={idx} className="cert-item">
                  <div className="cert-icon-circle">
                    <Icon size={22} className="text-green" />
                  </div>
                  <div className="cert-text-wrap">
                    <span className="cert-title">{cert.title}</span>
                    <span className="cert-subtitle">{cert.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Flagship Showroom Experience Center CTA Card */}
      <section className="about-showroom-cta-section">
        <div className="container">
          <div className="showroom-invite-card">
            <div className="showroom-invite-content">
              <span className="section-tag" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)" }}>
                VISIT US IN LUCKNOW
              </span>
              <h2 className="showroom-invite-title">
                Experience TEPITO EV in Person
              </h2>
              <p className="showroom-invite-desc">
                Visit our customer experience and service centers in Lucknow. Test ride our complete lineup of No-License and Long-Range electric scooters, and discover zero-emission commuting.
              </p>

              <div className="showroom-invite-details" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div className="detail-item">
                  <MapPin size={18} className="text-green" />
                  <span><strong>Registered ®️ Office:</strong> H.N. 2358/38 Gali Shachhada, Patanala Chowk, Lucknow – 226003</span>
                </div>
                <div className="detail-item">
                  <MapPin size={18} className="text-green" />
                  <span><strong>Additional Office:</strong> 431/310 N Momin Nagar, Campbell Rd, Balaganj, Lucknow – 226003</span>
                </div>
                <div className="detail-item">
                  <Clock size={18} className="text-green" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="showroom-invite-actions">
                <MagneticButton 
                  onClick={() => navigate("/contact")} 
                  className="btn-pill-green"
                >
                  <span>Book a Test Ride</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>

                <a 
                  href={MAP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-pill-outline btn-outline-white"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
