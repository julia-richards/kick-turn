import React from "react";
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, children, ...props }) => {
	return (
		<Route {...props}>
			{authenticated ? children : <Redirect to="/login" />}
		</Route>
	);
};

export default ProtectedRoute;