import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState();
  return (
    <div>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              ReachMe
            </Link>
          </h4>
          {loggedIn ? (
            <HeaderLoggedIn setLoggedIn={setLoggedIn} />
          ) : (
            <HeaderLoggedOut setLoggedIn={setLoggedIn} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
