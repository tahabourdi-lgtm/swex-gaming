"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverIn = () => setHovering(true);
    const hoverOut = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const items = document.querySelectorAll("a, button");
    items.forEach((item) => {
      item.addEventListener("mouseenter", hoverIn);
      item.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      items.forEach((item) => {
        item.removeEventListener("mouseenter", hoverIn);
        item.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x - 6,
          top: pos.y - 6,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#c084fc",
          boxShadow: "0 0 25px #c084fc",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />

      <div
        style={{
          position: "fixed",
          left: pos.x - (hovering ? 35 : 22),
          top: pos.y - (hovering ? 35 : 22),
          width: hovering ? "70px" : "44px",
          height: hovering ? "70px" : "44px",
          borderRadius: "50%",
          border: "1px solid #a855f7",
          boxShadow: "0 0 35px rgba(168,85,247,0.8)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "all 0.12s ease-out",
        }}
      />
    </>
  );
}