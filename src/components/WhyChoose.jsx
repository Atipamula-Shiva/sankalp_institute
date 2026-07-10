// components/WhyChoose.jsx
import React from "react";

const WhyChoose = () => {
  const benefits = [
    { icon: "fa-user-graduate", text: "IIT Faculty" },
    { icon: "fa-users", text: "Small Batches" },
    { icon: "fa-chart-line", text: "Structured Programs" },
    { icon: "fa-clipboard-check", text: "Tests & Doubt Sessions" },
    { icon: "fa-hand-holding-heart", text: "Mentorship & Guidance" },
    { icon: "fa-shield-alt", text: "Safe Environment" },
  ];

  return (
    <section className="why-choose" id="why">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-question-circle"></i>
          WHY CHOOSE SANKALP?
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <i className={`fas ${benefit.icon}`}></i>
              {benefit.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-choose {
          padding: 2rem 0;
          background: linear-gradient(135deg, #f8f6f3, #f0ece4);
          width: 100%;
        }

        .section-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #0f1a2b;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
          border-left: 4px solid #c9a84c;
          padding-left: 0.8rem;
        }

        .section-title i {
          color: #c9a84c;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 0.8rem;
          width: 100%;
        }

        .benefit-item {
          background: white;
          padding: 0.6rem 0.8rem;
          border-radius: 50px;
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid #e8e0d8;
        }

        .benefit-item i {
          color: #c9a84c;
        }

        @media (min-width: 640px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (min-width: 768px) {
          .why-choose { padding: 3rem 0; }
          .benefit-item { padding: 0.8rem 1.2rem; }
        }

        @media (min-width: 1024px) {
          .benefits-grid { gap: 1.2rem; }
          .benefit-item { padding: 1rem 1.5rem; font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;