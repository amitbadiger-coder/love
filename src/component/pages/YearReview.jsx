import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import Timeline from "../timeline/Timeline";
import SectionTitle from "../common/SectionTitle";
import MemoryGallary from "../gallary/MemoryGallary";
import TypewriterMessages from "../msg/TypewriterMessages";
import NewYearCountdown from "../countdown/NewYearCountdown";
import "../assets/styles/yearReview.css";

const YearReview =()=> {
  const audioRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Play music on first interaction
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    return () => window.removeEventListener("click", unlockAudio);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".val-section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec, index) => {
        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const days = [
    "Welcome 💖",
    "Rose Day 🌹",
    "Propose Day 💍",
    "Promise Day 🤝",
    "Valentine's Day ❤️",
  ];
            return(
              <>
              <div className="valentine-container">
      <audio ref={audioRef} src="/music/romantic-valentine.mp3" loop />

      {/* Side Indicator */}
      <div className="side-indicator">
        {days.map((day, i) => (
          <div
            key={i}
            className={`dot ${i === activeSection ? "active" : ""}`}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="val-section hero">
        <h1>Valentine Week with My Shreesakhi 💕</h1>
        <p>
          From the day you entered my life,  
          everything became softer, sweeter, and more meaningful ❤️
        </p>
        <span>Scroll to begin our love story ↓</span>
      </section>

      {/* ROSE DAY */}
      <section className="val-section">
        <h2>Rose Day 🌹</h2>
        <p>🌹 Shreesakhi, you are the most beautiful flower in my life.</p>
        <p>🌹 Your smile blooms happiness in my heart.</p>
        <p>🌹 Every rose reminds me how lucky I am to have you.</p>
      </section>

      {/* PROPOSE DAY */}
      <section className="val-section">
        <h2>Propose Day 💍</h2>
        <p>💍 I don’t choose you for a day.</p>
        <p>💍 I choose you for every tomorrow.</p>
        <p>💍 Will you stay with me forever, my Shreesakhi? ❤️</p>
      </section>

      {/* PROMISE DAY */}
      <section className="val-section">
        <h2>Promise Day 🤝</h2>
        <p>🤝 I promise to stand beside you in every situation.</p>
        <p>🤝 I promise to protect your smile.</p>
        <p>🤝 I promise to love you louder every single day.</p>
      </section>

      {/* VALENTINE DAY */}
      <section className="val-section finale">
        <h2>Happy Valentine's Day ❤️</h2>
        <p>
          No matter where life takes us...  
          I will always hold your hand, Shreesakhi 💖
        </p>
        <button
          onClick={() => alert("I Love You Forever, My Shreesakhi ❤️")}
        >
          Open My Heart 💌
        </button>
        <h3>Forever Yours ❤️ Amit</h3>
      </section>
    </div>
              </>
            )
          
 
}
export default YearReview;