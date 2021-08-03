import style from "./style.module.css";
import React from "react";

function index({ handleCreate }) {
  return (
    <form className={style.form} onSubmit={handleCreate}>
      <div className={style.group}>
        <label htmlFor="title">Title : </label>
        <input className={style.input} name="title" id="title" type="text" placeholder="Title..." minLength="10" />
      </div>
      <div className={style.group}>
        <label htmlFor="description">Description : </label>
        <input className={style.input} name="description" id="description" type="text" placeholder="Description..." minLength="20" />
      </div>
      <button className={style.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default index;
