import React from "react";
import Style from "./style.module.css";
function index({ text, handleForm }) {
  return (
    <div>
      <button className={Style.button} onClick={handleForm}>
        {text}
      </button>
    </div>
  );
}

export default index;
