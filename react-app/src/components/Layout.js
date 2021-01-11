import React from "react";
import NavBar from "./NavBar";
import "../styles/Layout.css";

const Layout = ({ children }) => (
	<div id="Layout" className="Layout">
		<NavBar outerContainerId="Layout" pageWrapId="Layout__main" />
		<main className="Layout__main" id="Layout__main">
			{children}
		</main>
	</div>
);

export default Layout;
