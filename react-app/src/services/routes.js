import { checkStatus, parseJSON } from "./helpers";
import { stringify } from "query-string";

export const addRoute = (params) =>
  fetch("/api/routes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then(checkStatus)
    .then(parseJSON);

export const getRoute = (routeId) =>
  fetch(`/api/routes/${routeId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);

export const getMyRoutes = () =>
  fetch(`/api/routes`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => res.routes);

export const getRouteOptions = (query) => {
  const queryString = { query };
  return fetch(`/api/routes/options?${stringify(queryString)}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => res.options);
};

export const deleteRoute = (routeId) =>
  fetch(`/api/routes/${routeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);
