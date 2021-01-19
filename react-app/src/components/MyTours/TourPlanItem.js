import React from "react";
import { Link } from "react-router-dom";
import StaticMap from "../Maps/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
const TourPlanItem = ({ tour }) => {
  return (
    <li className="tour-plan-item">
      <div className="tour-plan-item__text">
        <h2>{tour.date}</h2>
        <p>{tour.tour_plan}</p>
        <Link to={`/plans/${tour.id}`} className="link-button">
          <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
        </Link>
      </div>
      <div className="tour-plan-item__map">
        <StaticMap
          features={tour.route.geo_features}
          defaultViewport={tour.route.viewport}
          style={{ height: 300 }}
        />
      </div>
    </li>
  );
};

export default TourPlanItem;
