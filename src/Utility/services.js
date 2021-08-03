// to get Token From Url
export const getTokenFromUrl = (hash) => {
  const stringAfterHastag = hash.substring(1);
  const paramUrl = stringAfterHastag.split("&");
  const paramSplit = paramUrl.reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return paramSplit;
};

// filter the data
export const Filter = (data, TrackSelected) => {
  const tracks = [...TrackSelected.map((T) => Object.assign({}, T)), ...data];
  return [...new Map(tracks.map((t) => [t.uri, t])).values()];
};

// get track the Data
export const getTrackData = async (query, Token) => {
  if (query) {
    return await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
      headers: {
        Authorization: "Bearer " + Token.access_token,
      },
    }).then((response) => response.json());
  }
};

// to store the tracks
const storeTracks = async (data, uri, Token) => {
  await fetch(`https://api.spotify.com/v1/playlists/${data}/tracks?position=0&uris=${uri}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token.access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uris: uri,
      position: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// create playlist
export const create = async (event, user, Token, TrackSelected) => {
  const uri = TrackSelected.map((item) => item.uri);
  await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token.access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: event.target[0].value,
      public: false,
      collaborative: false,
      description: event.target[1].value,
    }),
  })
    .then((response) => response.json())
    .then((data) => storeTracks(data.id, uri, Token));
};

export const current = async (Token) => {
  return await fetch(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: "Bearer " + Token.access_token,
    },
  }).then((response) => response.json());
};
