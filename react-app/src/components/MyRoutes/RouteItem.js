import React from "react";
import { Link } from "react-router-dom";
import StaticMap from "../Maps/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const RouteItem = ({ route }) => {
  return (
    <li className="route-item">
      <div className="route-item__text">
        <h3>{route.name}</h3>
        <Link to={`/routes/${route.id}`} className="link-button">
          <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
        </Link>
      </div>
      <div className="route-item__map">
        <StaticMap features={route.geo_features} />
      </div>
    </li>
  );
};

export default RouteItem;
