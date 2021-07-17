import "./App.css";
import Image from "./components/image";
import Button from "./components/Button";
import Input from "./components/input";
import Data from "./components/data";

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
          {Data.map((item) => (
            <Image key={item.id} url={item.album.images[0].url} name={item.name} artistName={item.artists[0].name} album={item.album.name} />
          ))}
          <Button name="Submit" />
        </div>
      </header>
    </div>
  );
}

export default App;
