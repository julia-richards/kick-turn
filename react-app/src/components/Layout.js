import React from "react";
import NavBar from "./NavBar";
import "../styles/LandingPage.css";

const Layout = ({ children }) => (
	<div className="Layout">
		<NavBar />
		<main className="Layout__main">{children}</main>
	</div>
);

export default Layout;
