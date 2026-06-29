"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const words = [
    "FEAR THE NAME SWEX",
    "DEMON SOUL",
    "BELONG TO TAQWA",
    "NO MERCY",
    "NO FEAR",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setWordIndex((wordIndex + 1) % words.length);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParticlesBackground />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "#9333ea",
          opacity: 0.15,
          filter: "blur(180px)",
          borderRadius: "50%",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="glitch-title"
          data-text="SwEeX4Taq"
          style={{
            fontSize: "120px",
            fontWeight: "900",
            color: "#a855f7",
            textShadow: "0 0 40px #a855f7",
            animation: "pulseGlow 2s infinite ease-in-out",
          }}
        >
          SwEeX4Taq
        </h1>

        <p
          style={{
            fontSize: "28px",
            marginTop: "20px",
            color: "#c084fc",
            textShadow: "0 0 20px #a855f7",
            fontWeight: "700",
            minHeight: "40px",
          }}
        >
          👑 {text}
          <span style={{ animation: "blink 1s infinite" }}>|</span>
          👑
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "18px 40px",
            border: "2px solid #a855f7",
            borderRadius: "20px",
            background: "rgba(168, 85, 247, 0.1)",
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
            display: "inline-block",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: "white",
              fontSize: "24px",
              letterSpacing: "3px",
              textShadow: "0 0 15px #a855f7",
            }}
          >
            ✝️ JESUS IS ALIVE ✝️
          </h3>
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            text-shadow: 0 0 25px #a855f7;
          }

          50% {
            transform: scale(1.07);
            text-shadow: 0 0 60px #c084fc;
          }

          100% {
            transform: scale(1);
            text-shadow: 0 0 25px #a855f7;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}