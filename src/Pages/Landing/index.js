import React from "react";
import Navbar from "../../Components/Navbar/index";
import style from "./style.module.css";

function index() {
  const handleClick = () => {
    // const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const RESPONSE_TYPE = "token";
    const REDIRECT_URI = `http://localhost:3000`;
    const SCOPE = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=4fb15f07e8914cb099f75f47333879a1&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&show_dialog=true`;
  };
  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className={style.container}>
        <div className={style.left}>
          <h1>You Bring the passion, we bring the music.</h1>
          <p>
            Get playlists and albums inspired by the artists and genres you're listening to. 3 months free, then
            <span className={style.leftPrice}> $9.99 / month</span>.
          </p>
          <div className={style.btnAction} onClick={handleClick}>
            Get Started
          </div>
        </div>
        <div className={style.right}>
          <img src={process.env.PUBLIC_URL + "/valen-music.png"} alt="music" />
        </div>
      </div>
    </div>
  );
}

export default index;
