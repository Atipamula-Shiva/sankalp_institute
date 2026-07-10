// Updated WhatsAppButton.jsx with better styling
import React from "react";

const WhatsAppButton = ({ showForm, setShowForm, name, setName, phone, setPhone, onBookNow }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 1.5rem 2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const formContainerStyle = {
    background: "linear-gradient(135deg, #f8f6f3, #f0ece4)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e8e0d8",
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1.2rem",
    marginBottom: "1rem",
    border: "2px solid #e8e0d8",
    borderRadius: "50px",
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif",
    transition: "all 0.3s ease",
    outline: "none",
    background: "white",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #25D366, #1da85e)",
    color: "white",
    border: "none",
    fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
    fontWeight: 700,
    padding: "1rem 2.5rem",
    borderRadius: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    boxShadow: "0 8px 25px rgba(37, 211, 102, 0.3)",
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    width: "100%",
  };

  const closeButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#6d7a8a",
    fontSize: "1.5rem",
    cursor: "pointer",
    position: "absolute",
    top: "15px",
    right: "20px",
    transition: "color 0.2s ease",
  };

  if (showForm) {
    return (
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <button 
            style={closeButtonStyle}
            onClick={() => setShowForm(false)}
            onMouseEnter={(e) => e.target.style.color = "#0f1a2b"}
            onMouseLeave={(e) => e.target.style.color = "#6d7a8a"}
          >
            <i className="fas fa-times"></i>
          </button>
          <h3 style={{
            fontSize: "1.8rem", 
            fontWeight: 700, 
            color: "#0f1a2b", 
            marginBottom: "1.5rem", 
            textAlign: "center"
          }}>
            <i className="fas fa-calendar-check" style={{color: "#c9a84c", marginRight: "10px"}}></i>
            Book Appointment
          </h3>
          <input
            type="text"
            placeholder="Your Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#c9a84c";
              e.target.style.boxShadow = "0 0 0 4px rgba(201, 168, 76, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e8e0d8";
              e.target.style.boxShadow = "none";
            }}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#c9a84c";
              e.target.style.boxShadow = "0 0 0 4px rgba(201, 168, 76, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e8e0d8";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            style={buttonStyle}
            onClick={onBookNow}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 12px 35px rgba(37, 211, 102, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.3)";
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "1.8rem" }}></i>
            Book Now via WhatsApp
          </button>
          <p style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#6d7a8a",
            marginTop: "0.8rem"
          }}>
            <i className="fas fa-lock" style={{marginRight: "5px"}}></i>
            Your details are secure and will only be used for booking
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={() => setShowForm(true)}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.03)";
          e.target.style.boxShadow = "0 12px 35px rgba(37, 211, 102, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.3)";
        }}
      >
        <i className="fab fa-whatsapp" style={{ fontSize: "2rem" }}></i>
        Book Appointment via WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppButton;