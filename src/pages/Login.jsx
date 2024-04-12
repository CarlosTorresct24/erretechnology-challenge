import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./css/App.css";
import Button from "../components/primitives/Button/Button";
import Input from "../components/primitives/Input/Input";

export default function Login() {
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    // Prevent the page from reloading on form submit
    e.preventDefault();

    await axios
      .post("https://app.grupoerre.pt:1934/auth/login", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((data) => {
        if (data.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="background">
      <div className="menu-right">
        <div className="login-menu">
          <h1 className="title">Login</h1>
          <h4 className="secondary-title">Login to your account</h4>
          <form className="input-section" onSubmit={(e) => submitLogin(e)}>
            <Input
              type="email"
              label="Email"
              placeholder="carlos@example.com"
            />
            <Input
              type="password"
              label="Password"
              placeholder="************"
            />

            <div className="remember-section">
              <div className="checkbox-section">
                <div className="checkbox"></div>
                <p className="remember">Remember me</p>
              </div>
              <p className="reset">Reset Password?</p>
            </div>

            <Button>Join In</Button>
            <div className="no-account">
              <p className="phrase1">Don't have an account yet?</p>
              <a className="phrase2">Create one now!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
