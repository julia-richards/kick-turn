import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider, useAuthenticated } from "./hooks";
import LoginForm from "./components/auth/LoginForm";
import AddFriend from "./components/AddFriend";
import SignUpForm from "./components/auth/SignUpForm";
import Logout from "./components/auth/Logout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import User from "./components/User";
import PlanForm from "./components/PlanForm";
import RouteForm from "./components/RouteForm";
import RoutePage from "./components/RoutePage";

const Router = () => {
	const [authenticated, setAuthenticated] = useAuthenticated();

  return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>

				{authenticated ? (
					<ProtectedRoute path="/" authenticated={authenticated} exact>
						<ProfilePage />
					</ProtectedRoute>
				) : (
					<Route path="/" exact>
						<LandingPage />
					</Route>
				)}
				<ProtectedRoute path="/logout" authenticated={authenticated} exact>
					<Logout />
				</ProtectedRoute>
				<ProtectedRoute
					path="/users/:userId"
					authenticated={authenticated}
					exact
				>
					<User />
				</ProtectedRoute>
				<ProtectedRoute path="/plans/new" authenticated={authenticated} exact>
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
				<ProtectedRoute path="/friends/new" authenticated={authenticated} exact>
					<AddFriend />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
};

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
