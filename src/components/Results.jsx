// components/Results.jsx
import React from "react";

const Results = () => {
  return (
    <div id="results" style={{
      background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
      color: "#f5e6c8",
      padding: "2rem 1rem",
      textAlign: "center",
      width: "100%",
      boxSizing: "border-box",
      scrollMarginTop: "70px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}>🏆 OUR RESULTS. OUR PRIDE!</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.8rem 1.5rem",
          fontWeight: 600,
          fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)",
          margin: "1rem 0 0.8rem",
        }}>
          <span><i className="fas fa-users" style={{ color: "#c9a84c", marginRight: "6px" }}></i> 5+ Students Mentored</span>
          <span><i className="fas fa-trophy" style={{ color: "#c9a84c", marginRight: "6px" }}></i> 10+ Students</span>
          <span><i className="fas fa-medal" style={{ color: "#c9a84c", marginRight: "6px" }}></i> 10+ Students</span>
          <span><i className="fas fa-flag-checkered" style={{ color: "#c9a84c", marginRight: "6px" }}></i> 10+ Students</span>
        </div>

        <div style={{
          fontWeight: 500,
          fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)",
          background: "rgba(245, 230, 200, 0.08)",
          display: "inline-block",
          padding: "0.3rem 1.5rem",
          borderRadius: "50px",
          marginTop: "0.5rem",
          border: "1px solid rgba(245, 230, 200, 0.1)",
        }}>
          <i className="fas fa-rocket" style={{ marginRight: "8px", color: "#c9a84c" }}></i>
          The Earlier You Start, The Farther You Go!
        </div>

        <div style={{
          fontWeight: 500,
          marginTop: "0.5rem",
          fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
          color: "#d4c8bc",
        }}>
          <i className="fas fa-calendar-check" style={{ marginRight: "6px", color: "#c9a84c" }}></i>
          Start Today. Stay Ahead!
        </div>
      </div>
    </div>
  );
};

export default Results;