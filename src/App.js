import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as ROUTES from "./constants/routes";
import "./App.css";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
// import Hero from "./components/Hero/Hero";
// import SignUpForm from "./components/SignUpForm/SignUpForm";
import WebApp from "./components/pages/WebApp/WebApp";

// import Login from "./components/Login/login";

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <WebApp />
    </div>
    // // <Router>
    //   {/* <NavigationBar /> */}
    //   // <Switch>
    //     {/* <Route path={ROUTES.LOG_IN} component={SignUpForm} /> */}
    //     // <Route path={ROUTES.LOG_IN} component={WebApp} />
    //     // <Route path={ROUTES.HOME} component={Hero} />
    //     {/* <Route path={ROUTES.WEB_APP} component={WebApp} /> */}

    //     {/* <h1>Welcome to myMusic</h1>
    //     <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Login"}</button>
    //     {isLoggedIn ? <Login /> : <h2>Please Continue to Log In</h2>} */}
    //   // </Switch>
    // // </Router>
  );
}

export default App;
