import React, { useState, useEffect } from "react";
import Navbar from "./style.module.css";
import Search from "../Search/Index";
import Button from "../Button";

function Index({ handleSearch, handleClick }) {
  const [Auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      setAuth(true);
    }
  }, []);

  return (
    <header>
      <div className={Navbar.logo}>myMusic</div>
      {Auth ? (
        <div>
          <Search handleSubmit={handleSearch} />
        </div>
      ) : (
        <div onClick={handleClick}>
          <Button text="AUTH" />
        </div>
      )}
    </header>
  );
}
export default Index;
