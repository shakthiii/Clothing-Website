import React from "react";
// import crown from "../../assets/crown.svg";
import "./NavBar.style.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navigation">
        <Link className="Logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="links">
          <Link className="nav-link" to="/men">
            MENS
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
