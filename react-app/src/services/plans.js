import { checkStatus, parseJSON } from "./helpers";

export const addPlan = (params) =>
  fetch("/api/plans", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then(checkStatus)
    .then(parseJSON);

export const getPlan = (planId) =>
  fetch(`/api/plans/${planId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);

export const getMyTourPlans = () =>
  fetch(`/api/plans`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => res.plans);

export const deleteTourPlan = (planId) =>
  fetch(`/api/plans/${planId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);
