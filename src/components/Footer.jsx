// components/Footer.jsx
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerStyle = {
    textAlign: "center",
    padding: "2rem 1.5rem",
    background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
    borderTop: "4px solid #c9a84c",
    marginTop: "0",
    position: "relative",
  };

  const decorativeStyle = {
    position: "absolute",
    top: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
    borderRadius: "2px",
  };

  const contentStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem 2rem",
  };

  const leftSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  };

  const callStyle = {
    background: "linear-gradient(135deg, #c9a84c, #d4b85a)",
    padding: "0.5rem 1.8rem",
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "#0f1a2b",
    boxShadow: "0 4px 20px rgba(201, 168, 76, 0.25)",
    transition: "all 0.3s ease",
    cursor: "default",
    border: "2px solid rgba(255, 255, 255, 0.1)",
  };

  const socialContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const socialLinkStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(201, 168, 76, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#d4c8bc",
    fontSize: "1.2rem",
    textDecoration: "none",
  };

  const textStyle = {
    color: "#d4c8bc",
    fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)",
    fontWeight: 400,
    letterSpacing: "0.3px",
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  };

  const scrollTopButtonStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c9a84c, #d4b85a)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    color: "#0f1a2b",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(201, 168, 76, 0.25)",
    opacity: showScrollTop ? 1 : 0,
    visibility: showScrollTop ? "visible" : "hidden",
    transform: showScrollTop ? "scale(1)" : "scale(0.8)",
  };

  return (
    <div style={containerStyle}>
      <div style={decorativeStyle}></div>
      
      <div style={contentStyle}>
        {/* Left Section */}
        <div style={leftSectionStyle}>
          <div 
            style={callStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 30px rgba(201, 168, 76, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 20px rgba(201, 168, 76, 0.25)";
            }}
          >
            <i className="fas fa-phone"></i>
            <span>Call Now: 8179118182</span>
          </div>

          <div style={socialContainerStyle}>
            <a
              href="https://www.instagram.com/sankalp_institute_srd/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(135deg, #833AB4, #E1306C, #FD1D1D)";
                e.target.style.transform = "scale(1.15)";
                e.target.style.boxShadow = "0 8px 25px rgba(225, 48, 108, 0.4)";
                e.target.style.color = "white";
                e.target.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
                e.target.style.color = "#d4c8bc";
                e.target.style.borderColor = "rgba(201, 168, 76, 0.2)";
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <i className="fas fa-graduation-cap" style={{ color: "#c9a84c" }}></i>
          <span style={textStyle}>Sankalp Institute · Sangareddy</span>
        </div>

        {/* Right Section */}
        <div style={rightSectionStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <i className="fas fa-map-pin" style={{ color: "#c9a84c", fontSize: "0.8rem" }}></i>
            <span style={{...textStyle, fontSize: "0.75rem", color: "#8a9aa8" }}>
              Sai Baba Kaman
            </span>
          </div>

          <button
            style={scrollTopButtonStyle}
            onClick={scrollToTop}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.15)";
              e.target.style.boxShadow = "0 8px 30px rgba(201, 168, 76, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(201, 168, 76, 0.25)";
            }}
            title="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={{
        marginTop: "1.5rem",
        paddingTop: "1rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <span style={{...textStyle, fontSize: "0.7rem", color: "#6d7a8a", opacity: 0.5 }}>
          <i className="far fa-copyright" style={{ marginRight: "4px" }}></i>
          2026 Sankalp Institute. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;