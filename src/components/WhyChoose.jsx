// components/WhyChoose.jsx
import React from "react";

const WhyChoose = () => {
  const sectionStyle = {
    padding: "3rem 1.5rem",
    background: "linear-gradient(135deg, #f8f6f3, #f0ece4)",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 700,
    color: "#0f1a2b",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "1.5rem",
    borderLeft: "5px solid #c9a84c",
    paddingLeft: "1.2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1rem",
  };

  const itemStyle = {
    background: "white",
    padding: "0.8rem 1.2rem",
    borderRadius: "50px",
    fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
    border: "1px solid #e8e0d8",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    color: "#c9a84c",
    fontSize: "1rem",
    width: "1.2rem",
  };

  const benefits = [
    { icon: "fa-user-graduate", text: "IIT Faculty" },
    { icon: "fa-users", text: "Small Batches" },
    { icon: "fa-chart-line", text: "Structured Programs" },
    { icon: "fa-clipboard-check", text: "Tests & Doubt Sessions" },
    { icon: "fa-hand-holding-heart", text: "Mentorship & Guidance" },
    { icon: "fa-shield-alt", text: "Safe Environment" },
  ];

  return (
    <div style={sectionStyle} id="why">
      <h2 style={titleStyle}>
        <i className="fas fa-question-circle" style={{ color: "#c9a84c", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}></i>
        WHY CHOOSE SANKALP?
      </h2>
      <div style={gridStyle}>
        {benefits.map((benefit, index) => (
          <span key={index} style={itemStyle}>
            <i className={`fas ${benefit.icon}`} style={iconStyle}></i>
            {benefit.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;