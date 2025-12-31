import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SECRET = "amitlovestanu"; // change to something meaningful

  const handleSubmit = () => {
    if (password === SECRET) {
      alert("kisadi la... Dodd")
      navigate("/welcome");
    } else {
      alert("Not quite… but my heart knows you ❤️");

    }
  };

  return (
    <div className="gate">
     <h1>For My Shreesakhi ❤️</h1>
<p>
  This space was made only for you, Tanu.<br />
  Enter the one word that holds our forever.
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
