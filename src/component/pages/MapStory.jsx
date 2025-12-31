import { useNavigate } from "react-router-dom";
import AnimatedText from "../common/AnimatedText";
import Distancemap from "../map/Distancemap";
import "../assets/styles/mapStory.css"


export default function MapStory() {
  const navigate = useNavigate();

  return (
    <div className="map-story">
      {/* Fullscreen Map */}
      <Distancemap />

      {/* Story Overlay */}
      <div className="story-overlay">
        <AnimatedText text="From Nidasoshi to Solapur," />
        <AnimatedText text="two cities, one story." />

        <button
          className="continue-btn"
          onClick={() => navigate("/memories")}
        >
          Continue ❤️
        </button>
      </div>
    </div>
  );
}
