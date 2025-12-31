import { useEffect, useState } from "react";

const NewYearCountdown = () => {
 const target = new Date("2025-12-31T23:59:59+05:30").getTime();
  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const t = setInterval(() => setTime(target - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (time <= 0) return <h1>🎆 Happy New Year ❤️</h1>;

  return <h2>{Math.floor(time / 1000)} seconds to midnight</h2>;}

export default NewYearCountdown
