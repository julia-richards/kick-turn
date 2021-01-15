import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useAuthenticated } from "../../hooks";
import { login } from "../../services/auth";
import { Input } from "../formComponents";
import Button from "../Button";
import Seo from "../Seo";

import "../../styles/LoginForm.css";

const LoginForm = () => {
  const [authenticated, setAuthenticated] = useAuthenticated();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Seo title="Login" />
      <form onSubmit={onLogin} className="login-form">
        <h2>Welcome back!</h2>
        {!!errors && (
          <div className="errors-container">
            {errors.map((error) => (
              <div style={{ color: "red" }}>{error}</div>
            ))}
          </div>
        )}
        <Input
          name="email"
          type="email"
          formValues={{ email }}
          onChange={updateEmail}
        />
        <Input
          name="password"
          type="password"
          formValues={{ password }}
          onChange={updatePassword}
        />
        <Button type="submit">Login</Button>

        <p>
          Don't have an account yet?
          <br />
          <Link to="/sign-up">Sign Up</Link> before the next storm!
        </p>
      </form>
    </>
  );
};

export default LoginForm;
