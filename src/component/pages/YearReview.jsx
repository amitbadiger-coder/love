import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import Timeline from "../timeline/Timeline";
import SectionTitle from "../common/SectionTitle";
import MemoryGallary from "../gallary/MemoryGallary";
import TypewriterMessages from "../msg/TypewriterMessages";
import NewYearCountdown from "../countdown/NewYearCountdown";
import "../assets/styles/yearReview.css";

const YearReview =()=> {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [ ,setIsPlaying] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  // Handle user interaction for audio
  const handleUserInteraction = useCallback(() => {
    if (!userInteracted) {
      setUserInteracted(true);
      // Try to play audio silently to unlock audio context
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play()
          .then(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 0.3;
          })
          .catch(() => {
            // Silent fail for autoplay restrictions
          });
      }
    }
  }, [userInteracted]);

  // Setup user interaction listeners
  useEffect(() => {
    const interactions = ['click', 'touchstart', 'keydown', 'scroll'];
    const handleInteraction = () => handleUserInteraction();
    
    interactions.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });
    
    return () => {
      interactions.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [handleUserInteraction]);

  /* 🎶 Play music on user interaction */
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current && userInteracted) {
        audioRef.current.volume = 0.3;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Audio play failed:", e));
        window.removeEventListener("scroll", playMusic);
      }
    };
    
    if (userInteracted) {
      window.addEventListener("scroll", playMusic);
    }
    
    return () => window.removeEventListener("scroll", playMusic);
  }, [userInteracted]);

  /* 🎬 Scene reveal on scroll */
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
      
      // Detect active scene
      const sections = document.querySelectorAll(".cinematic-section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveScene(index);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🎆 Enhanced fireworks */
  const launchFireworks = useCallback(() => {
    const container = document.getElementById("fireworks-container");
    if (!container) return;
    
    const colors = ["#FF6B8B", "#4ECDC4", "#FFD166", "#06D6A0", "#EF476F"];
    const types = ["circle", "heart", "star"];
    
    // Create multiple fireworks
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        const firework = document.createElement("div");
        firework.className = "cinematic-firework";
        
        // Random position
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const size = 3 + Math.random() * 5;
        const delay = Math.random() * 0.5;
        
        firework.style.left = `${x}%`;
        firework.style.top = `${y}%`;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.backgroundColor = color;
        firework.style.animationDelay = `${delay}s`;
        firework.dataset.type = type;
        
        container.appendChild(firework);
        
        // Remove after animation
        setTimeout(() => {
          if (firework.parentNode === container) {
            container.removeChild(firework);
          }
        }, 2000);
      }, i * 80);
    }
  }, []);

  /* 🕛 Midnight transition */
  const goMidnight = useCallback(() => {
    if (!userInteracted) {
      alert("Please interact with the page first (click or tap anywhere) to unlock animations.");
      return;
    }
    
    setFadeOut(true);
    launchFireworks();
    
    // Add special effects
    document.body.classList.add("midnight-transition");
    
    // Navigate after effects
    setTimeout(() => {
      navigate("/midnight");
    }, 3500);
  }, [navigate, launchFireworks, userInteracted]);

  // Scene titles
  const sceneTitles = [
    "Our Year in Review",
    "The Journey",
    "Precious Memories", 
    "Heartfelt Words",
    "The Countdown"
  ];

  // Handle scene navigation
  const goToScene = (index) => {
    const sections = document.querySelectorAll(".cinematic-section");
    if (sections[index]) {
      sections[index].scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`cinematic-review ${fadeOut ? "fade-out" : ""}`}
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src="/music/cinematic-love.mp3" 
        loop 
        preload="metadata"
      />
      
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scene Indicator */}
      <div className="scene-indicator">
        <div className="scene-title">
          {sceneTitles[activeScene]}
        </div>
        <div className="scene-dots">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`scene-dot ${dot === activeScene ? "active" : ""}`}
              onClick={() => goToScene(dot)}
              aria-label={`Go to scene ${dot + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fireworks Container */}
      <div id="fireworks-container" className="fireworks-container" />

      {/* HERO SCENE */}
      <section className="cinematic-section hero-scene">
        <div className="hero-content">
          <SectionTitle 
            title="Our Year in Review" 
            subtitle="A Cinematic Love Story"
          />
          
          <p className="hero-quote">
            "Across miles, through time, and forever in love ❤️"
          </p>
          
          {!userInteracted && (
            <div className="interaction-prompt">
              <div className="pulse-circle"></div>
              <p>Click or tap anywhere to begin</p>
            </div>
          )}
          
          <div className="scroll-hint">
            Scroll to begin our story ↓
          </div>
        </div>
        
        {/* Opening Curtain Effect */}
        <div className={`opening-curtains ${userInteracted ? "opened" : ""}`} />
      </section>

      {/* TIMELINE SCENE */}
      <section className="cinematic-section timeline-scene">
        <div className={`scene-content ${activeScene >= 1 ? "visible" : ""}`}>
          <SectionTitle 
            title="The Journey" 
            subtitle="Every step led us closer"
          />
          <div className="scene-container">
            <Timeline />
          </div>
        </div>
      </section>

      {/* MEMORIES SCENE */}
      <section className="cinematic-section memories-scene">
        <div className={`scene-content ${activeScene >= 2 ? "visible" : ""}`}>
          <SectionTitle 
            title="Precious Memories" 
            subtitle="Moments frozen in time"
          />
          <div className="scene-container">
            <MemoryGallary />
          </div>
        </div>
      </section>

      {/* MESSAGES SCENE */}
      <section className="cinematic-section messages-scene">
        <div className={`scene-content ${activeScene >= 3 ? "visible" : ""}`}>
          <div className="scene-container">
            <TypewriterMessages />
          </div>
        </div>
      </section>

      {/* FINAL SCENE */}
      <section className="cinematic-section finale-scene">
        <div className={`scene-content ${activeScene >= 4 ? "visible" : ""}`}>
          <div className="finale-content">
            <NewYearCountdown />
            
            <button 
              className="cinematic-button"
              onClick={goMidnight}
              disabled={!userInteracted}
            >
              <span className="button-sparkle">✨</span>
              When the Clock Strikes Midnight
              <span className="button-sparkle">✨</span>
            </button>
            
            {!userInteracted && (
              <p className="interaction-required">
                (Interact with page to unlock this button)
              </p>
            )}
            
            <p className="finale-text">
              Our story continues... into the new year
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default YearReview;