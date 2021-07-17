import "./image.css";
import { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div>
        <center>
          <img src={this.props.url} alt="album-poster" />
          <h1>{this.props.name}</h1>
          <h4>{this.props.artistName}</h4>
          <h4>{this.props.album}</h4>
        </center>
      </div>
    );
  }
}
export default Image;
