import { Link } from "react-router-dom";

const LoginSignUp = ({ loginPath, signUpPath }) => {
  return (
    <div className="LoginSignUp">
      <Link to="/" className={loginPath === "/" ? "active" : ""}>
        Login
      </Link>
      <Link className={signUpPath === "/signup" ? "active" : ""} to="/signup">
        Sign up
      </Link>
    </div>
  );
};

export default LoginSignUp;
