// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="badge">
        <i className="fas fa-graduation-cap"></i>
        ADMISSIONS OPEN NOW!
      </div>
      <div className="faculty">
        <i className="fas fa-chalkboard-teacher"></i>
        TEACHING BY IIT FACULTY PROFESSIONALS
      </div>
      <div className="tagline">
        <i className="fas fa-star"></i>
        DREAM · BELIEVE · ACHIEVE
      </div>

      <style>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          background: linear-gradient(135deg, #f8f6f3 0%, #f0ece4 50%, #e8e0d8 100%);
          width: 100%;
          scroll-margin-top: 70px;
        }

        .badge {
          background: linear-gradient(135deg, #0f1a2b, #1a3050);
          color: #f5e6c8;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.4rem 1.2rem;
          border-radius: 60px;
          letter-spacing: 1px;
          box-shadow: 0 6px 25px rgba(15, 26, 43, 0.25);
          border: 1px solid rgba(245, 230, 200, 0.15);
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.4rem;
        }

        .badge i { margin-right: 8px; }

        .faculty {
          font-weight: 600;
          background: linear-gradient(135deg, #f8f4f0, #ede8e0);
          padding: 0.25rem 1rem;
          border-radius: 50px;
          color: #0f1a2b;
          font-size: 0.7rem;
          border: 1px solid #d4c8bc;
          display: inline-block;
          margin-bottom: 0.4rem;
        }

        .faculty i { color: #c9a84c; margin-right: 5px; }

        .tagline {
          font-size: 0.8rem;
          font-weight: 600;
          color: #c9a84c;
          background: linear-gradient(135deg, #fdf6ee, #f8efe6);
          padding: 0.25rem 1.2rem;
          border-radius: 50px;
          border: 2px solid #e8d5b5;
          box-shadow: 0 3px 12px rgba(201, 168, 76, 0.12);
          display: inline-block;
        }

        .tagline i { margin-right: 6px; }

        @media (min-width: 480px) {
          .badge { font-size: 1rem; padding: 0.5rem 1.5rem; }
          .faculty { font-size: 0.8rem; padding: 0.3rem 1.2rem; }
          .tagline { font-size: 0.9rem; padding: 0.3rem 1.5rem; }
        }

        @media (min-width: 640px) {
          .header { padding: 2rem 1.5rem; }
          .badge { font-size: 1.2rem; padding: 0.5rem 2rem; }
          .faculty { font-size: 0.85rem; padding: 0.3rem 1.5rem; }
          .tagline { font-size: 1rem; padding: 0.3rem 2rem; }
        }

        @media (min-width: 768px) {
          .header { padding: 2.5rem 2rem; }
          .badge { font-size: 1.5rem; padding: 0.6rem 2.5rem; }
          .faculty { font-size: 0.95rem; padding: 0.4rem 1.8rem; }
          .tagline { font-size: 1.1rem; padding: 0.4rem 2.5rem; }
        }

        @media (min-width: 1024px) {
          .header { padding: 3rem 2.5rem; }
          .badge { font-size: 1.8rem; padding: 0.7rem 3rem; }
          .faculty { font-size: 1rem; padding: 0.5rem 2rem; }
          .tagline { font-size: 1.2rem; padding: 0.5rem 3rem; }
        }
      `}</style>
    </header>
  );
};

export default Header;