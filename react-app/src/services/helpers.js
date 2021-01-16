export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json().then((data) => {
      const message = buildErrorsString(response.statusText, data);
      const error = buildResError(response, data, message);

      throw error;
    });
  }

  throw new Error(response.statusText);
};

export const parseJSON = (payload) => {
  if (typeof payload === "string") {
    return JSON.parse(payload);
  }
  return payload.json();
};

const buildErrorsString = (statusText, { errors, error }) => {
  let errorsString = "";
  for (let key in errors) {
    if (Array.isArray(errors[key])) {
      errorsString += `${key}: ${errors[key].join(", ")}, `;
    } else {
      errorsString += `${key}: ${errors[key]}, `;
    }
  }
  if (errorsString.length) {
    errorsString = errorsString
      .substr(0, errorsString.length - 2)
      .replace(/_/g, " ");
  } else {
    errorsString = error || statusText;
  }
  return errorsString;
};

const buildResError = (response, data, message) => {
  let error = new Error(message);
  error.status = response.status;
  error.statusText = response.statusText;
  error.response = response;
  error.body = data;
  error.errors = data.errors;

  return error;
};
