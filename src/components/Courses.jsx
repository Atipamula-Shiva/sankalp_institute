// components/Courses.jsx
import React, { useEffect, useRef } from "react";

const Courses = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ensure the section has the correct id
    if (sectionRef.current) {
      sectionRef.current.id = "courses";
    }
  }, []);

  const courses = [
    {
      id: "school",
      title: "📚 SCHOOL TUITION",
      subtitle: "Class 3 Onwards",
      icon: "fa-check-circle",
      iconColor: "#2d7d46",
      items: ["All Subjects Covered", "CBSE · ICSE · State Board", "Concept Clarity", "Homework Support", "Regular Tests & Feedback"]
    },
    {
      id: "foundation",
      title: "⚡ FOUNDATION FOR IIT & NEET",
      subtitle: "Class 6 to 10",
      icon: "fa-bolt",
      iconColor: "#1a3050",
      items: ["Strong Concept Building", "Olympiad & NTSE Prep", "Problem Solving Skills", "Regular Assessments", "Early Start, Better Future"]
    }
  ];

  return (
    <section className="courses" ref={sectionRef} id="courses">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-graduation-cap"></i>
          COURSES WE OFFER
        </h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className={`course-card ${index === 0 ? 'school' : 'foundation'}`}>
              <h3>{course.title}</h3>
              <span className="subtitle">{course.subtitle}</span>
              <ul>
                {course.items.map((item, idx) => (
                  <li key={idx}>
                    <i className={`fas ${course.icon}`} style={{ color: course.iconColor }}></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .courses {
          padding: 2rem 0;
          background: #ffffff;
          width: 100%;
          scroll-margin-top: 70px;
        }

        .container {
          width: 100%;
          padding: 0 1rem;
          margin: 0 auto;
          max-width: 1200px;
        }

        .section-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #0f1a2b;
          border-left: 4px solid #c9a84c;
          padding-left: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .section-title i { color: #c9a84c; margin-right: 10px; }

        .courses-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
          width: 100%;
        }

        .course-card {
          border-radius: 1.2rem;
          padding: 1.5rem;
          border: 1px solid #e8e0d8;
          width: 100%;
        }

        .course-card.school { background: linear-gradient(145deg, #faf8f6, #f5f0ea); }
        .course-card.foundation { background: linear-gradient(145deg, #f8f6f3, #f0ebe4); }

        .course-card h3 {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          font-weight: 700;
          color: #0f1a2b;
          margin-bottom: 0.2rem;
        }

        .course-card .subtitle {
          font-weight: 600;
          color: #c9a84c;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          background: rgba(201, 168, 76, 0.08);
          display: inline-block;
          padding: 0.15rem 1rem;
          border-radius: 30px;
          margin-bottom: 0.6rem;
          border: 1px solid rgba(201, 168, 76, 0.15);
        }

        .course-card ul {
          list-style: none;
          margin: 0.3rem 0 0;
          padding: 0;
        }

        .course-card ul li {
          padding: 0.3rem 0;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c3e50;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }

        .course-card ul li:last-child { border-bottom: none; }
        .course-card ul li i { width: 1rem; }

        @media (min-width: 480px) {
          .courses { padding: 2.5rem 0; }
          .container { padding: 0 1.5rem; }
        }

        @media (min-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .container { padding: 0 2rem; }
        }

        @media (min-width: 768px) {
          .courses { padding: 3rem 0; }
          .courses-grid { gap: 2rem; }
          .course-card { padding: 2rem; }
          .container { padding: 0 2.5rem; }
        }

        @media (min-width: 1024px) {
          .courses-grid { gap: 2.5rem; }
          .course-card { padding: 2.5rem; }
          .container { padding: 0 3rem; max-width: 1200px; }
        }

        @media (min-width: 1280px) {
          .container { max-width: 1400px; }
        }
      `}</style>
    </section>
  );
};

export default Courses;