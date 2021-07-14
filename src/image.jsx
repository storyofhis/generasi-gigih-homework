import "./image.css";
import Data from "./data";

function Image() {
  fetch(Data.album.images)
    .then((Data) => {
      return (
        <div>
          <center>{/* <img src={Data.album.images[0].url} alt="album-poster" /> */}</center>
        </div>
      );
    })
    .catch((err) => alert("terjadi Error" + err));
  return (
    <div>
      <center>
        <img src={Data.album.images[0].url} alt="album-poster" />
        <h4>{Data.name}</h4>
        <h4>{Data.album.artists[0].name}</h4>
        <h4>{Data.album.name}</h4>
      </center>
    </div>
  );
}
export default Image;
