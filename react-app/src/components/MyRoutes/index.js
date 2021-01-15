import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import * as service from "../../services/routes";
import { useFetchResult } from "../../hooks";
import RouteItem from "./RouteItem";

import "../../styles/MyRoutes.css";

const RouteHeader = () => (
  <header className="my-routes__header">
    <h1>My Routes</h1>
    <Link to="/routes/new" className="link-button">
      Add Route +
    </Link>
  </header>
);

const MyRoutes = () => {
  const fetchRoutes = useCallback(() => service.getMyRoutes(), []);
  const state = useFetchResult({ fetchResult: fetchRoutes });

  if (state.isLoading && !state.hasFetched) {
    return (
      <div className="my-routes">
        <RouteHeader />
        <h4>Loading...</h4>
      </div>
    );
  }

  if (state.isRejected) {
    return (
      <div className="my-routes">
        <RouteHeader />
        <h1>Oh no!</h1>
        <p>The following error occurred: {state.error.message}</p>
        <p>Please refresh and try again.</p>
      </div>
    );
  }

  const {
    result: routes,
    isLoading,
    triggerRefetch,
    onError,
    updateResult,
  } = state;

  const onDeleteRouteClick = async (routeId) => {
    alert("make me work!!");
    updateResult(
      routes.map((t) => (t.id === routeId ? { ...t, isDeleting: true } : t))
    );
    try {
      const { message } = await service.deleteRoute(routeId);
      updateResult(
        routes.map((t) =>
          t.id === routeId ? { ...t, deletedMessage: message } : t
        )
      );
      setTimeout(() => {
        triggerRefetch();
      }, 1000);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div className="my-routes">
      <RouteHeader />
      {!!routes.length ? (
        <ul
          className="my-routes__list"
          style={isLoading ? { opacity: 0.8 } : {}}
        >
          {routes.map((route) => (
            <RouteItem route={route} onDeleteRouteClick={onDeleteRouteClick} />
          ))}
        </ul>
      ) : (
        <p>
          No routes on file, yet{" "}
          <span role="img" title="skier">
            ⛷
          </span>
        </p>
      )}
    </div>
  );
};

export default MyRoutes;
