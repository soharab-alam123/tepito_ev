import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bike, 
  CreditCard, 
  Wrench, 
  Settings, 
  Package, 
  Headphones, 
  Plus, 
  Minus, 
  ArrowRight,
  BatteryCharging,
  Zap,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Truck,
  Check
} from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";

const primaryServices = [
  {
    id: 1,
    icon: Bike,
    title: "Test Ride",
    desc: "Experience our scooters before you buy.",
    action: "Book Now",
    link: "/contact"
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Easy Financing",
    desc: "Flexible EMI and low-downpayment options with leading banks.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 3,
    icon: Headphones,
    title: "After Sales Support",
    desc: "Dedicated Lucknow helpdesk for hassle-free customer care.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 4,
    icon: Wrench,
    title: "Service & Maintenance",
    desc: "Periodic preventive checks and certified EV diagnostics.",
    action: "Learn More",
    link: "/contact"
  }
];

const extraServices = [
  {
    id: 5,
    icon: Package,
    title: "Genuine Spare Parts",
    desc: "Direct-from-factory parts ensuring peak longevity, safety, and 100% compatibility.",
    action: "Inquire Now",
    link: "/contact"
  },
  {
    id: 6,
    icon: Settings,
    title: "24/7 Roadside Assistance",
    desc: "Emergency breakdown towing and mobile battery assistance across Uttar Pradesh.",
    action: "Learn More",
    link: "/contact"
  }
];

const maintenanceSchedule = [
  {
    step: "01",
    interval: "1,000 km or 30 Days",
    tag: "1st Inspection • FREE",
    title: "Initial Health & Torque Check",
    items: [
      "Full electrical harness & connector diagnostics",
      "Chassis nut-bolt torque check & alignment",
      "Front & rear brake play calibration",
      "Tire pressure & tread bedding inspection"
    ]
  },
  {
    step: "02",
    interval: "5,000 km or 6 Months",
    tag: "Periodic Service • FREE",
    title: "Brake & BMS Optimization",
    items: [
      "Smart BMS computerized battery health scan",
      "Disc brake pad wear check & fluid top-up",
      "Regenerative braking efficiency testing",
      "Suspension lubrication & steering head adjustment"
    ]
  },
  {
    step: "03",
    interval: "10,000 km or 1 Year",
    tag: "Annual Comprehensive • FREE",
    title: "Full Powertrain Diagnostics",
    items: [
      "BLDC Hub Motor bearing & seal audit",
      "Battery State of Health (SOH) performance report",
      "Throttle sensor & controller telemetry calibration",
      "Complete water-resistance weather seal check"
    ]
  }
];

const warrantyShield = [
  {
    icon: BatteryCharging,
    period: "3 Years / 50,000 KM",
    title: "Lithium Battery & Smart BMS",
    desc: "100% replacement warranty against manufacturing faults and abnormal capacity drop."
  },
  {
    icon: Zap,
    period: "3 Years / Unlimited KM",
    title: "BLDC Motor & Controller",
    desc: "Full coverage for electric motor stator, rotor, controller unit, and main wiring harness."
  },
  {
    icon: ShieldCheck,
    period: "1 Year Comprehensive",
    title: "Fast Charger & Speedometer",
    desc: "Portable smart fast-charger, digital display instrument cluster, and electronic sensors."
  },
  {
    icon: CheckCircle2,
    period: "First 3 Scheduled Visits",
    title: "Complimentary Free Labor",
    desc: "Zero labor charge on your first 3 periodic scheduled maintenance services at our workshop."
  }
];

const faqs = [
  {
    q: "What is the certified range of TEPITO EV scooters?",
    a: "Depending on the model, our scooters offer between 85 km to 150 km per charge. The TEPITO PRO delivers 120 km certified range in mixed city and highway traffic."
  },
  {
    q: "How long does it take to charge the battery?",
    a: "With our smart fast-charging portable charger, a full 0-100% charge takes only 3 hours on any standard 15A domestic socket. A quick 80% charge takes under 2 hours."
  },
  {
    q: "Where is TEPITO EV manufactured and serviced?",
    a: "TEPITO EV is proudly headquartered and engineered in Lucknow, Uttar Pradesh. We offer full showroom, test ride, service, and spare parts support right here at Patanala Chowk, Lucknow."
  },
  {
    q: "What warranty coverage do you provide?",
    a: "Every TEPITO EV scooter is backed by a 3-Year / 50,000 km comprehensive warranty covering the lithium battery pack, brushless motor, and electronic powertrain."
  },
  {
    q: "Do you offer doorstep pickup and drop for servicing in Lucknow?",
    a: "Yes! For riders in Lucknow, we offer convenient doorstep pickup and delivery for routine servicing, tire replacements, and battery diagnostics."
  }
];

