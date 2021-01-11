import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import "../styles/Menu.css";
import { pushRotate as Menu } from 'react-burger-menu'


const NavBar = ({ setAuthenticated }) => {
  return (
     <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="login" className="menu-item" href="/login">Login</a>
        <a id="sign-up" className="menu-item" href="/sign-up">Sign Up</a>
        <a id="new-plan" className="menu-item" href="/plans/new">New Tour Plan</a>
        <a id="new-route" className="menu-item" href="/routes/new">New Route</a>
      </Menu>
		// <nav>
		// 	<ul>
		// 		<li>
		// 			<NavLink to="/" exact={true} activeClassName="active">
		// 				Home
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink to="/login" exact={true} activeClassName="active">
		// 				Login
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink to="/sign-up" exact={true} activeClassName="active">
		// 				Sign Up
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<LogoutButton setAuthenticated={setAuthenticated} />
		// 		</li>
		// 		<li>
		// 			<NavLink to="/plans/new" exact={true} activeClassName="active">
		// 				New Tour Plan
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink to="/routes/new" exact={true} activeClassName="active">
		// 				New Route
		// 			</NavLink>
		// 		</li>
		// 	</ul>
		// </nav>
	);
}

export default NavBar;