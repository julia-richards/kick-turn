import React from "react";
import { Link } from "react-router-dom";
import StaticMap from "../Maps/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt, faEraser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const TourPlanItem = ({ tour, onDeleteTourPlanClick }) => {
  if (tour.deletedMessage) {
    return (
      <li className="tour-plan-item" style={{ opacity: 0.7 }}>
        <div className="text">
          <p style={{ color: "red" }}>
            <FontAwesomeIcon icon={faEraser} />
            {` ${tour.deletedMessage}`}
          </p>
        </div>
      </li>
    );
  }
  return (
    <li className="tour-plan-item">
      <div className="tour-plan-item__text">
        <h2>{tour.date}</h2>
        <p>{tour.tour_plan}</p>
        {!!tour.avy_problems?.length && (
          <div style={{ marginTop: 10 }}>
            <strong>Avalanche Problems</strong>
            <p>
              {tour.avy_problems.map((p) => p.problem_type.name).join(", ")}
            </p>
          </div>
        )}
        <Link to={`/plans/${tour.id}`} className="link-button">
          <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
        </Link>
        {!!onDeleteTourPlanClick && (
          <Button
            id="remove-button"
            kind={!!tour.isDeleting ? "disabled" : "danger"}
            onClick={() => onDeleteTourPlanClick(tour.id)}
          >
            {!!tour.isDeleting ? "Removing..." : "Remove Tour Plan"}
          </Button>
        )}
      </div>
      <div className="tour-plan-item__map">
        {tour.route ? (
          <StaticMap
            features={tour.route.geo_features}
            defaultViewport={tour.route.viewport}
            style={{ height: 300 }}
          />
        ) : (
          <p>
            <strong>Route</strong> not assigned
          </p>
        )}
      </div>
    </li>
  );
};

export default TourPlanItem;
