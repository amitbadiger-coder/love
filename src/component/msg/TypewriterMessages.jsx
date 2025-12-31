import { useEffect, useState } from "react";

const messages =[
  "Happy New Year ❤️",
  "Distance never stopped us",
  "I choose you every day",
  "Ni kisad Over Madati barta barta , but en madod love madiden andr yalla nan tilkobek nin hanta over madakin love madideni. but i love u shreesakhi...",
  "e hosa year nam 2rigu chalo success sigli(ni ng sigli) over madkont..",
  "I pray for u every day in my prayers.",
  "This is my Worst Phase. I know but in this phase ur with me I am so glad to have u. #kutriiii",
  "Ni Nakkont er vtt. Na satru ni Nakkont eru!!"
]


const TypewriterMessages = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let char = 0;
    const interval = setInterval(() => {
      setText(messages[index].slice(0, char++));
      if (char > messages[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setIndex((i) => (i + 1) % messages.length);
        }, 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [index]);

  return <h2 className="typewriter">{text}</h2>;
}

export default TypewriterMessages