import "./css/App.css";
import Button from "../components/primitives/Button/Button";

function Reset() {
  return (
    <>
      <div className="background">
        <div className="menu-right">
          <div className="login-menu-reset">
            <h1 className="title">Reset Password</h1>
            <h4 className="secondary-title">Reset your password</h4>
            <form className="input-section">
              <p className="input-titles">
                Enter your email or phone number associated with your account
              </p>
              <input
                type="text"
                placeholder="Email or phone number"
                className="input-box"
              />
              <div className="checkbox-section">
                <p className="remember">Already have an account?</p>
                <a className="phrase2">Enter here!</a>
              </div>
              <Button>Send Now</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