export default function Services() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const WHATSAPP_SERVICE_URL = "https://wa.me/919876543210?text=Hello%20TEPITO%20EV%2C%20I%20would%20like%20to%20book%20a%20service%20appointment%20for%20my%20scooter.";

  return (
    <div className="page-wrapper services-page">
      {/* Hero Section with Motion */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-grid">
            <motion.div 
              className="services-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-tag">OUR SERVICES</span>
              <h1 className="page-main-title">
                Complete Support for a Smoother Ride
              </h1>
              <p className="page-main-desc">
                From doorstep servicing to nationwide warranty, we are with you at every step of your electric journey with zero maintenance headaches.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <MagneticButton
                  onClick={() => navigate("/contact")}
                  className="btn-pill-green"
                >
                  <span>Book a Test Ride</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>

                <a 
                  href={WHATSAPP_SERVICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <MessageCircle size={17} className="text-green" />
                  <span>Service on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="services-hero-img-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/services-headlight.jpg"
                alt="TEPITO EV Service and Maintenance"
                className="services-hero-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Primary Service Cards */}
      <section className="services-primary-section">
        <div className="container">
          <div className="services-4card-grid">
            {primaryServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div 
                  key={svc.id} 
                  className="service-card-clean"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="service-card-clean__icon-wrap">
                    <Icon size={24} className="text-green" />
                  </div>
                  <h3 className="service-card-clean__title">{svc.title}</h3>
                  <p className="service-card-clean__desc">{svc.desc}</p>
                  
                  <Link to={svc.link || "/contact"} className="service-card-clean__link-btn">
                    <span>{svc.action}</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Support & Facilities */}
      <section className="services-extra-section">
        <div className="container">
          <div className="services-extra-grid">
            {extraServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div 
                  key={svc.id} 
                  className="service-extra-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="service-card-clean__icon-wrap">
                    <Icon size={24} className="text-green" />
                  </div>
                  <div className="service-extra-body">
                    <h4 className="service-extra-title">{svc.title}</h4>
                    <p className="service-extra-desc">{svc.desc}</p>
                    <Link to={svc.link} className="service-card-clean__link-btn" style={{ marginTop: "0.5rem", display: "inline-flex" }}>
                      <span>{svc.action}</span>
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Transparent EV Maintenance Schedule */}
      <section className="services-maintenance-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">TRANSPARENT CARE</span>
            <h2 className="section-title">Simplified Maintenance Schedule</h2>
            <p className="section-subtitle">
              No engine oil changes, no spark plugs, no clutch wear. Enjoy 80% lower routine maintenance costs compared to petrol two-wheelers.
            </p>
          </div>

          <div className="maintenance-schedule-grid">
            {maintenanceSchedule.map((plan, idx) => (
              <motion.div
                key={idx}
                className="maintenance-plan-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="maintenance-card-top">
                  <span className="plan-step-num">{plan.step}</span>
                  <span className="plan-tag-pill">{plan.tag}</span>
                </div>
                <span className="plan-interval-text">{plan.interval}</span>
                <h3 className="plan-title">{plan.title}</h3>

                <ul className="plan-checklist">
                  {plan.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="plan-checklist-item">
                      <Check size={16} className="text-green plan-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: TEPITO Shield Warranty Breakdown */}
      <section className="services-warranty-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">TEPITO SHIELD</span>
            <h2 className="section-title">Comprehensive Warranty Protection</h2>
            <p className="section-subtitle">
              Ride with absolute peace of mind. Every scooter is backed by comprehensive manufacturer coverage and genuine spare replacement.
            </p>
          </div>

          <div className="warranty-shield-grid">
            {warrantyShield.map((w, idx) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={idx}
                  className="warranty-shield-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="warranty-icon-wrap">
                    <Icon size={24} className="text-green" />
                  </div>
                  <span className="warranty-period-pill">{w.period}</span>
                  <h3 className="warranty-card-title">{w.title}</h3>
                  <p className="warranty-card-desc">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Doorstep Lucknow Pickup & Roadside Assistance Banner */}
      <section className="services-doorstep-section">
        <div className="container">
          <div className="doorstep-banner-card">
            <div className="doorstep-content">
              <span className="section-tag" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)" }}>
                DOORSTEP SERVICE & 24/7 HELPLINE
              </span>
              <h2 className="doorstep-title">
                Service Delivered at Your Doorstep in Lucknow
              </h2>
              <p className="doorstep-desc">
                Don't have time to visit our workshop? Book a doorstep inspection or schedule scooter pickup & delivery anywhere across Lucknow. For unexpected on-road emergencies, our breakdown support team is just a call away.
              </p>

              <div className="doorstep-features-row">
                <div className="doorstep-pill">
                  <Truck size={18} className="text-green" />
                  <span>Free Pickup & Drop within 15 km</span>
                </div>
                <div className="doorstep-pill">
                  <PhoneCall size={18} className="text-green" />
                  <span>Helpline: +91 98765 43210</span>
                </div>
              </div>

              <div className="doorstep-actions">
                <a 
                  href={WHATSAPP_SERVICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-green"
                >
                  <span>Book Service on WhatsApp</span>
                  <span className="btn-arrow">→</span>
                </a>

                <MagneticButton 
                  onClick={() => navigate("/contact")}
                  className="btn-pill-outline btn-outline-white"
                >
                  <span>Schedule via Form</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated FAQ Accordion */}
      <section className="services-faq-section">
        <div className="container">
          <motion.div 
            className="section-header-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">GOT QUESTIONS?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about charging, warranty, range, and servicing.
            </p>
          </motion.div>

          <div className="faq-accordion-box">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div 
                  key={idx} 
                  className={`faq-row-item ${isOpen ? "faq-row-item--open" : ""}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <div className="faq-toggle-circle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        className="faq-answer-drawer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="faq-answer-text">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
