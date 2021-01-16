import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../services/auth";
import Seo from "../Seo";
import Button from "../Button";
import { Input } from "../formComponents";
import "../../styles/SignUpForm.css";

const ErrorAlert = ({ errors }) => {
  if (!errors || !errors.length) return null;

  return (
    <div>
      <h4>Submission could not be processed</h4>
      <ul>
        {errors.map((e, eIndex) => (
          <li key={eIndex} style={{ color: "var(--danger-light)" }}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState([]);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const addError = (fieldName, message) => {
    setErrors((last) => [...last, `${fieldName}: ${message}`]);
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);
    let hasErrors = false;
    if (!password) {
      hasErrors = true;
      addError("Password", "required");
    }
    if (!repeatPassword) {
      hasErrors = true;
      addError("Repeat Password", "required");
    }
    if (!education?.length) {
      hasErrors = true;
      addError("Avy Education", "required");
    }

    if (!hasErrors && password === repeatPassword) {
      setErrors([]);
      const user = await signUp({
        username,
        email,
        password,
        avy_edu: education.join(", "),
      });
      if (!user.errors) {
        setAuthenticated(true);
      } else {
        setErrors(user.errors);
      }
    } else {
      addError("Repeat Password", "must match Password");
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Seo title="Sign Up" />
      <form className="signup-form" onSubmit={onSignUp}>
        <ErrorAlert errors={errors} />
        <Input
          name="username"
          type="text"
          formValues={{ username }}
          onChange={updateUsername}
          required
        />
        <Input
          name="email"
          type="email"
          formValues={{ email }}
          onChange={updateEmail}
          required
        />
        <div>
          <label>Avalanche Education</label>
          {[
            "Recreational Level 1",
            "Recreational Level 2",
            "Avalanche Rescue",
            "Professional AvSAR",
            "Professional 1",
            "Professional 2",
            "None",
          ].map((elOption, elOptionIndex) => {
            const elFieldId = `education-${elOptionIndex}`;
            const isChecked = education.some((edu) => edu === elOption);

            return (
              <div
                className="input-container input-container--checkbox"
                key={elOptionIndex}
              >
                <input
                  type="checkbox"
                  id={elFieldId}
                  checked={isChecked}
                  value={elOption}
                  onChange={() =>
                    isChecked
                      ? setEducation((last) =>
                          last.filter((edu) => edu !== elOption)
                        )
                      : setEducation((last) => [...last, elOption])
                  }
                />
                <label htmlFor={elFieldId}>{elOption}</label>
              </div>
            );
          })}
        </div>
        <Input
          name="password"
          type="password"
          formValues={{ password }}
          onChange={updatePassword}
          required
        />
        <Input
          name="repeat_password"
          type="password"
          label="Repeat Password"
          formValues={{ repeatPassword }}
          onChange={updateRepeatPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
        <p>
          Already have an account?
          <br />
          <Link to="/login">Login</Link> before the next storm!
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
