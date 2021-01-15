import React from "react";
import "../styles/Button.css";

const Button = ({ type = "primary", children, ...props }) => {
  return (
    <button className={`button ${!!type ? `button--${type}` : ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
