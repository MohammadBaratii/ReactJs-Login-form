import { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";

const Login = ({ loginPath }) => {
  const [passInputType, setPassInputType] = useState("password");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleIcon = (e) => {
    e.target.classList.toggle("fa-eye-slash");
    if (passInputType === "password") {
      setPassInputType("text");
    } else {
      setPassInputType("password");
    }
  };
  return (
    <div className="Login">
      <h1>Login form</h1>
      <LoginSignUp loginPath={loginPath} />
      <form onSubmit={handleSubmit} className="Login-form">
        <input required type="text" placeholder="Enter your Email" />
        <div className="pass">
          <input
            required
            type={passInputType}
            placeholder="Enter your Password"
          />
          <i onClick={handleIcon} className="far fa-eye"></i>
        </div>
        <Link to="/forgotpass">forgot your password?</Link>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
