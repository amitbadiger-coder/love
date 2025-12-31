

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import amit from "../../images/WhatsApp Image 2025-12-31 at 10.38.38 PM.jpeg"

const myLocation = [16.4285, 74.6010];     // Nidasoshi
const herLocation = [17.6599, 75.9064];   // Solapur

const icon = new L.Icon({
  iconUrl: amit,
  iconSize: [35, 35],
});

const Distancemap = () => {
  return (
    <div className="map-wrapper">
      <MapContainer center={[17, 75]} zoom={7} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <Marker position={myLocation} icon={icon} />
        <Marker position={herLocation} icon={icon} />
        <Polyline positions={[myLocation, herLocation]} pathOptions={{ color: "#ff4d6d", weight: 4 }} />
      </MapContainer>
      <div className="map-overlay">
        <h1>No matter the distance</h1>
        <p>we enter the new year together ❤️</p>
      </div>
    </div>
  )
}

export default Distancemap