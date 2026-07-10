// components/Results.jsx
import React from "react";

const Results = () => {
  const containerStyle = {
    background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
    color: "#f5e6c8",
    padding: "3rem 1.5rem",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(15, 26, 43, 0.2)",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    marginBottom: "0.5rem",
    color: "#f5e6c8",
  };

  const statLineStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem 3rem",
    fontWeight: 600,
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    margin: "1.5rem 0 1rem",
  };

  const motivationStyle = {
    fontWeight: 500,
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    background: "rgba(245, 230, 200, 0.08)",
    display: "inline-block",
    padding: "0.4rem 2.5rem",
    borderRadius: "50px",
    marginTop: "1rem",
    border: "1px solid rgba(245, 230, 200, 0.1)",
  };

  const subTextStyle = {
    fontWeight: 500,
    marginTop: "0.8rem",
    fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
    color: "#d4c8bc",
  };

  const iconStyle = { 
    marginRight: "10px",
    color: "#c9a84c",
  };

  return (
    <div style={containerStyle} id="results">
      <h2 style={titleStyle}>🏆 OUR RESULTS. OUR PRIDE!</h2>
      <div style={statLineStyle}>
        <span>
          <i className="fas fa-users" style={iconStyle}></i> 5+ Students Mentored
        </span>
        <span>
          <i className="fas fa-trophy" style={iconStyle}></i> 10+ Students
        </span>
        <span>
          <i className="fas fa-medal" style={iconStyle}></i> 10+ Students
        </span>
        <span>
          <i className="fas fa-flag-checkered" style={iconStyle}></i> 10+ Students
        </span>
      </div>
      <div style={motivationStyle}>
        <i className="fas fa-rocket" style={{ marginRight: "12px", color: "#c9a84c" }}></i>
        The Earlier You Start, The Farther You Go!
      </div>
      <div style={subTextStyle}>
        <i className="fas fa-calendar-check" style={{ marginRight: "10px", color: "#c9a84c" }}></i>
        Start Today. Stay Ahead!
      </div>
    </div>
  );
};

export default Results;