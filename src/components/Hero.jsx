export default function Hero() {
  return (
    <section
      style={{
        background: "#0b2f75",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        Sankalp Institute
      </h1>

      <h2>
        Dream • Believe • Achieve
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.8",
        }}
      >
        Admissions Open Now for School Tuition,
        IIT Foundation and NEET Foundation
        Programs.
      </p>

      <button
        style={{
          padding: "15px 30px",
          background: "#ffc107",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Enquire Now
      </button>
    </section>
  );
}