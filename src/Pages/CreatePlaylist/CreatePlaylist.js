import React, { useState } from "react";
import Style from "./style.module.css";
import Card from "../../Components/Card/index";
import Data from "../../constants/DataDummy";
import Bubble from "../../Components/Button/Bubble/index";
import Search from "../../Components/Search/index";
import Profile from "../../Components/Profile/index";
import Form from "../../Components/Forms/index";
import { useDispatch, useSelector } from "react-redux";
import { getTrackData, Filter, create } from "../../Utility/services";
import { trackSelect, trackDeselect } from "../../Redux/selectedSlice";

function Index() {
  const [Tracks, setTracks] = useState(Data);
  const TrackSelected = useSelector((state) => state.selected.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    getTrackData(query, Token).then((data) => (TrackSelected.length > 0 ? setTracks(Filter(data.tracks.items, TrackSelected)) : setTracks(data.tracks.items)));
  };

  const handleDeselect = (data) => {
    dispatch(trackDeselect(trackSelect.filter((item) => item.uri !== data.uri)));
  };

  const handleSelect = (data) => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    if (TrackSelected.length > 0) {
      create(event, user, Token, TrackSelected);
      alert(`Playlist has been created successfully!`);
      dispatch(TrackSelected([]));
      setCreate(false);
    } else {
      alert(`Playlist has not been created yet`);
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Search handleSubmit={handleSearch} />
        <Profile />
      </div>
      <div className={Style.title}>
        <p>Create Playlist</p>
        {TrackSelected.length > 0 && <Bubble handleForm={handleForm} text={Create ? "Cancle" : "Create"} />}
      </div>
      {Create && <Form handleCreate={handleCreate} />}
      <div className={Style.cardItem}>
        {Tracks.map((track) =>
          TrackSelected.find((item) => item.uri === track.uri) ? (
            <Card
              key={track.id}
              image={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              url={track.album.external_urls.spotify}
              btnText="deselect"
              handleSelect={() => handleDeselect(track)}
            />
          ) : (
            <Card
              key={track.uri}
              image={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              url={track.album.external_urls.spotify}
              btnText="select"
              handleClick={() => handleSelect(track)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Index;
