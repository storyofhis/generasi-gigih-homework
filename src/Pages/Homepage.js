import { useEffect } from "react";
import { getProfile } from "../libs/spotify";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, storeUser } from "../store/auth";

const useAuth = () => {
  const { isAuth, access_token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const effects = () => {
    if (!isAuth && window.location.hash) {
      const params = window.location.hash.substr(1).split("&");
      params.forEach((item) => {
        const [key, value] = item.split("=");
        if (key === "access_token") dispatch(login(value));
      });
    }
    if (isAuth && Object.keys(user).length === 0) {
      getProfile(access_token).then((user) => {
        dispatch(storeUser(user));
        history.push("/create-playlist");
      });
    }
  };
  useEffect(effects, [isAuth, access_token, user, history, dispatch]);
};

const Homepage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <p>You are authorized</p>
  ) : (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "var(--dark-foreground-color)",
        borderRadius: 4,
      }}
    >
      <p>
        Pwease authorize yourself by clicking that nice looking button on
        <strong> top-right</strong> corner of the page before using this app.
      </p>
    </div>
  );
};

export default Homepage;
