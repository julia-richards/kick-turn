import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
	if (!props.authenticated) {
		return (
      <Route {...props}>
        <Redirect to="/login" />
      </Route>
    )
	}

	return <Route {...props} />;
};

export default ProtectedRoute;