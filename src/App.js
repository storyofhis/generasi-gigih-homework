import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <h1>Welcome to myMusic</h1>
      <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Login"}</button>
      {isLoggedIn ? <Login /> : <h2>Please Continue to Log In</h2>}
    </div>
  );
}

export default App;
