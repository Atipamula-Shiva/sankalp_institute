// components/Footer.jsx
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <i className="fas fa-phone"></i>
          <span>Call: 8179118182</span>
        </div>

        <a
          href="https://www.instagram.com/sankalp_institute_srd/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <div className="footer-item">
          <i className="fas fa-graduation-cap"></i>
          <span>Sankalp Institute</span>
        </div>

        <div className="footer-item">
          <i className="fas fa-map-pin"></i>
          <span>Sai Baba Kaman</span>
        </div>

        <button
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>

      <div className="copyright">
        <span>
          <i className="far fa-copyright"></i>
          2026 Sankalp Institute. All rights reserved.
        </span>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #0f1a2b, #1a3050);
          border-top: 4px solid #c9a84c;
          padding: 1.5rem 1rem;
          width: 100%;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          border-radius: 2px;
        }

        .footer-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.8rem 1.5rem;
          width: 100%;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #d4c8bc;
          font-size: clamp(0.7rem, 1.8vw, 0.85rem);
        }

        .footer-item i {
          color: #c9a84c;
        }

        .footer-item:first-child {
          background: linear-gradient(135deg, #c9a84c, #d4b85a);
          padding: 0.3rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          color: #0f1a2b;
          box-shadow: 0 3px 15px rgba(201, 168, 76, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
        }

        .footer-item:first-child i {
          color: #0f1a2b;
        }

        .social-link {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 168, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #d4c8bc;
          font-size: 1rem;
          text-decoration: none;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #833AB4, #E1306C, #FD1D1D);
          transform: scale(1.15);
          box-shadow: 0 6px 20px rgba(225, 48, 108, 0.4);
          color: white;
          border-color: transparent;
        }

        .scroll-top {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c9a84c, #d4b85a);
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #0f1a2b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 3px 12px rgba(201, 168, 76, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: scale(0.8);
        }

        .scroll-top.visible {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }

        .scroll-top:hover {
          transform: scale(1.15);
          box-shadow: 0 8px 30px rgba(201, 168, 76, 0.4);
        }

        .copyright {
          margin-top: 1rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .copyright span {
          color: #6d7a8a;
          font-size: 0.6rem;
          opacity: 0.5;
        }

        .copyright i {
          margin-right: 3px;
        }

        @media (min-width: 640px) {
          .footer { padding: 2rem 1.5rem; }
          .footer-item { font-size: 0.85rem; }
        }

        @media (min-width: 768px) {
          .footer { padding: 2rem 2.5rem; }
          .footer-content { gap: 1.5rem 2.5rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;