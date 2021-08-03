import React from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

export default function Profile() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={Style.profile}>
      <p>{user.displayName}</p>
    </div>
  );
}
