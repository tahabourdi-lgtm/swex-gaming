"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Socials", link: "#socials" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#e91389", fontSize: "35px", fontWeight: "900" }}>
        SwEeX GOD 
      </h2>
      <div className="desktop-links" style={{ gap: "30px" }}>
        {links.map((item) => (
  <a
    key={item.name}
    href={item.link}
    style={{
       color: "white",
  textDecoration: "none",
  fontSize: "18px",
  transition: "0.3s",
  textShadow: "0 0 0px #a855f7",
}}
onMouseEnter={(e) => {
  e.currentTarget.style.color = "#a855f7";
  e.currentTarget.style.textShadow = "0 0 15px #a855f7";
  e.currentTarget.style.transform = "translateY(-3px)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = "white";
  e.currentTarget.style.textShadow = "0 0 0px #a855f7";
  e.currentTarget.style.transform = "translateY(0)";
}}
  >
    {item.name}
  </a>
))}
</div>

     <button
  className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        style={{
          background: "transparent",
          border: "1px solid #a855f7",
          color: "#a855f7",
          fontSize: "28px",
          padding: "5px 12px",
          borderRadius: "10px",
        }}
      >
        {open ? "✕" : "☰"}
      </button>

       <div
  style={{
    position: "fixed",
    top: "80px",
    right: open ? "20px" : "-250px",
    opacity: open ? 1 : 0,
    background: "rgba(0,0,0,0.9)",
    border: "1px solid #a855f7",
    borderRadius: "18px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 0 25px rgba(168,85,247,0.6)",
    transition: "all 0.4s ease",
    pointerEvents: open ? "auto" : "none",
  }}
>
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
    </nav>
  );
}