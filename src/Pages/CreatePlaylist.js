import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { setSelectedTracks, substract } from "../store/playlist";
import { clearSelectedForm, setForm } from "../store/playlist";
import { postPlaylist, postPlaylistTracks } from "../libs/spotify";
import { Link } from "react-router-dom";

// Create a Button
const Button = ({ variant = "primary", icon, children, ...props }) => {
  return (
    <button className={style.button + " " + style["button-" + variant]} {...props}>
      {icon} {children}
    </button>
  );
};

// Create a tracks
const Track = ({ track }) => {
  const dispatch = useDispatch();
  const selectTracks = useSelector((state) => state.playlist.selectTracks);
  const isSelect = selectTracks.includes(track.uri);

  const artists = track.artists.map((artist, index) => {
    return (
      <Link to={artist.external_urls.spotify} key={artist.id}>
        {artist.name + (index === track.tracks.length - 1 ? "" : ", ")}
      </Link>
    );
  });
  const image = track.album.imagesfind((image) => image.width === 64);

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={image.url} alt={track.name} />
      <span className={style.info}>
        <a className={style.title} href={track.external_urls.spotify}>
          {track.name}
        </a>
        <p className={style.artist}>{artists}</p>
      </span>
      <span className={style.action}>
        <Button
          onClick={() => {
            if (isSelect) {
              dispatch(substract(track.uri));
            } else {
              dispatch(setSelectedTracks(track.uri));
            }
          }}
          variant={isSelect ? "secondary" : "primary"}
        >
          {isSelect ? "Deselect" : "Select"}
        </Button>
      </span>
    </div>
  );
};

// Playlist Form
const PlaylistForm = () => {
  const { access_token, user } = useSelector((state) => state.auth);
  const { selectedTracks, form } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const clearSelection = () => {
    dispatch(clearSelectedForm());
  };

  return (
    <div className={style.wrapper}>
      <h2>Create Playlist</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postPlaylist(access_token, user.id, {
            name: form.title,
            description: form.description,
            public: false,
          })
            .then((playlist) => {
              return postPlaylistTracks(access_token, playlist.id, {
                uris: selectedTracks,
              });
            })
            .then(() => {
              clearSelection();
              alert(`Playlist Created`);
            });
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          minLength="10"
          onChange={(event) => {
            dispatch(setForm({ [event.target.name]: event.target.value }));
          }}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          minLength="20"
          onChange={(event) => {
            dispatch(setForm({ [event.target.name]: event.target.value }));
          }}
          value={form.description}
        ></textarea>
        <div style={{ textAlign: "right" }}>
          <Button onClick={clearSelection} type="button" variant="transparent">
            Clear
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              postPlaylist(access_token, user.id, {
                name: form.title,
                description: form.description,
                public: false,
              })
                .then((playlist) => {
                  return postPlaylistTracks(access_token, playlist.id, {
                    uris: selectedTracks,
                  });
                })
                .then(() => {
                  clearSelection();
                  alert(`Playlist Created`);
                });
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

const CreatePlaylist = () => {
  const { tracks } = useSelector((state) => state.playlist);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "5vw" }}>
      <div>
        <h2>Tracks</h2>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
      <PlaylistForm />
    </div>
  );
};

export default CreatePlaylist;
