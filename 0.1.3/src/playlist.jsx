import React from "react";

class Playlist extends React.Component {
  render() {
    return (
      <div>
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b> mode.
        </small>
        <p>api key : {process.env.REACT_APP_NOT_SECRET_CODE}</p>
        <form>
          <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
        </form>
      </div>
    );
  }
}
export default Playlist;
