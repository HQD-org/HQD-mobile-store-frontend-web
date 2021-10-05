import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./constants/Login";
import Register from "./constants/Register";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Register} />
      </Switch>
    </>
  );
}

export default App;
