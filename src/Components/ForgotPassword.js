import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword">
      <h1>This is a page for forgotten password!</h1>
      <Link to="/">Go to login page</Link>
    </div>
  );
};

export default ForgotPassword;
