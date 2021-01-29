import React from "react";
import { Link } from "react-router-dom";
import StaticMap from "../Maps/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const RouteItem = ({ route, onDeleteRouteClick }) => {
  if (route.successMessage) {
    return (
      <li className="route-item">
        <div className="route-item__text">
          <h1>{route.name}</h1>
          <strong>{route.successMessage}</strong>
        </div>
      </li>
    );
  }

  return (
    <li className="route-item">
      <div className="route-item__text">
        <h3>{route.name}</h3>
        <ul className="route-item__actions">
          <li>
            <Link to={`/routes/${route.id}`} className="link-button">
              <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
            </Link>
          </li>
          <li>
            <Button
              kind={"danger"}
              onClick={onDeleteRouteClick}
              disabled={!!route.isDeleting}
            >
              {route.isDeleting ? "Removing..." : "Remove Route"}
            </Button>
          </li>
        </ul>
      </div>
      <div className="route-item__map">
        <StaticMap
          features={route.geo_features}
          defaultViewport={route.viewport}
        />
      </div>
    </li>
  );
};

export default RouteItem;
