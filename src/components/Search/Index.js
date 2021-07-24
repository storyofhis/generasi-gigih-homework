import React from "react";
import Search from "./style.module.css";

function Index({ handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="search song..." />
        <button className={Search.btn} type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}

export default Index;
