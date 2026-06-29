"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 45 },
          color: { value: "#a855f7" },
          links: {
            enable: true,
            color: "#a855f7",
            distance: 150,
            opacity: 0.25,
          },
          move: { enable: true, speed: 1 },
          size: { value: 3 },
          opacity: { value: 0.6 },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}