import React from "react";

const TourPlanItem = ({ tour }) => {
  return (
    <li className="tour-plan-item">
      <pre>{JSON.stringify(tour, null, 2)}</pre>
    </li>
  );
};

export default TourPlanItem;
