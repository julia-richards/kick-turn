import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import PlanForm from "./components/PlanForm";
import Map from "./components/RoutePlan"
import { authenticate } from "./services/auth";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Route path="/login" exact={true}>
				<LoginForm
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<Route path="/sign-up" exact={true}>
				<SignUpForm
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<ProtectedRoute
				path="/users/:userId"
				exact={true}
				authenticated={authenticated}
			>
				<User />
			</ProtectedRoute>
			<ProtectedRoute path="/" exact={true} authenticated={authenticated}>
				<h1>My Home Page</h1>
			</ProtectedRoute>
			<ProtectedRoute
				path="/plans/new"
				exact={true}
				authenticated={authenticated}
			>
				<PlanForm />
			</ProtectedRoute>
      <ProtectedRoute
				path="/routes/new"
				exact={true}
				authenticated={authenticated}
			>
				<Map />
			</ProtectedRoute>
		</BrowserRouter>
	);
}

export default App;
