import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bike, 
  CreditCard, 
  Wrench, 
  Settings, 
  Package, 
  Headphones, 
  Plus, 
  Minus, 
  ArrowRight 
} from "lucide-react";

const servicesList = [
  {
    id: 1,
    icon: Bike,
    title: "Test Ride",
    desc: "Experience our scooters before you buy.",
    action: "Book Now",
    isTestRide: true
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Easy Financing",
    desc: "Flexible payment options for everyone.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 3,
    icon: Wrench,
    title: "After Sales Support",
    desc: "Dedicated support for a hassle-free experience.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 4,
    icon: Settings,
    title: "Service & Maintenance",
    desc: "Regular service for better performance.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 5,
    icon: Package,
    title: "Spare Parts",
    desc: "Original parts for long-lasting rides.",
    action: "Learn More",
    link: "/contact"
  },
  {
    id: 6,
    icon: Headphones,
    title: "Roadside Assistance",
    desc: "Help whenever you need it.",
    action: "Learn More",
    link: "/contact"
  }
];

const faqs = [
  {
    q: "What is the range of TEPITO EV scooters?",
    a: "Depending on the model, our scooters offer between 85 km to 150 km on a single charge. The TEPITO PRO delivers an optimal 120 km certified range in real-world urban and highway conditions."
  },
  {
    q: "How long does it take to charge?",
    a: "With our smart fast-charging technology, you can get a full 0-100% charge in just 3 hours using any standard 15A wall socket. An 80% quick charge is achieved in under 2 hours."
  },
  {
    q: "Do you provide home delivery?",
    a: "Yes! Once your booking or financing is verified, our team provides doorstep scooter handover with complete feature walkthrough and helmet kit in Panipat, Haryana and nearby regions."
  },
  {
    q: "What is the warranty period?",
    a: "All TEPITO EV scooters come with a standard 3-Year / 50,000 km comprehensive warranty covering the battery pack, high-torque motor, and digital controller against manufacturing issues."
  }
];

export default function Services({ onOpenTestRide }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="page-wrapper services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-hero-content">
              <span className="section-tag">OUR SERVICES</span>
              <h1 className="page-main-title">
                Complete Support for a Smoother Ride
              </h1>
              <p className="page-main-desc">
                From test rides to maintenance, we are with you at every step of your electric journey.
              </p>
            </div>
            <div className="services-hero-img-wrap">
              <img
                src="/images/services-headlight.jpg"
                alt="TEPITO EV Dual LED Headlights"
                className="services-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-card-grid">
            {servicesList.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} className="service-card">
                  <div className="service-card__icon-wrap">
                    <Icon size={26} className="text-green" />
                  </div>
                  <h3 className="service-card__title">{svc.title}</h3>
                  <p className="service-card__desc">{svc.desc}</p>
                  {svc.isTestRide ? (
                    <button
                      onClick={() => onOpenTestRide && onOpenTestRide()}
                      className="service-card__action-btn"
                    >
                      <span>{svc.action}</span>
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <Link to={svc.link} className="service-card__action-btn">
                      <span>{svc.action}</span>
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book a Test Ride Today Banner */}
      <section className="testride-banner-section">
        <div className="container">
          <div className="testride-banner-card">
            <div className="testride-banner-text">
              <h2 className="testride-banner-title">
                Book a Test Ride Today
              </h2>
              <p className="testride-banner-desc">
                Feel the difference. Ride the future.
              </p>
              <button
                onClick={() => onOpenTestRide && onOpenTestRide("TEPITO PRO")}
                className="btn-pill-green"
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="testride-banner-visual">
              <img
                src="/images/hero-white-scooter.jpg"
                alt="Book Test Ride Scooter"
                className="testride-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-accordion-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-icon-indicator">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className={`faq-answer-wrapper ${isOpen ? "is-open" : ""}`}>
                    <div className="faq-answer-inner">
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
