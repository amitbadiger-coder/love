
import { useRef } from "react";

const Musicplayer = () => {
 const audioRef = useRef(null);

  const startMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0;
    audioRef.current.play().catch(() => {});
    
    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.6) {
        v += 0.02;
        audioRef.current.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 200);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/our-song.mp3" loop />
      <button onClick={startMusic} style={{ display: "none" }} id="startMusic" />
    </>
  );
}

export default Musicplayer
