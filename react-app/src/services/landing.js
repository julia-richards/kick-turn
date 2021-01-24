import { checkStatus, parseJSON } from "./helpers";
import { stringify } from "query-string";

export const getForecast = ({ lat, lon }) => {
  if (!lat || !lon) {
    return Promise.reject("missing coords");
  }

  const queryString = stringify({ lat, lon });
  return fetch(`/api/landing?${queryString}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);
};
