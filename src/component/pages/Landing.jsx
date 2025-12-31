import { useNavigate } from "react-router-dom";
import Musicplayer from "../music/Musicplayer";
import AnimatedText from "../common/AnimatedText";
import "../assets/styles/landing.css"

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Background music */}
      <Musicplayer />

      {/* Cinematic text */}
      <div className="landing-content">
        <AnimatedText text="No matter the distance," />
        <AnimatedText text="we begin this new year together." />

        <button
          className="start-btn"
          onClick={() => navigate("/distance")}
        >
          Start Our Journey ❤️
        </button>
      </div>

      {/* Soft vignette overlay */}
      <div className="vignette" />
    </div>
  );
}
