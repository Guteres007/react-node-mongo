import { useEffect, useState } from "react";
import Api from "../database";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("martin@andrasi.cz");
  const [password, setPassword] = useState("123456");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Api.post(`/auth/login`, {
      email: email,
      password: password,
    });
    localStorage.setItem("token", response.token);
    navigate("/", { replace: true });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="button"
          value={"Odeslat"}
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
}

export default Login;
