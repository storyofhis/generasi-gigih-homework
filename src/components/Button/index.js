import Style from "./style.module.css";
import React from "react";

const Button = ({ text }) => {
  return (
    <button type="submit" className={Style.Button}>
      {text}
    </button>
  );
};

export default Button;
