import React, { Component } from "react";
import Style from "./style.module.css";

export class index extends Component {
  render() {
    return (
      <div className={Style.img}>
        <img src={this.props.src} alt="thumbnail" />
      </div>
    );
  }
}

export default index;
