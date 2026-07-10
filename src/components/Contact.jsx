// components/Contact.jsx
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "contact";
    }
  }, []);

  // Validation functions
  const validateName = (value) => {
    if (!value || value.trim() === "") {
      return "Full name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s\-']+$/.test(value.trim())) {
      return "Name should only contain letters, spaces, hyphens, and apostrophes";
    }
    return "";
  };

  const validatePhone = (value) => {
    if (!value || value.trim() === "") {
      return "Phone number is required";
    }
    const cleaned = value.replace(/\s/g, "");
    if (!/^[0-9]{10}$/.test(cleaned)) {
      return "Please enter a valid 10-digit phone number";
    }
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (touched.name) {
      setErrors({ ...errors, name: validateName(value) });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
    if (touched.phone) {
      setErrors({ ...errors, phone: validatePhone(value) });
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    if (field === "name") {
      setErrors({ ...errors, name: validateName(name) });
    } else if (field === "phone") {
      setErrors({ ...errors, phone: validatePhone(phone) });
    }
  };

  const handleBookNow = () => {
    // Validate all fields
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    
    setTouched({ name: true, phone: true });
    setErrors({ name: nameError, phone: phoneError });

    if (nameError || phoneError) {
      // Scroll to the first error
      const firstErrorField = nameError ? "name" : "phone";
      const element = document.getElementById(`input-${firstErrorField}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      return;
    }

    // If validation passes, proceed with WhatsApp
    const message = `Hi Sankalp Institute! I want to book an appointment for admission enquiry.\n\nName: ${name}\nPhone: ${phone}`;
    const url = `https://wa.me/918179118182?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setName("");
    setPhone("");
    setErrors({ name: "", phone: "" });
    setTouched({ name: false, phone: false });
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "3rem 1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "stretch",
    background: "linear-gradient(135deg, #f8f6f3 0%, #f0ece4 100%)",
    borderRadius: "2rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const leftSectionStyle = {
    flex: "2",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const rightSectionStyle = {
    flex: "1.2",
    minWidth: "280px",
    background: "white",
    borderRadius: "1.8rem",
    padding: "2.5rem 2rem",
    border: "1px solid #e8e0d8",
    boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "transform 0.3s ease",
  };

  const infoCardStyle = {
    background: "white",
    borderRadius: "1.5rem",
    padding: "1.5rem 2rem",
    border: "1px solid #e8e0d8",
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    transition: "all 0.3s ease",
  };

  const locationStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: 500,
    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
    color: "#0f1a2b",
    cursor: "pointer",
    flex: 1,
    padding: "0.2rem 0",
    transition: "color 0.3s ease",
  };

  const phoneStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: 700,
    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
    color: "#0f1a2b",
    background: "linear-gradient(135deg, #f8f6f3, #f0ece4)",
    padding: "0.5rem 1.8rem 0.5rem 1.5rem",
    borderRadius: "60px",
    boxShadow: "0 2px 15px rgba(0,0,0,0.04)",
    border: "1px solid #e8e0d8",
  };

  const mapContainerStyle = {
    borderRadius: "1.5rem",
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    border: "3px solid white",
    height: "280px",
    position: "relative",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=17.607971,78.079573&z=18&hl=en`;
    window.open(url, "_blank");
  };

  const getInputStyle = (field) => {
    const hasError = touched[field] && errors[field];
    return {
      width: "100%",
      padding: "0.9rem 1.2rem",
      marginBottom: hasError ? "0.3rem" : "0.8rem",
      border: `2px solid ${hasError ? "#e74c3c" : "#e8e0d8"}`,
      borderRadius: "50px",
      fontSize: "0.95rem",
      fontFamily: "'Inter', sans-serif",
      transition: "all 0.3s ease",
      outline: "none",
      background: hasError ? "#fff5f5" : "#faf8f6",
      boxSizing: "border-box",
    };
  };

  const errorTextStyle = {
    color: "#e74c3c",
    fontSize: "0.8rem",
    marginTop: "-0.3rem",
    marginBottom: "0.5rem",
    display: "block",
    paddingLeft: "1rem",
  };

  const bookButtonStyle = {
    background: "linear-gradient(135deg, #25D366, #1da85e)",
    color: "white",
    border: "none",
    fontSize: "1rem",
    fontWeight: 700,
    padding: "1rem",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    boxShadow: "0 8px 25px rgba(37, 211, 102, 0.3)",
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    width: "100%",
    marginTop: "0.5rem",
  };

  return (
    <div style={containerStyle} ref={sectionRef} id="contact">
      {/* Left Section: Contact Info + Map */}
      <div style={leftSectionStyle}>
        <div style={infoCardStyle}>
          <div 
            style={locationStyle} 
            onClick={openInMaps}
            onMouseEnter={(e) => e.target.style.color = "#c9a84c"}
            onMouseLeave={(e) => e.target.style.color = "#0f1a2b"}
          >
            <i className="fas fa-map-pin" style={{ color: "#c9a84c", fontSize: "1.2rem" }}></i>
            <span>Beside Srinidhi Pindi Vantalu, Sai Baba Kaman, Sangareddy.</span>
            <span style={{ fontSize: "0.7rem", color: "#c9a84c", marginLeft: "8px" }}>
              <i className="fas fa-external-link-alt"></i>
            </span>
          </div>
          <div style={phoneStyle}>
            <i className="fas fa-phone-alt" style={{ color: "#25D366" }}></i>
            8179118182
          </div>
        </div>

        <div style={mapContainerStyle}>
          <iframe
            style={iframeStyle}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=17.607971,78.079573&zoom=17&maptype=roadmap&center=17.607971,78.079573"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sankalp Institute Location"
          ></iframe>
          {/* Custom Marker */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)",
            pointerEvents: "none",
            zIndex: 10,
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              background: "linear-gradient(135deg, #c9a84c, #d4b85a)",
              borderRadius: "50% 50% 50% 0",
              transform: "rotate(-45deg)",
              boxShadow: "0 6px 25px rgba(201, 168, 76, 0.6)",
              border: "4px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "pulse 2s infinite",
            }}>
              <i className="fas fa-map-pin" style={{
                color: "#0f1a2b",
                fontSize: "20px",
                transform: "rotate(45deg)",
                marginTop: "-4px",
              }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Book Appointment Form */}
      <div style={rightSectionStyle}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "12px",
          marginBottom: "1.5rem",
          justifyContent: "center",
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #c9a84c, #d4b85a)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(201, 168, 76, 0.3)",
          }}>
            <i className="fas fa-calendar-check" style={{ color: "#0f1a2b", fontSize: "1.4rem" }}></i>
          </div>
          <h3 style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#0f1a2b",
            margin: 0,
          }}>
            Book Appointment
          </h3>
        </div>
        
        <div style={{ marginBottom: "0.5rem" }}>
          <label style={{ 
            fontSize: "0.85rem", 
            fontWeight: 600, 
            color: "#0f1a2b",
            marginBottom: "0.3rem",
            display: "block",
          }}>
            <i className="fas fa-user" style={{ marginRight: "8px", color: "#c9a84c" }}></i>
            Full Name <span style={{ color: "#e74c3c" }}>*</span>
          </label>
          <input
            id="input-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={handleNameChange}
            onBlur={() => handleBlur("name")}
            style={getInputStyle("name")}
            onFocus={(e) => {
              e.target.style.borderColor = "#c9a84c";
              e.target.style.boxShadow = "0 0 0 4px rgba(201, 168, 76, 0.1)";
              e.target.style.background = "white";
            }}
          />
          {touched.name && errors.name && (
            <span style={errorTextStyle}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: "6px" }}></i>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
          <label style={{ 
            fontSize: "0.85rem", 
            fontWeight: 600, 
            color: "#0f1a2b",
            marginBottom: "0.3rem",
            display: "block",
          }}>
            <i className="fas fa-phone" style={{ marginRight: "8px", color: "#c9a84c" }}></i>
            Phone Number <span style={{ color: "#e74c3c" }}>*</span>
          </label>
          <input
            id="input-phone"
            type="tel"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => handleBlur("phone")}
            style={getInputStyle("phone")}
            onFocus={(e) => {
              e.target.style.borderColor = "#c9a84c";
              e.target.style.boxShadow = "0 0 0 4px rgba(201, 168, 76, 0.1)";
              e.target.style.background = "white";
            }}
          />
          {touched.phone && errors.phone && (
            <span style={errorTextStyle}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: "6px" }}></i>
              {errors.phone}
            </span>
          )}
        </div>

        <button
          style={bookButtonStyle}
          onClick={handleBookNow}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.03)";
            e.target.style.boxShadow = "0 12px 35px rgba(37, 211, 102, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.3)";
          }}
          onMouseDown={(e) => {
            e.target.style.transform = "scale(0.97)";
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1.03)";
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: "1.6rem" }}></i>
          Book Now via WhatsApp
        </button>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1rem",
        }}>
          <span style={{
            fontSize: "0.75rem",
            color: "#6d7a8a",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <i className="fas fa-lock" style={{ color: "#c9a84c" }}></i>
            Secure
          </span>
          <span style={{
            fontSize: "0.75rem",
            color: "#6d7a8a",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <i className="fas fa-clock" style={{ color: "#c9a84c" }}></i>
            Fast Response
          </span>
          <span style={{
            fontSize: "0.75rem",
            color: "#6d7a8a",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <i className="fas fa-shield-alt" style={{ color: "#c9a84c" }}></i>
            Confidential
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: rotate(-45deg) scale(1);
          }
          50% {
            transform: rotate(-45deg) scale(1.1);
          }
          100% {
            transform: rotate(-45deg) scale(1);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .input-error {
          animation: shake 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default Contact;