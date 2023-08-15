import "./App.css";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dash from "./Pages/Dash";
import Error from "./Pages/Error";
import Passwordreset from "./Pages/Passwordreset";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/SignUp" Component={SignUp} />
        <Route exact path="/ForgotPassword" Component={ForgotPassword} />
        <Route exact path="/Dash" Component={Dash} />
        <Route
          exact
          path="forgotpassword/:id/:token"
          Component={Passwordreset}
        />
        <Route exact path="*" Component={Error} />
      </Routes>
    </div>
  );
}

export default App;
