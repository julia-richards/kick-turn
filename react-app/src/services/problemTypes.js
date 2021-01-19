import { checkStatus, parseJSON } from "./helpers";

export const getProblemTypes = () =>
  fetch(`/api/problem_types`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => res.problem_types);
