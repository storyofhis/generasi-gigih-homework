import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/userSlice";
import Style from "./style.module.css";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import LikedSong from "../LikedSong";

const routes = [
  {
    path: "/create-playlist",
    main: () => <CreatePlaylist />,
  },
  {
    path: "/liked-song",
    main: () => <LikedSong />,
  },
];

function Index() {
  const Token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://api.spotify.com/v1/me`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(login(data)));
  }, [Token, dispatch]);
  return (
    <div className={Style.container}>
      <div className={Style.sidebar}>
        <Link className={Style.logo}>myMUSIC</Link>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Recomend</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              FOR YOU
            </Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Library
            </Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Radio Station
            </Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>My Music</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Create Playlist
            </Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Liked Song
            </Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Playlist</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Lofi Hiphop
            </Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}>
              <i className="fas fa-compact-disc" />
              Jepun
            </Link>
          </li>
        </ul>
      </div>
      <div className={Style.content}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Index;