// App.jsx - Updated with proper onJoinNow function
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import WhyChoose from "./components/WhyChoose";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [scrollToContact, setScrollToContact] = useState(false);

  useEffect(() => {
    document.title = "Sankalp Institute · IIT & NEET Foundation";
  }, []);

  // Function to handle Join Now button click
  const handleJoinNow = () => {
    // Scroll to contact section smoothly
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
      // Focus on the name input after scrolling
      setTimeout(() => {
        const nameInput = document.getElementById("input-name");
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  const appStyle = {
    margin: "0 auto",
    padding: "0",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    backgroundColor: "#f8f6f3",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "0",
    boxShadow: "none",
    overflow: "hidden",
    padding: "0",
  };

  return (
    <div style={appStyle}>
      <Navbar onJoinNow={handleJoinNow} />
      <div style={cardStyle}>
        <div id="home">
          <Header />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="why">
          <WhyChoose />
        </div>
        <div id="results">
          <Results />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;