import { useNavigate } from "react-router-dom";
import Musicplayer from "../music/Musicplayer";
import AnimatedText from "../common/AnimatedText";
import "../assets/styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing valentine-theme">
      {/* Romantic Background Music */}
      <Musicplayer />

      {/* Romantic Text */}
      <div className="landing-content">
        <AnimatedText text="From the moment you came into my life," />
        <AnimatedText text="every day became more beautiful ❤️" />
        <AnimatedText text="This Valentine's Day," />
        <AnimatedText text="I just want to say..." />
        <AnimatedText text="I Love You More Than Words Can Ever Express 💖" />

        <button
          className="start-btn love-btn"
          onClick={() => navigate("/memories")}
        >
          Open My Heart 💌
        </button>
      </div>

      {/* Soft romantic overlay */}
      <div className="vignette romantic-glow" />
    </div>
  );
}
