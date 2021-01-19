import React from "react";
import { NavLink } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useAuthenticated } from "../hooks";

import "../styles/Menu.css";

const MenuItem = ({ to, children }) => (
  <li>
    <NavLink to={to} exact activeClassName="active">
      {children}
    </NavLink>
  </li>
);

const NavBar = (props) => {
  const [authenticated] = useAuthenticated();

  return (
    <Menu {...props}>
      <MenuItem to="/">Home</MenuItem>
      {authenticated ? (
        <>
          <MenuItem to="/plans/new">New Tour Plan</MenuItem>
          <MenuItem to="/routes/new">New Route</MenuItem>
          <MenuItem to="/logout">Logout</MenuItem>
          <a href="https://github.com/julia-richards/kick-turn">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </>
      ) : (
        <>
          <MenuItem to="/login">Login</MenuItem>
          <MenuItem to="/sign-up">Sign Up</MenuItem>
          <a href="https://github.com/julia-richards/kick-turn">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </>
      )}
    </Menu>
  );
};

export default NavBar;
