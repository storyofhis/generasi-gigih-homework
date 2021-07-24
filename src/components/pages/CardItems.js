import React, { useState, useEffect } from "react";
import Card from "../Card/index";
import Navbar from "../Navbar/index";
import Data from "../data";

function CardItems() {
  const [Token, setToken] = useState("");
  const [Track, setTrack] = useState([Data]);

  const handleClick = () => {
    const CLIENT_ID = "4fb15f07e8914cb099f75f47333879a1";
    const RESPONSE_TYPE = "token";
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const REDIRECT_URI = "http://localhost:3000";
    const SCOPES = "playlist-read-private";
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&show_dialog=true`;
  };
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
      const acc_token = getReturnedParamsFromSpotifyAuth(window.location.hash);
      setToken(acc_token);
    }
  }, []);

  const getTrackData = (query) => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => setTrack(data.tracks.items));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  console.log(Track);
  return (
    <div>
      <Navbar handleSearch={handleSearch} handleClick={handleClick} />
      <h1 style={{ marginLeft: 20, marginBottom: 0, fontWeight: 600 }}>CREATE PLAYLIST</h1>
      <div className="card-item">
        {Token ? (
          Track.map((item) => <Card key={item.id} image={item.album.images[0].url} title={item.name} artist={item.artists[0].name} album={item.album.name} url={item.album.external_urls.spotify} />)
        ) : (
          <h1>YOU HAVE TO LOG IN FIRTSLY</h1>
        )}
      </div>
    </div>
  );
}

export default CardItems;
