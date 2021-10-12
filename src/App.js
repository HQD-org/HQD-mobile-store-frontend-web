import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./constants/Login";
import Register from "./constants/Register";
import ForgotPassword from "./constants/ForgotPassword";
import OTPcode from "./constants/OTPcode";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/otp-code" component={OTPcode} />
      </Switch>
    </>
  );
}

export default App;
