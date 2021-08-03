import React from "react";
import style from "./style.module.css";

function Index({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input className={style.input} type="text" name="query" placeholder="search your song" />
      <button className={style.button} type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
}

export default Index;
