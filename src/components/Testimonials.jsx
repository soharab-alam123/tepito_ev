import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle,
  Users,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Amit Verma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    location: "Hazratganj, Lucknow",
    date: "10 days ago",
    comment:
      "My daily commute used to cost me over ₹3,500 every month in petrol. With TEPITO EV, charging costs less than ₹260 a month! Instant torque, zero vibration, and the front suspension handles Lucknow potholes easily."
  },
  {
    id: 2,
    name: "Priya Srivastava",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    location: "Aliganj, Lucknow",
    date: "3 weeks ago",
    comment:
      "Remarkably agile and easy to maneuver in tight city traffic. The portable battery is a game changer — I unplug it and charge it inside my apartment in just 3 hours like a laptop!"
  },
  {
    id: 3,
    name: "Mohd. Faisal Khan",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    location: "Patanala Chowk, Lucknow",
    date: "1 month ago",
    comment:
      "I travel across Lucknow outskirts daily for business deliveries. Easily delivers true range on a single charge without any range anxiety. The showroom support team provided doorstep test rides."
  },
  {
    id: 4,
    name: "Dr. Ananya Pandey",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    location: "Gomti Nagar, Lucknow",
    date: "2 months ago",
    comment:
      "I bought TEPITO EV after comparing multiple brands. Build quality is top-notch, digital display is crisp even in bright sunlight, and the completely silent ride makes early morning hospital rounds so relaxing."
  },
  {
    id: 5,
    name: "Rajeshwar Singh",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    location: "Indiranagar, Lucknow",
    date: "2 months ago",
    comment:
      "Very comfortable seat height and broad footboard. My daughter and I both ride it comfortably. No kickstart issues or engine heating in hot Lucknow summers. Very happy with the purchase!"
  },
  {
    id: 6,
    name: "Sneha Saxena",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    location: "Mahanagar, Lucknow",
    date: "2 weeks ago",
    comment:
      "Smooth acceleration, reliable brakes, and the suspension absorbs road patches comfortably. The pickup from traffic lights is instant, seat is spacious, and charging is effortless."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch Swipe for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Gentle auto-slide every 6s when not hovering
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">
            <MessageCircle size={14} className="text-green" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
            CUSTOMER STORIES
          </span>
          <h2 className="section-title">
            Real Riders. <span className="title-highlight">Real Experiences.</span>
          </h2>
          <p className="section-subtitle">
            Hear from our community of riders who have switched to a cleaner, smarter and more affordable way to move with TEPITO EV.
          </p>
        </motion.div>

        {/* Slider Container with Navigation Arrows */}
        <div 
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="carousel-side-nav-btn prev-btn"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Slider Viewport */}
          <div 
            className="testimonials-slider-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonials-slider-track"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% + 24px) / ${visibleCount})))`,
              }}
            >
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="testimonials-slide-item"
                  style={{
                    flex: `0 0 calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                    maxWidth: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  }}
                >
                  <div className="testimonial-clean-card">
                    {/* Stars */}
                    <div className="stars-row" style={{ marginBottom: "1rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#22c55e" color="#22c55e" />
                      ))}
                    </div>

                    {/* Review Comment */}
                    <p className="testimonial-comment-body">
                      "{rev.comment}"
                    </p>

                    {/* Author Footer: Avatar, Name, Location & Date */}
                    <div className="testimonial-clean-author">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="author-avatar-img"
                        loading="lazy"
                      />
                      <div className="author-info-box">
                        <div className="author-name-row">
                          <span className="author-full-name">{rev.name}</span>
                          <CheckCircle2 size={15} className="text-green verified-tick" />
                        </div>
                        <span className="author-subtext">
                          <MapPin size={12} className="location-pin-icon" />
                          {rev.location}
                        </span>
                      </div>
                      <span className="review-date-text">{rev.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="carousel-side-nav-btn next-btn"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Bottom Pagination Dots */}
        {maxIndex > 0 && (
          <div className="testimonials-dots-wrap">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`testimonials-dot-indicator ${currentIndex === idx ? "active" : ""}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Trust Badges Strip (1,000+ Happy Riders, 4.9/5 Rating, etc.) */}
        <div className="testimonials-trust-bar">
          <div className="trust-bar-item">
            <div className="trust-bar-icon-wrap">
              <Users size={20} className="text-green" />
            </div>
            <div className="trust-bar-text">
              <strong>1,000+</strong>
              <span>Happy Riders</span>
            </div>
          </div>

          <div className="trust-bar-divider" />

          <div className="trust-bar-item">
            <div className="trust-bar-icon-wrap">
              <Sparkles size={20} className="text-green" />
            </div>
            <div className="trust-bar-text">
              <strong>4.9 / 5</strong>
              <span>Average Rating</span>
            </div>
          </div>

          <div className="trust-bar-divider" />

          <div className="trust-bar-item">
            <div className="trust-bar-icon-wrap">
              <MessageCircle size={20} className="text-green" />
            </div>
            <div className="trust-bar-text">
              <strong>Real Stories</strong>
              <span>From Real Riders</span>
            </div>
          </div>

          <div className="trust-bar-divider" />

          <div className="trust-bar-item">
            <div className="trust-bar-icon-wrap">
              <ShieldCheck size={20} className="text-green" />
            </div>
            <div className="trust-bar-text">
              <strong>Verified Buyers</strong>
              <span>Across Lucknow & UP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
