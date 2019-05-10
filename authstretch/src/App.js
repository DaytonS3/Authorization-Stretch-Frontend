import React from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

function App(props) {
  function logout() {
    localStorage.removeItem("token");
    props.history.push("/login");
  }
  return (
    <div>
      <h2>User App</h2>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/jokes">Jokes</NavLink>
      <NavLink to="/register">register</NavLink>
      <NavLink type="button" onClick={logout}>
        Logout
      </NavLink>
      <Route path="/login" component={Login} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default withRouter(App);
