import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../../hooks";
import { login } from "../../services/auth";
import Seo from "../Seo";

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
		<form onSubmit={onLogin}>
			<div>
				{errors.map((error) => (
					<div>{error}</div>
				))}
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="text"
					placeholder="Email"
					value={email}
					onChange={updateEmail}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={updatePassword}
				/>
				<button type="submit">Login</button>
			</div>
		</form>
    </>
	);
};

export default LoginForm;
