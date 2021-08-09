import "./App.css";
import Homepage from "./Pages/Homepage";
import CreatePlaylist from "./Pages/CreatePlaylist";
import Sidebar from "./Components/Sidebar/index";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/index";
import { useSelector } from "react-redux";

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Sidebar />
          <Switch>
            <Route path="/create-playlist">{isAuth ? <CreatePlaylist /> : <Redirect to="/" />}</Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
