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
	fetch(`/api/routes/${planId}`, {
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(checkStatus)
		.then(parseJSON);
