import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Layout from "./Layout";
import Seo from "./Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/Profile.css";

const MyTours = () => <h1>MyTours</h1>;
const MyRoutes = () => <h1>MyRoutes</h1>;
const MyFriends = () => <h1>MyFriends</h1>;

const tabs = [
	{ title: "Tour Plans", route: "tours", Component: MyTours },
	{ title: "Routes", route: "routes", Component: MyRoutes },
	{ title: "Friends", route: "friends", Component: MyFriends },
];

const ProfilePage = () => (
	<Layout>
		<Seo title="Home" />
		<h1 style={{ position: "absolute", top: 10, right: 100 }}>
			<FontAwesomeIcon icon={faUserCircle} />
		</h1>

		<Router>
			<div>
				<div className="tabs">
					<ul className="tab-header">
						{tabs.map((folder) => {
							return (
								<li key={folder.route}>
									<NavLink to={`/my/${folder.route}`} style={{   display: "inline-block", height: "100%", width: "100%"   }}>
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
					</Switch>
				</div>
			</div>
		</Router>
	</Layout>
);

export default ProfilePage;