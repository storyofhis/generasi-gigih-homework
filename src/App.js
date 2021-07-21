import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
// import Login from "./components/Login/login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import SignUpForm from "./components/SignUpForm/SignUpForm";

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} component={Hero} />

        {/* <h1>Welcome to myMusic</h1>
        <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Login"}</button>
        {isLoggedIn ? <Login /> : <h2>Please Continue to Log In</h2>} */}
      </Switch>
    </Router>
  );
}

export default App;
