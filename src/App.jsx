// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import WhyChoose from "./components/WhyChoose";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    document.title = "Sankalp Institute · IIT & NEET Foundation";
  }, []);

  const handleJoinNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
      setTimeout(() => {
        const nameInput = document.getElementById("input-name");
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <div className="app">
      <Navbar onJoinNow={handleJoinNow} />
      <div className="main-content">
        <Header />
        <Courses />
        <WhyChoose />
        <Results />
        <Contact />
        <Footer />
      </div>

      <style>{`
        .app {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background-color: #f8f6f3;
          min-height: 100vh;
        }

        .main-content {
          padding-top: 70px; /* Height of navbar */
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default App;