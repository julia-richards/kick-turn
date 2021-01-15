import React from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout";
import Seo from "./Seo";
import MyFriends from "./MyFriends";
import "../styles/Profile.css";

const MyTours = () => <h1>MyTours</h1>;
const MyRoutes = () => <h1>MyRoutes</h1>;

const tabs = [
  {
    title: "Tour Plans",
    route: "tours",
    Component: MyTours,
    icon: faSnowflake,
  },
  { title: "Routes", route: "routes", Component: MyRoutes, icon: faSnowflake },
  {
    title: "Friends",
    route: "friends",
    Component: MyFriends,
    icon: faSnowflake,
  },
];

const FallbackRoute = () => <Redirect to={`/my/${tabs[0].route}`} />;

const ProfilePage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <nav className="tab-menu">
        {tabs.map((folder) => (
          <NavLink
            to={`/my/${folder.route}`}
            className="tab-menu__link"
            activeClassName="tab-menu__link--active"
            key={folder.route}
          >
            <span className="tab-menu__link__icon">
              <FontAwesomeIcon icon={folder.icon} />
            </span>
            <span className="tab-menu__link__label">{folder.title}</span>
          </NavLink>
        ))}
      </nav>
      <Switch>
        {tabs.map((folder) => (
          <Route path={`/my/${folder.route}`} key={folder.route}>
            <folder.Component />
          </Route>
        ))}
        <Route component={FallbackRoute} />
      </Switch>
    </div>
  </Layout>
);

export default ProfilePage;
