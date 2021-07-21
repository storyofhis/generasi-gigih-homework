import React from "react";
import Button from "../Button";
import Image from "../image";
import Input from "../input";
import Data from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
  return (
    <React.Fragment>
      <h1 className="App-title">Create Playlist</h1>
      <br />
      <center>
        <div className="App-input">
          <h2>Search for Song</h2>
          <Input />
        </div>
      </center>
      {Data &&
        Data.map((item) => (
          <div className="content">
            <Image key={item.id} url={item.album.images[0].url} name={item.name} artistName={item.artists[0].name} album={item.album.name} />
            <Button name="Play" />
          </div>
        ))}
    </React.Fragment>
  );
}

export default Login;
