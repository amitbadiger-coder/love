import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SECRET = "at"; // change to something meaningful

  const handleSubmit = () => {
    if (password === SECRET) {
      alert("welcome to my world!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      navigate("/welcome");
    } else {
      alert("Not quite… but my heart knows you ❤️");

    }
  };

  return (
    <div className="gate">
     <h1>For My Shreesakhi ❤️</h1>
<p>
  Over Acting madkont erod vtt!!!! <br />
  Kishyod bid jara enn re .. mature aagu Naii!!!!!!!!!!
</p>


      <input
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
}
