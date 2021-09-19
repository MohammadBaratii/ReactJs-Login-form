import { useState } from "react";
import LoginSignUp from "./LoginSignUp";

const SignUp = ({ signUpPath }) => {
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
  const [rePassInputType, setRePassInputType] = useState("password");
  const handleSecondIcon = (e) => {
    e.target.classList.toggle("fa-eye-slash");
    if (rePassInputType === "password") {
      setRePassInputType("text");
    } else {
      setRePassInputType("password");
    }
  };
  return (
    <div className="SignUp">
      <h1>Sign up form</h1>
      <LoginSignUp signUpPath={signUpPath} />
      <form onSubmit={handleSubmit} className="SignUp-form">
        <input required type="text" placeholder="Enter your Email" />
        <div className="pass">
          <input
            required
            type={passInputType}
            placeholder="Enter your Password"
          />
          <i onClick={handleIcon} className="far fa-eye"></i>
        </div>
        <div className="pass">
          <input
            required
            type={rePassInputType}
            placeholder="Enter your Password again"
          />
          <i onClick={handleSecondIcon} className="far fa-eye"></i>
        </div>
        <button
          onClick={() => {
            console.log(signUpPath);
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
