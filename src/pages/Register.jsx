import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./css/App.css";
import Button from "../components/primitives/Button/Button";
import Input from "../components/primitives/Input/Input";

function Register() {
  const navigate = useNavigate();

  const submitSignUp = async (e) => {
    // Prevent the page from reloading on form submit
    e.preventDefault();

    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const confirmPassword = e.target[4].value;

    if (password !== confirmPassword) {
      return;
    }

    await axios
      .post("https://app.grupoerre.pt:1934/auth/create-user", {
        firstName,
        lastName,
        email,
        password,
        securePasswordFlag: true,
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
    <>
      <div className="background">
        <div className="menu-right">
          <div className="register-menu">
            <h1 className="title">Create</h1>
            <h4 className="secondary-title">Create new account</h4>
            <form className="input-section" onSubmit={(e) => submitSignUp(e)}>
              <Input type="text" label="First Name" placeholder="Carlos" />
              <Input type="text" label="Last Name" placeholder="Torres" />
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
              <Input
                type="password"
                label="Confirm Password"
                placeholder="************"
              />
              <div className="checkbox-section">
                <p className="remember">Already have an account?</p>
                <a className="phrase2">Join here!</a>
              </div>
              <Button>Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
