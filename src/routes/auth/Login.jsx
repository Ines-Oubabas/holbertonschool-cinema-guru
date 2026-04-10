import "./auth.css";
import Input from "../../components/general/Input";

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body">
      <h2>Sign in with your account</h2>

      <Input
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        inputAttributes={{ placeholder: "" }}
      />

      <Input
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        inputAttributes={{ placeholder: "" }}
      />
    </div>
  );
}

export default Login;