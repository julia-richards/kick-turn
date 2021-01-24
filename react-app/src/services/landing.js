import { checkStatus, parseJSON } from "./helpers";

export const getForecast = () => {
  return fetch(`/api/landing`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);
};
