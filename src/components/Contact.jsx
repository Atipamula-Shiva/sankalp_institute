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

  const validateName = (value) => {
    if (!value || value.trim() === "") return "Full name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s\-']+$/.test(value.trim())) {
      return "Name should only contain letters, spaces, hyphens, and apostrophes";
    }
    return "";
  };

  const validatePhone = (value) => {
    if (!value || value.trim() === "") return "Phone number is required";
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
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    
    setTouched({ name: true, phone: true });
    setErrors({ name: nameError, phone: phoneError });

    if (nameError || phoneError) {
      const firstErrorField = nameError ? "name" : "phone";
      const element = document.getElementById(`input-${firstErrorField}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      return;
    }

    const message = `Hi Sankalp Institute! I want to book an appointment for admission enquiry.\n\nName: ${name}\nPhone: ${phone}`;
    const url = `https://wa.me/918179118182?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setName("");
    setPhone("");
    setErrors({ name: "", phone: "" });
    setTouched({ name: false, phone: false });
  };

  const openInMaps = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://www.google.com/maps/dir/?api=1&destination=17.607971,78.079573&travelmode=driving`
      : `https://www.google.com/maps?q=17.607971,78.079573&z=18&hl=en`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact" ref={sectionRef} id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left Column */}
          <div className="contact-info">
            <div className="info-card">
              <div className="location" onClick={openInMaps}>
                <i className="fas fa-map-pin"></i>
                <span>Beside Srinidhi Pindi Vantalu, Sai Baba Kaman, Sangareddy.</span>
                <span className="directions">
                  <i className="fas fa-external-link-alt"></i> Directions
                </span>
              </div>
              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <span>8179118182</span>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=17.607971,78.079573&zoom=17&maptype=roadmap&center=17.607971,78.079573"
                allowFullScreen=""
                loading="lazy"
                title="Sankalp Institute Location"
              ></iframe>
              <div className="map-marker">
                <div className="marker">
                  <i className="fas fa-map-pin"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="booking-form">
            <div className="form-header">
              <div className="form-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Book Appointment</h3>
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-user"></i>
                Full Name <span className="required">*</span>
              </label>
              <input
                id="input-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur("name")}
                className={touched.name && errors.name ? 'error' : ''}
              />
              {touched.name && errors.name && (
                <span className="error-text">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-phone"></i>
                Phone Number <span className="required">*</span>
              </label>
              <input
                id="input-phone"
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => handleBlur("phone")}
                className={touched.phone && errors.phone ? 'error' : ''}
              />
              {touched.phone && errors.phone && (
                <span className="error-text">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.phone}
                </span>
              )}
            </div>

            <button className="book-btn" onClick={handleBookNow}>
              <i className="fab fa-whatsapp"></i>
              Book Now via WhatsApp
            </button>

            <div className="form-footer">
              <span><i className="fas fa-lock"></i> Secure</span>
              <span><i className="fas fa-clock"></i> Fast Response</span>
              <span><i className="fas fa-shield-alt"></i> Confidential</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 1.5rem 0;
          width: 100%;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          background: linear-gradient(135deg, #f8f6f3 0%, #f0ece4 100%);
          border-radius: 1.5rem;
          padding: 1.5rem 1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-card {
          background: white;
          border-radius: 1.2rem;
          padding: 1rem;
          border: 1px solid #e8e0d8;
          box-shadow: 0 2px 15px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          font-size: clamp(0.8rem, 2.5vw, 1rem);
          color: #0f1a2b;
          cursor: pointer;
          flex-wrap: wrap;
        }

        .location i:first-child {
          color: #c9a84c;
          font-size: 1.1rem;
        }

        .directions {
          font-size: 0.65rem;
          color: #c9a84c;
          white-space: nowrap;
        }

        .phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          font-size: clamp(1rem, 3vw, 1.3rem);
          color: #0f1a2b;
          background: linear-gradient(135deg, #f8f6f3, #f0ece4);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid #e8e0d8;
        }

        .phone i {
          color: #25D366;
        }

        .map-container {
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 2px solid white;
          height: 200px;
          position: relative;
          width: 100%;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .map-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -100%);
          pointer-events: none;
          z-index: 10;
        }

        .marker {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #c9a84c, #d4b85a);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 15px rgba(201, 168, 76, 0.5);
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-marker 2s infinite;
        }

        .marker i {
          color: #0f1a2b;
          font-size: 16px;
          transform: rotate(45deg);
          margin-top: -4px;
        }

        @keyframes pulse-marker {
          0% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.1); }
          100% { transform: rotate(-45deg) scale(1); }
        }

        .booking-form {
          background: white;
          border-radius: 1.5rem;
          padding: 1.5rem 1.2rem;
          border: 1px solid #e8e0d8;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
          justify-content: center;
        }

        .form-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #c9a84c, #d4b85a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 12px rgba(201, 168, 76, 0.3);
        }

        .form-icon i {
          color: #0f1a2b;
          font-size: 1.2rem;
        }

        .form-header h3 {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          font-weight: 700;
          color: #0f1a2b;
          margin: 0;
        }

        .form-group {
          margin-bottom: 0.3rem;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #0f1a2b;
          margin-bottom: 0.2rem;
          display: block;
        }

        .form-group label i {
          margin-right: 6px;
          color: #c9a84c;
        }

        .required {
          color: #e74c3c;
        }

        .form-group input {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 2px solid #e8e0d8;
          border-radius: 50px;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          background: #faf8f6;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .form-group input.error {
          border-color: #e74c3c;
          background: #fff5f5;
        }

        .form-group input:focus {
          border-color: #c9a84c;
          box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.1);
          background: white;
        }

        .error-text {
          color: #e74c3c;
          font-size: 0.75rem;
          display: block;
          padding-left: 0.8rem;
          margin-top: 0.2rem;
        }

        .error-text i {
          margin-right: 5px;
        }

        .book-btn {
          background: linear-gradient(135deg, #25D366, #1da85e);
          color: white;
          border: none;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: 700;
          padding: 0.9rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 0.3rem;
        }

        .book-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
        }

        .book-btn i {
          font-size: 1.4rem;
        }

        .form-footer {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 0.8rem;
          flex-wrap: wrap;
        }

        .form-footer span {
          font-size: 0.7rem;
          color: #6d7a8a;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .form-footer span i {
          color: #c9a84c;
        }

        @media (min-width: 640px) {
          .contact { padding: 2rem 0; }
          .contact-wrapper { padding: 2rem 1.5rem; }
          .map-container { height: 250px; }
        }

        @media (min-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
          }
          .info-card {
            padding: 1.2rem 1.5rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .phone { width: auto; }
          .booking-form { padding: 2rem; }
          .map-container { height: 280px; }
        }

        @media (min-width: 1024px) {
          .contact-wrapper { gap: 2.5rem; }
          .map-container { height: 300px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;