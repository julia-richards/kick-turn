import React from "react";
import NavBar from "./NavBar";
import "../styles/Layout.css";

const Layout = ({ children, className, ...props }) => (
  <div
    id="Layout"
    className={`Layout${!!className ? ` ${className}` : ""}`}
    {...props}
  >
    <NavBar outerContainerId="Layout" pageWrapId="Layout__main" />
    <main className="Layout__main" id="Layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
