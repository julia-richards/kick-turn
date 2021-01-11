import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import User from "./components/User";
import PlanForm from "./components/PlanForm";
import RouteForm from "./components/RouteForm"
import RoutePage from "./components/RoutePage"
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
			<Switch>
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

{authenticated ? <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
					<ProfilePage />

				</ProtectedRoute> : <Route path="/" exact={true}>
					<LandingPage
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>}


				<ProtectedRoute
					path="/users/:userId"
					exact={true}
					authenticated={authenticated}
				>
					<User />
				</ProtectedRoute>
				<ProtectedRoute
					path="/plans/new"
					exact={true}
					authenticated={authenticated}
				>
					<PlanForm />
				</ProtectedRoute>
				<ProtectedRoute path="/routes/new" authenticated={authenticated} exact>
					<RouteForm />
				</ProtectedRoute>
				<ProtectedRoute
					path="/routes/:routeId"
					authenticated={authenticated}
					exact
				>
					<RoutePage />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
