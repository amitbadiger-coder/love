import { useEffect } from "react";

export default function HeartCursor() {
  useEffect(() => {
    const handleMove = (e) => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
