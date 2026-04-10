import "./auth.css";
import Input from "../../components/general/Input";

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body">
      <h2>Create a new account</h2>

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

export default Register;