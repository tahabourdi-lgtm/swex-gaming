"use client";
import {
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaInstagram
} from "react-icons/fa";
export default function Socials() {
  const socials = [
   {
    name: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.com/channels/@me",
  },

  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@Swex-FF",
  },

  {
    name: "TikTok",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@thegeniusswexyy",
  },

  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/therealsweex/",
  },
];

  return (
    <section
      id="socials"
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h2
        style={{
          fontSize: "60px",
          color: "#a855f7",
          textShadow: "0 0 25px #a855f7",
        }}
      >
        Social Links
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
rel="noopener noreferrer"
              onMouseEnter={(e) => {
e.currentTarget.style.transform = "translateY(-10px) scale(1.08)";
    e.currentTarget.style.boxShadow =
      "0 0 45px rgba(168,85,247,0.7)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(168,85,247,0.2)";
  }}
   style={{
              width: "220px",
              height: "120px",
              border: "1px solid #a855f7",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              background: "rgba(168,85,247,0.08)",
              transition: "0.3s",
              boxShadow: "0 0 25px rgba(168,85,247,0.2)",
            }}
          >
            <div style={{ fontSize: "40px" }}>
              {social.icon}
            </div>

            <h3 style={{ marginTop: "10px", color: "#a855f7" }}>
              {social.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}