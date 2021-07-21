import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import * as ROUTES from "../../constants/routes";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <header>
        <nav>
          <ul>
            <Link to={ROUTES.HOME}>
              <li>Home</li>
            </Link>
            <Link to={ROUTES.SIGN_UP}>
              <li>Sign Up</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavigationBar;
