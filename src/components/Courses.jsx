// components/Courses.jsx
import React, { useEffect, useRef } from "react";

const Courses = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set the id directly on the DOM element
    if (sectionRef.current) {
      sectionRef.current.id = "courses";
    }
  }, []);

  const sectionStyle = {
    padding: "3rem 1.5rem",
    background: "#ffffff",
    margin: "0 auto",
    scrollMarginTop: "80px",
  };

  const sectionTitleStyle = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 700,
    color: "#0f1a2b",
    marginBottom: "0.5rem",
    letterSpacing: "-0.02em",
    borderLeft: "5px solid #c9a84c",
    paddingLeft: "1.2rem",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    margin: "2rem 0 0",
  };

  const cardStyle = (isSchool = false) => ({
    background: isSchool 
      ? "linear-gradient(145deg, #faf8f6, #f5f0ea)" 
      : "linear-gradient(145deg, #f8f6f3, #f0ebe4)",
    borderRadius: "1.5rem",
    padding: "2rem 1.8rem",
    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
    border: "1px solid #e8e0d8",
    transition: "all 0.3s ease",
    cursor: "default",
  });

  const titleStyle = {
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
    fontWeight: 700,
    color: "#0f1a2b",
    marginBottom: "0.3rem",
  };

  const subStyle = {
    fontWeight: 600,
    color: "#c9a84c",
    fontSize: "0.95rem",
    background: "rgba(201, 168, 76, 0.08)",
    display: "inline-block",
    padding: "0.2rem 1.2rem",
    borderRadius: "30px",
    marginBottom: "0.8rem",
    border: "1px solid rgba(201, 168, 76, 0.15)",
  };

  const listStyle = {
    listStyle: "none",
    marginTop: "0.5rem",
    padding: 0,
  };

  const itemStyle = {
    padding: "0.5rem 0",
    fontSize: "clamp(0.9rem, 1.2vw, 0.95rem)",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#2c3e50",
    borderBottom: "1px solid rgba(0,0,0,0.04)",
  };

  const iconStyle = (isSchool = false) => ({
    color: isSchool ? "#2d7d46" : "#1a3050",
    width: "1.2rem",
    fontSize: "0.9rem",
  });

  return (
    <div style={sectionStyle} ref={sectionRef} id="courses">
      <h2 style={sectionTitleStyle}>
        <i className="fas fa-graduation-cap" style={{ color: "#c9a84c", marginRight: "12px" }}></i>
        COURSES WE OFFER
      </h2>
      <div style={gridStyle}>
        <div 
          style={cardStyle(true)}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-4px)";
            e.target.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.04)";
          }}
        >
          <h3 style={titleStyle}>📚 SCHOOL TUITION</h3>
          <div style={subStyle}>Class 3 Onwards</div>
          <ul style={listStyle}>
            <li style={itemStyle}>
              <i className="fas fa-check-circle" style={iconStyle(true)}></i> All Subjects Covered
            </li>
            <li style={itemStyle}>
              <i className="fas fa-check-circle" style={iconStyle(true)}></i> CBSE · ICSE · State Board
            </li>
            <li style={itemStyle}>
              <i className="fas fa-check-circle" style={iconStyle(true)}></i> Concept Clarity
            </li>
            <li style={itemStyle}>
              <i className="fas fa-check-circle" style={iconStyle(true)}></i> Homework Support
            </li>
            <li style={itemStyle}>
              <i className="fas fa-check-circle" style={iconStyle(true)}></i> Regular Tests & Feedback
            </li>
          </ul>
        </div>

        <div 
          style={cardStyle(false)}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-4px)";
            e.target.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.04)";
          }}
        >
          <h3 style={titleStyle}>⚡ FOUNDATION FOR IIT & NEET</h3>
          <div style={subStyle}>Class 6 to 10</div>
          <ul style={listStyle}>
            <li style={itemStyle}>
              <i className="fas fa-bolt" style={iconStyle(false)}></i> Strong Concept Building
            </li>
            <li style={itemStyle}>
              <i className="fas fa-bolt" style={iconStyle(false)}></i> Olympiad & NTSE Prep
            </li>
            <li style={itemStyle}>
              <i className="fas fa-bolt" style={iconStyle(false)}></i> Problem Solving Skills
            </li>
            <li style={itemStyle}>
              <i className="fas fa-bolt" style={iconStyle(false)}></i> Regular Assessments
            </li>
            <li style={itemStyle}>
              <i className="fas fa-bolt" style={iconStyle(false)}></i> Early Start, Better Future
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;