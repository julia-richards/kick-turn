import { checkStatus, parseJSON } from "./helpers";
import { stringify } from "query-string";

export const getForecast = ({ lat = 37.8099457, lon = -107.6812071 }) => {
  const queryString = stringify({ lat, lon });
  return fetch(`/api/landing?${queryString}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);
};
