import React from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Seo from "./Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import MyFriends from "./MyFriends";
import "../styles/Profile.css";

const MyTours = () => <h1>MyTours</h1>;
const MyRoutes = () => <h1>MyRoutes</h1>;

const tabs = [
	{ title: "Tour Plans", route: "tours", Component: MyTours },
	{ title: "Routes", route: "routes", Component: MyRoutes },
	{ title: "Friends", route: "friends", Component: MyFriends },
];

const FallbackRoute = () => <Redirect to={`/my/${tabs[0].route}`} />;

const ProfilePage = () => (
	<Layout>
		<Seo title="Home" />
		<h1 style={{ position: "absolute", top: 10, right: 100 }}>
			<FontAwesomeIcon icon={faUserCircle} />
		</h1>

		<div>
			<div className="tabs">
				<ul className="tab-header">
					{tabs.map((folder) => {
						return (
							<li key={folder.route}>
								<NavLink
									to={`/my/${folder.route}`}
									style={{
										display: "inline-block",
										height: "100%",
										width: "100%",
									}}
								>
									{folder.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<Switch>
					{tabs.map((folder) => {
						return (
							<Route path={`/my/${folder.route}`} key={folder.route}>
								<folder.Component />
							</Route>
						);
					})}
					<Route component={FallbackRoute} />
				</Switch>
			</div>
		</div>
	</Layout>
);

export default ProfilePage;