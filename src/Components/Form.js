import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../index.css";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SignUp from "./SignUp";

const Form = () => {
  return (
    <Router>
      <div className="Form">
        <Switch>
          <Route exact path="/">
            <Login loginPath="/" />
          </Route>
          <Route exact path="/signup">
            <SignUp signUpPath="/signup" />
          </Route>
          <Route exact path="/forgotpass">
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Form;
