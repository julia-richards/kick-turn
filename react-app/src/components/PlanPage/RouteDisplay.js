import React from "react";
import { Link } from "react-router-dom";
import StaticMap from "../Maps/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const RouteDisplay = ({ route }) => {
  if (!route) {
    return <p>No route set</p>;
  }

  return (
    <>
      <h3>{route.name}</h3>
      <Link to={`/routes/${route.id}`} className="link-button">
        <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
      </Link>
      <div className="route-display__map">
        <StaticMap
          features={route.geo_features}
          defaultViewport={route.viewport}
        />
      </div>
    </>
  );
};

export default RouteDisplay;
