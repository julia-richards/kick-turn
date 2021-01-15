import React from "react";

const RouteItem = ({ route }) => {
  return (
    <li className="route-item">
      <pre>{JSON.stringify(route, null, 2)}</pre>
    </li>
  );
};

export default RouteItem;
