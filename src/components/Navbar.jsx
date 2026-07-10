// components/Navbar.jsx - Updated with Contact link
import React, { useState, useEffect } from "react";

const Navbar = ({ onJoinNow }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = ["home", "courses", "why", "results", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "0.8rem 1rem" : "1rem 2.5rem",
    background: "linear-gradient(135deg, #0f1a2b, #1a3050)",
    borderBottom: "3px solid #c9a84c",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    flexWrap: isMobile ? "wrap" : "nowrap",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  };

  const logoTextStyle = {
    color: "#f5e6c8",
    fontSize: isMobile ? "1.5rem" : "2rem",
    fontWeight: 800,
    letterSpacing: "3px",
    fontFamily: "'Inter', sans-serif",
    textTransform: "uppercase",
    lineHeight: 1,
  };

  const logoSubStyle = {
    color: "#c9a84c",
    fontSize: isMobile ? "0.45rem" : "0.65rem",
    letterSpacing: "4px",
    fontWeight: 300,
    textTransform: "uppercase",
    marginTop: "2px",
    opacity: 0.8,
  };

  const navStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    alignItems: "center",
    gap: isMobile ? "0.5rem" : "2.5rem",
    flexDirection: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "auto",
    padding: isMobile ? "1rem 0" : "0",
    marginTop: isMobile ? "0.8rem" : "0",
    borderTop: isMobile ? "1px solid rgba(255,255,255,0.1)" : "none",
  };

  const getNavLinkStyle = (section) => {
    const isActive = activeSection === section;
    return {
      color: isActive ? "#f5e6c8" : "#d4c8bc",
      textDecoration: "none",
      fontSize: isMobile ? "0.9rem" : "0.95rem",
      fontWeight: isActive ? 700 : 500,
      transition: "all 0.3s ease",
      cursor: "pointer",
      letterSpacing: "0.5px",
      padding: isMobile ? "0.5rem 1rem" : "0.3rem 0",
      borderBottom: isMobile 
        ? `1px solid ${isActive ? "#c9a84c" : "rgba(255,255,255,0.05)"}` 
        : `2px solid ${isActive ? "#c9a84c" : "transparent"}`,
      width: isMobile ? "100%" : "auto",
      textAlign: isMobile ? "center" : "left",
      position: "relative",
    };
  };

  const activeDotStyle = {
    display: "inline-block",
    width: "6px",
    height: "6px",
    background: "#c9a84c",
    borderRadius: "50%",
    marginLeft: "6px",
    animation: "pulse 1.5s infinite",
  };

  const joinButtonStyle = {
    background: "linear-gradient(135deg, #c9a84c, #d4b85a)",
    color: "#0f1a2b",
    border: "none",
    padding: isMobile ? "0.6rem 1.5rem" : "0.7rem 2rem",
    borderRadius: "50px",
    fontSize: isMobile ? "0.85rem" : "0.95rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(201, 168, 76, 0.3)",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    width: isMobile ? "100%" : "auto",
  };

  const hamburgerStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    padding: "5px",
  };

  const barStyle = {
    width: "25px",
    height: "2px",
    backgroundColor: "#f5e6c8",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div style={navbarStyle}>
      <div style={logoContainerStyle} onClick={() => scrollToSection("home")}>
        <div>
          <div style={logoTextStyle}>SANKALP INSTITUTE</div>
          <div style={logoSubStyle}>COMMITMENT · EDUCATION · LEADERSHIP</div>
        </div>
      </div>
      
      {isMobile && (
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{...barStyle, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"}}></div>
          <div style={{...barStyle, opacity: menuOpen ? 0 : 1}}></div>
          <div style={{...barStyle, transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"}}></div>
        </div>
      )}

      <div style={navStyle}>
        <a 
          href="#home" 
          style={getNavLinkStyle("home")}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
          {activeSection === "home" && <span style={activeDotStyle}></span>}
        </a>
        <a 
          href="#courses" 
          style={getNavLinkStyle("courses")}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("courses");
          }}
        >
          Courses
          {activeSection === "courses" && <span style={activeDotStyle}></span>}
        </a>
        <a 
          href="#why" 
          style={getNavLinkStyle("why")}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("why");
          }}
        >
          Why Us
          {activeSection === "why" && <span style={activeDotStyle}></span>}
        </a>
        <a 
          href="#results" 
          style={getNavLinkStyle("results")}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("results");
          }}
        >
          Results
          {activeSection === "results" && <span style={activeDotStyle}></span>}
        </a>
        <a 
          href="#contact" 
          style={{
            ...getNavLinkStyle("contact"),
            color: activeSection === "contact" ? "#f5e6c8" : "#d4c8bc",
            fontWeight: activeSection === "contact" ? 700 : 500,
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          <i className="fas fa-phone" style={{ marginRight: "6px", fontSize: "0.85rem" }}></i>
          Contact
          {activeSection === "contact" && <span style={activeDotStyle}></span>}
        </a>
        <button 
          style={joinButtonStyle}
          onClick={() => {
            setMenuOpen(false);
            onJoinNow();
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 25px rgba(201, 168, 76, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(201, 168, 76, 0.3)";
          }}
        >
          <i className="fas fa-rocket" style={{ marginRight: "8px" }}></i>
          Join Now
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;