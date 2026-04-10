import { useState } from "react";
import axios from "axios";
import "./auth.css";
import Button from "../../components/general/Button";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = _switch
      ? "http://localhost:8000/api/auth/login"
      : "http://localhost:8000/api/auth/register";

    try {
      const response = await axios.post(url, {
        username,
        password,
      });

      localStorage.setItem("accessToken", response.data.accessToken);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Authentication request failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-switch">
          <button
            type="button"
            className={_switch ? "active" : ""}
            onClick={() => setSwitch(true)}
          >
            Sign In
          </button>

          <button
            type="button"
            className={!_switch ? "active" : ""}
            onClick={() => setSwitch(false)}
          >
            Sign Up
          </button>
        </div>

        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}

        <div className="auth-submit">
          <Button label={_switch ? "Sign In" : "Sign Up"} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Authentication;