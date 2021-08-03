import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Index({ handleClick }) {
  return (
    <header>
      <Link className={style.logo} to="/">
        myMUSIC
      </Link>
      <div className={style.navLeft}>
        <ul>
          <li>Premium</li>
          <li>About</li>
          <li>Support</li>
          <li onClick={handleClick}>
            <div className={style.btnAuth}>LOGIN</div>
          </li>
        </ul>
      </div>
    </header>
  );
}
