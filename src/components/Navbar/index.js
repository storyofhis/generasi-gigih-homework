import { useState } from "react";
import style from "./style.module.css";
import { autorize, getTracks } from "../../libs/spotify";
import { useSelector, useDispatch } from "react-redux";
import { setTracks } from "../../store/playlist";
import { Button } from "@chakra-ui/button";
import { FaSpotify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

// for Button
const Buttons = ({ variant = "primary", icon, children, ...props }) => {
  <Button colorScheme="blue" variant="solid" mr="5" className={style.button + " " + style["button-" + variant]} {...props}>
    {icon} {children}
  </Button>;
};

const Navbar = () => {
  const [query, setQuery] = useState("");
  const { isAuth, access_token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handle = (event) => {
    event.preventDefault();
    if (!query) alert(`Please input the query`);
    getTracks(access_token, {
      q: query,
      type: "track",
      limit: 10,
    }).then((response) => dispatch(setTracks(response.tracks.items)));
  };

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link to="/">GenGIGIH</Link>
      </div>
      <form className={style.search} onSubmit={handle}>
        <input type="text" name="query" placeholder="Search..." onChange={(event) => setQuery(event.target.value)} value={query} />
        <Buttons onClick={handle} variant="transparent">
          <FiSearch size="1.25em" style={{ margin: 0 }}></FiSearch>
        </Buttons>
      </form>
      <div className={style.user}>
        {isAuth ? (
          <span>
            Hello <strong>{user.display_name}</strong>
          </span>
        ) : (
          <Buttons onClick={autorize} icon={<FaSpotify />}>
            Login
          </Buttons>
        )}
      </div>
    </div>
  );
};

export default Navbar;
