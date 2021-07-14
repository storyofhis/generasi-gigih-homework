import "./App.css";
import Image from "./image";
import Button from "./Button";
import Input from "./input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Create Playlist</h1>
        <br />
        <center>
          <div className="App-input">
            <h2>Search for Song</h2>
            <Input />
          </div>
        </center>
        <div className="content">
          <Image alt="album-poster" />
          <Button />
        </div>
      </header>
    </div>
  );
}

export default App;
