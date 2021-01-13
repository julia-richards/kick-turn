import { checkStatus, parseJSON } from "./helpers";
import { stringify } from "query-string";

export const addFriend = (params) =>
	fetch("/api/friends", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(params),
	})
		.then(checkStatus)
		.then(parseJSON);

export const getFriendOptions = (query) => {
	const queryString = { query };
	return fetch(`/api/friends/options?${stringify(queryString)}`, {
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(checkStatus)
		.then(parseJSON)
		.then((res) => res.options);
};
