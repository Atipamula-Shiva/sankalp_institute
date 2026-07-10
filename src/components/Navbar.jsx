// components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = ({ onJoinNow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "courses", "why", "results", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (sectionElements.length === 0) {
      // If elements not found, try again after a delay
      setTimeout(() => {
        const retryElements = sections
          .map((id) => document.getElementById(id))
          .filter((el) => el !== null);
        
        if (retryElements.length > 0) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
                }
              });
            },
            { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" }
          );
          retryElements.forEach((el) => observer.observe(el));
        }
      }, 100);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementPosition + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("home")}>
        <span className="logo-text">SANKALP INSTITUTE</span>
        <span className="logo-sub">COMMITMENT · EDUCATION · LEADERSHIP</span>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {["home", "courses", "why", "results", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              {section === "contact" && <i className="fas fa-phone"></i>}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="join-btn" onClick={() => {
            setMenuOpen(false);
            onJoinNow();
          }}>
            <i className="fas fa-rocket"></i> Join Now
          </button>
        </li>
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 1rem;
          background: linear-gradient(135deg, #0f1a2b, #1a3050);
          border-bottom: 3px solid #c9a84c;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          flex-wrap: wrap;
          width: 100%;
        }

        .logo {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .logo-text {
          color: #f5e6c8;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1;
        }

        .logo-sub {
          color: #c9a84c;
          font-size: 0.4rem;
          letter-spacing: 2px;
          font-weight: 300;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
          padding: 5px;
          background: none;
          border: none;
        }

        .bar {
          width: 25px;
          height: 2px;
          background-color: #f5e6c8;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .bar.active:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .bar.active:nth-child(2) {
          opacity: 0;
        }
        .bar.active:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .nav-links {
          display: none;
          flex-direction: column;
          width: 100%;
          padding: 0.8rem 0;
          margin-top: 0.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          gap: 0.5rem;
          list-style: none;
        }

        .nav-links.open {
          display: flex;
        }

        .nav-link {
          color: #d4c8bc;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          letter-spacing: 0.3px;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .nav-link.active {
          color: #f5e6c8;
          font-weight: 700;
          border-bottom-color: #c9a84c;
        }

        .nav-link i {
          font-size: 0.8rem;
        }

        .dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #c9a84c;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .join-btn {
          background: linear-gradient(135deg, #c9a84c, #d4b85a);
          color: #0f1a2b;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 3px 15px rgba(201, 168, 76, 0.3);
          letter-spacing: 0.3px;
          text-transform: uppercase;
          width: 100%;
        }

        .join-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(201, 168, 76, 0.5);
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (min-width: 480px) {
          .logo-text { font-size: 1.3rem; }
          .logo-sub { font-size: 0.45rem; }
        }

        @media (min-width: 640px) {
          .navbar { padding: 0.8rem 1.5rem; }
          .logo-text { font-size: 1.5rem; }
          .logo-sub { font-size: 0.5rem; letter-spacing: 3px; }
          .nav-link { font-size: 0.9rem; }
        }

        @media (min-width: 768px) {
          .navbar { padding: 1rem 2rem; flex-wrap: nowrap; }
          .logo-text { font-size: 1.8rem; letter-spacing: 2px; }
          .logo-sub { font-size: 0.6rem; letter-spacing: 4px; }
          .hamburger { display: none; }
          .nav-links {
            display: flex !important;
            flex-direction: row;
            width: auto;
            padding: 0;
            margin-top: 0;
            border-top: none;
            gap: 1.5rem;
          }
          .nav-link {
            width: auto;
            padding: 0.3rem 0;
            border-bottom: 2px solid transparent;
            font-size: 0.9rem;
          }
          .nav-link.active {
            border-bottom-color: #c9a84c;
          }
          .join-btn {
            width: auto;
            padding: 0.6rem 1.5rem;
            font-size: 0.85rem;
          }
        }

        @media (min-width: 1024px) {
          .navbar { padding: 1rem 2.5rem; }
          .logo-text { font-size: 2rem; letter-spacing: 3px; }
          .logo-sub { font-size: 0.65rem; }
          .nav-links { gap: 2.5rem; }
          .nav-link { font-size: 0.95rem; }
          .join-btn { font-size: 0.95rem; padding: 0.7rem 2rem; }
        }

        @media (min-width: 1280px) {
          .navbar { padding: 1rem 3rem; }
          .logo-text { font-size: 2.2rem; }
          .nav-links { gap: 3rem; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;