import { useEffect, useState } from "react";

export default function Midnight() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    setTimeout(() => setShowFireworks(true), 1000);
    
    // Create star trail effect
    const createStar = (x, y) => {
      const star = document.createElement('div');
      star.className = 'star-cursor';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      document.body.appendChild(star);
      
      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.7) {
        createStar(e.clientX, e.clientY);
      }
    });

    // Create snow/confetti effect
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 10
        });
      }
      setConfetti(flakes);
    };

    createSnowflakes();

    // Play ambient sound
    const audio = new Audio('/sounds/ambient-new-year.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    audio.play().catch(e => console.log("Audio play failed:", e));

    return () => {
      document.removeEventListener('mousemove', createStar);
      audio.pause();
    };
  }, []);

  return (
    <div className="midnight">
      {/* Fireworks */}
      {showFireworks && (
        <>
          <div className="fireworks" />
          {/* Additional fireworks */}
          <div className="firework-1"></div>
          <div className="firework-2"></div>
          <div className="firework-3"></div>
        </>
      )}
      
      {/* Confetti/Snow */}
      {confetti.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`
          }}
        />
      ))}

      {/* Star Cursor Effect (handled by JS) */}

      <div className="midnight-content">
        <h1>Happy New Year, My Shreesakhi❤️</h1>

        <p>
          From <strong>Nidasoshi</strong> to <strong>Solapur</strong>,<br />
          miles tried to keep us apart,<br />
          but hearts don't understand distance.
          <br /><br />

          <strong>Tanu</strong>, my <strong>Shreesakhi</strong>,<br />
          in every late-night call,<br />
          in every silent prayer,<br />
          I found home in you.
          <br /><br />

          This year taught me one truth —<br />
          love is not about being close,<br />
          it's about choosing each other,<br />
          even when the world feels far.
          <br /><br />

          As this new year begins,<br />
          I don't wish for anything more,<br />
          because I already have you.
          <br /><br />

          I choose you —<br />
          in every version of tomorrow,<br />
          in every lifetime after this one,<br />
          today, tomorrow, and always. ❤️
        </p>

        {/* Optional Countdown Timer */}
        <div className="countdown-timer">
          🎉 00:00:00 🎉
        </div>
      </div>
    </div>
  );
}