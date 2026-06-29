"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        zIndex: 9999,
        width: "320px",
        padding: "18px",
        borderRadius: "25px",
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(168,85,247,0.6)",
        boxShadow: "0 0 35px rgba(168,85,247,0.45)",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <img
          src="/cover.jpg"
          alt="cover"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "18px",
            objectFit: "cover",
            boxShadow: "0 0 25px rgba(168,85,247,0.7)",
            animation: playing
              ? "spinCover 6s linear infinite"
              : "none",
            transform: playing ? "scale(1.05)" : "scale(1)",
            transition: "0.3s",
          }}
        />

        <div
          style={{
            width: "190px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-block",
              color: "#a855f7",
              fontWeight: "bold",
              animation: "scrollText 12s linear infinite",
            }}
          >
             THE SMITHS - there is a light that never goes out 
          </div>

          <p
            style={{
              margin: "8px 0 0",
              color: "#0026ff",
              fontSize: "12px",
            }}
          >
            4 U QHIWTY 
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "15px",
          height: "6px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#a855f7",
            boxShadow: "0 0 15px #a855f7",
          }}
        />
      </div>

      <button
        onClick={toggleMusic}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "12px",
          borderRadius: "999px",
          border: "none",
          background: "#a855f7",
          color: "white",
          fontWeight: "bold",
          boxShadow: playing
            ? "0 0 30px #a855f7"
            : "0 0 10px rgba(168,85,247,0.3)",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {playing ? "Pause ⏸" : "Play ▶"}
      </button>

      <div style={{ marginTop: "15px" }}>
        <label
          style={{
            fontSize: "12px",
            color: "#ccc",
          }}
        >
          Volume
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            const v = Number(e.target.value);

            setVolume(v);

            if (audioRef.current) {
              audioRef.current.volume = v;
            }
          }}
          style={{
            width: "100%",
            marginTop: "8px",
          }}
        />
      </div>

      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;

          if (audio.duration) {
            setProgress(
              (audio.currentTime / audio.duration) * 100
            );
          }
        }}
      />

      <style>{`
        @keyframes spinCover {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}