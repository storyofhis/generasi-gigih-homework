import React, { useEffect, useState } from "react";
import "./WebApp.css";
import SpotifyGetPlaylist from "./components/SpotifyGetPlaylists/SpotifyGetPlaylists";

// https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
// acsess_token : access_token=BQDnLr_aSajv554VHT6FMmu4ObYadOWCHIyZz_kVhqjaVQs4RMcoHcswAFVuH6zaMwdRYXNi3cFsYNR43dHk4UvPkpaeynfuN641vzKzDnJeWkywZChpvvgCNCmWLYYJYkB4EIPbex6mq1F6VAzosmJKuj3t_egUyXkkbJzM6sI
// http://localhost:3000/webapp#access_token=BQDnLr_aSajv554VHT6FMmu4ObYadOWCHIyZz_kVhqjaVQs4RMcoHcswAFVuH6zaMwdRYXNi3cFsYNR43dHk4UvPkpaeynfuN641vzKzDnJeWkywZChpvvgCNCmWLYYJYkB4EIPbex6mq1F6VAzosmJKuj3t_egUyXkkbJzM6sI&token_type=Bearer&expires_in=3600

const WebApp = () => {
  const [Token, setToken] = useState("");

  const CLIENT_ID = "4fb15f07e8914cb099f75f47333879a1";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/webapp";
  const SPACE_DELIMITER = "%20";
  const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "playlist-read-private"];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplit = paramsInUrl.reduce((accumulator, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulator[key] = value;
      return accumulator;
    }, {});
    return paramsSplit;
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
      setToken(access_token);
    }
  });

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="content">
      <h1>Hi!</h1>
      <button onClick={handleLogin}>login to spotify</button>
      <SpotifyGetPlaylist />
    </div>
  );
};

export default WebApp;
