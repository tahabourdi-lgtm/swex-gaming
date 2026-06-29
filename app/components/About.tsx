"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "70px",
          color: "#a855f7",
          textShadow: "0 0 30px #a855f7",
          marginBottom: "40px",
          fontWeight: "900",
        }}
      >
        ✝️ CHILD OF GOD ✝️
      </h2>

      <div
        style={{
          maxWidth: "900px",
          padding: "40px",
          borderRadius: "30px",
          background: "rgba(168,85,247,0.08)",
          border: "1px solid rgba(168,85,247,0.4)",
          boxShadow: "0 0 35px rgba(168,85,247,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            fontSize: "28px",
            lineHeight: "1.9",
            color: "#e5e5e5",
          }}
        >
          Jesus is my strength.
          <br />
          Faith is my weapon.
          <br />
          Love is my path.
          <br />
          <br />
          I play with passion,
          <br />
          create with purpose,
          <br />
          and walk with God.
        </p>

        <p
          style={{
            marginTop: "30px",
            color: "#c084fc",
            fontStyle: "italic",
            fontSize: "22px",
          }}
        >
          "With God all things are possible." — Matthew 19:26
        </p>
      </div>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "20px 30px",
            borderRadius: "20px",
            border: "1px solid #a855f7",
            boxShadow: "0 0 20px rgba(168,85,247,0.3)",
          }}
        >
          ✝️ Faith
        </div>

        <div
          style={{
            padding: "20px 30px",
            borderRadius: "20px",
            border: "1px solid #a855f7",
            boxShadow: "0 0 20px rgba(168,85,247,0.3)",
          }}
        >
          ⚡ SwEeXx ⚡
        </div>

        <div
          style={{
            padding: "20px 30px",
            borderRadius: "20px",
            border: "1px solid #a855f7",
            boxShadow: "0 0 20px rgba(168,85,247,0.3)",
          }}
        >
          Love 💜
        </div>
      </div>
    </section>
  );
}