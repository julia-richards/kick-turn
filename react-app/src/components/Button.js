import React from "react";
import "../styles/Button.css";

const Button = ({ kind = "primary", children, ...props }) => {
  return (
    <button className={`button ${!!kind ? `button--${kind}` : ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
