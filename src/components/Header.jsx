// components/Header.jsx
import React from "react";

const Header = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "4rem 2rem 3rem",
    background: "linear-gradient(135deg, #f8f6f3 0%, #f0ece4 50%, #e8e0d8 100%)",
    position: "relative",
    overflow: "hidden",
  };

  const decorationStyle = {
    position: "absolute",
    top: "-50%",
    right: "-10%",
    width: "60%",
    height: "200%",
    background: "radial-gradient(circle, rgba(201, 168, 76, 0.05) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  };

  const titleStyle = {
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.1,
    margin: 0,
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
  };

  const taglineStyle = {
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    fontWeight: 600,
    letterSpacing: "0.5px",
    color: "#c9a84c",
    background: "linear-gradient(135deg, #fdf6ee, #f8efe6)",
    padding: "0.6rem 2.5rem",
    borderRadius: "50px",
    display: "inline-block",
    marginTop: "0.8rem",
    border: "2px solid #e8d5b5",
    boxShadow: "0 4px 15px rgba(201, 168, 76, 0.15)",
    position: "relative",
  };

  const badgeStyle = {
    marginTop: "1.2rem",
    background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
    color: "#f5e6c8",
    fontWeight: 700,
    fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
    padding: "0.6rem 2.5rem",
    borderRadius: "60px",
    letterSpacing: "2px",
    boxShadow: "0 8px 30px rgba(15, 26, 43, 0.3)",
    border: "1px solid rgba(245, 230, 200, 0.15)",
    textTransform: "uppercase",
    position: "relative",
  };

  const facultyStyle = {
    marginTop: "1rem",
    fontWeight: 600,
    background: "linear-gradient(135deg, #f8f4f0, #ede8e0)",
    padding: "0.5rem 2.2rem",
    borderRadius: "50px",
    color: "#0f1a2b",
    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
    border: "1px solid #d4c8bc",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "relative",
  };

  const iconStyle = {
    color: "#c9a84c",
    marginRight: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={decorationStyle}></div>
      
      <div style={badgeStyle}>
        <i className="fas fa-graduation-cap" style={{ marginRight: "15px", fontSize: "clamp(1rem, 2vw, 1.6rem)" }}></i>
        ADMISSIONS OPEN NOW!
      </div>
      <div style={facultyStyle}>
        <i className="fas fa-chalkboard-teacher" style={iconStyle}></i>
        TEACHING BY IIT FACULTY PROFESSIONALS
      </div>
      <div style={taglineStyle}>
        <i className="fas fa-star" style={{ marginRight: "10px", color: "#c9a84c" }}></i>
        DREAM · BELIEVE · ACHIEVE
      </div>
    </div>
  );
};

export default Header;