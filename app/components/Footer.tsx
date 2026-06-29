export default function Footer() {
  return (
    <footer
      style={{
        background: "black",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid rgba(168,85,247,0.4)",
      }}
    >
      <h3
        style={{
          color: "#a855f7",
          fontSize: "30px",
          textShadow: "0 0 20px #a855f7",
        }}
      >
        SWEX
      </h3>

      <p style={{ color: "#aaa" }}>
        © 2026 SWEX. All Rights Reserved.
      </p>

      <a
        href="#home"
        style={{
          color: "#a855f7",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Back To Top ↑
      </a>
    </footer>
  );
}