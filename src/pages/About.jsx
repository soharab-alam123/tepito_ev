import { Link } from "react-router-dom";
import { Target, Eye, Leaf, ArrowRight } from "lucide-react";

export default function About({ onOpenTestRide }) {
  return (
    <div className="page-wrapper about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="section-tag">ABOUT TEPITO EV</span>
              <h1 className="page-main-title">
                Driven by a Cleaner Future
              </h1>
              <p className="page-main-desc">
                At TEPITO EV, we believe in a cleaner, smarter and more sustainable world.
                Our electric scooters are designed to make everyday travel easier, greener
                and more enjoyable.
              </p>
            </div>
            <div className="about-hero-img-wrap">
              <img
                src="/images/about-showroom.jpg"
                alt="TEPITO EV Showroom"
                className="about-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row (4 stats) */}
      <section className="about-metrics-section">
        <div className="container">
          <div className="about-metrics-grid">
            <div className="about-metric-card">
              <span className="metric-number">10K+</span>
              <span className="metric-label">Happy Riders</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">50+</span>
              <span className="metric-label">Cities</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">100%</span>
              <span className="metric-label">Electric</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-number">0</span>
              <span className="metric-label">Emissions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-image-wrap">
              <img
                src="/images/rider-story.jpg"
                alt="TEPITO EV Rider Exploring Nature"
                className="story-img"
              />
            </div>
            <div className="story-content-wrap">
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title">
                A Passion for Sustainable Mobility
              </h2>
              <p className="story-paragraph">
                TEPITO EV was founded with a simple vision — to create smarter electric
                mobility solutions for a cleaner tomorrow. We combine innovation, design
                and technology to build scooters that are stylish, reliable and
                environment friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars / Mission, Vision, Values */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-circle">
                <Target size={24} className="text-green" />
              </div>
              <h3 className="pillar-title">Our Mission</h3>
              <p className="pillar-desc">
                To make electric mobility accessible for everyone.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-circle">
                <Eye size={24} className="text-green" />
              </div>
              <h3 className="pillar-title">Our Vision</h3>
              <p className="pillar-desc">
                A cleaner and greener planet for future generations.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-circle">
                <Leaf size={24} className="text-green" />
              </div>
              <h3 className="pillar-title">Our Values</h3>
              <p className="pillar-desc">
                Innovation, sustainability and customer first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability in Every Ride */}
      <section className="sustainability-section">
        <div className="container">
          <div className="sustainability-card">
            <div className="sustainability-bg-img" style={{ backgroundImage: "url('/images/rider-sustainable.jpg')" }} />
            <div className="sustainability-overlay" />
            <div className="sustainability-content">
              <h2 className="sustainability-title">
                Sustainability in Every Ride
              </h2>
              <p className="sustainability-desc">
                We are committed to reducing carbon emissions and building a cleaner, healthier environment for everyone.
              </p>
              <Link to="/services" className="btn-pill-green">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
