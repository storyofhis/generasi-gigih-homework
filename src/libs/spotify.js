const BASE_URL = "https://api.spotify.com/v1";
const RESPONSE_TYPE = "token";
const SCOPE = "user-read-private user-read-email";

export const authURL = () => {
  let url = `https://accounts.spotify.com/authorize?response_type=${RESPONSE_TYPE}&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=${SCOPE}`;
  return url;
};

export const autorize = () => {
  window.location.replace(authURL());
};

export const getProfile = async (access_token) => {
  const fetchProfile = await fetch(`${BASE_URL}/me`, {
    headers: { Authorization: "Bearer " + access_token },
  });
  fetchProfile.then((response) => response.json());
  return fetchProfile;
};

export const getTracks = (access_token, options) => {
  const params = new URLSearchParams(options).toString();
  const fetchGetTracks = fetch(`${BASE_URL}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  fetchGetTracks.then((response) => response.json());
  return fetchGetTracks;
};

export const postPlaylist = (access_token, user_id, payload) => {
  const fetchPostPlaylists = fetch(`${BASE_URL}/users/${user_id}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: JSON.stringify(payload),
  });
  fetchPostPlaylists.then((response) => response.json());
  return fetchPostPlaylists;
};

export const postPlaylistTracks = async (access_token, playlist_id, payload) => {
  const fetchPostPlaylistsTracks = await fetch(`${BASE_URL}/playlists/${playlist_id}/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: JSON.stringify(payload),
  });
  fetchPostPlaylistsTracks.then((response) => response.json());
  return fetchPostPlaylistsTracks;
};
