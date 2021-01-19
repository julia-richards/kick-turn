import * as React from "react";
import { useParams, Redirect } from "react-router-dom";
import { deleteRoute, getRoute } from "../services/routes";
import { useFetchResult } from "../hooks";
import Layout from "./Layout";
import Button from "./Button";
import Seo from "./Seo";
import "../styles/RoutePage.css";
import StaticMap from "./Maps/StaticMap";

const RoutePage = () => {
  const { routeId } = useParams();
  const fetchRoute = React.useCallback(() => getRoute(routeId), [routeId]);
  const state = useFetchResult({ fetchResult: fetchRoute });
  const [redirect, setRedirect] = React.useState();

  if (!!redirect) {
    return <Redirect to={redirect} />;
  }

  if (state.isLoading && !state.hasFetched) {
    return (
      <Layout>
        <h4>Loading...</h4>
      </Layout>
    );
  }

  if (state.isRejected) {
    return (
      <Layout>
        <h1>Oh no!</h1>
        <p>The following error occurred: {state.error.message}</p>
        <p>Please refresh and try again.</p>
      </Layout>
    );
  }

  const { result: route, updateResult, onError } = state;

  const onDeleteClick = async () => {
    updateResult({ ...route, isDeleting: true });
    try {
      const { message } = await deleteRoute(routeId);
      updateResult({ ...route, successMessage: message });
      setTimeout(
        () => setRedirect("/"),
        1500 // ms wait time to then redirect
      );
    } catch (e) {
      onError(e);
    }
  };

  if (route.successMessage) {
    return (
      <Layout>
        <div className="route-page">
          <div className="route-page__details">
            <h1>{route.name}</h1>
            <strong>{route.successMessage}</strong>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title={route.name} />
      <div className="route-page">
        <div className="route-page__details">
          <h1>{route.name}</h1>
          <Button
            kind={"danger"}
            onClick={onDeleteClick}
            disabled={!!route.isDeleting}
          >
            {route.isDeleting ? "Removing..." : "Remove Route"}
          </Button>
          <h4>TODO:</h4>
          <ol>
            <li>add tours...</li>
            <li>add users...</li>
          </ol>
        </div>
        <div className="route-page__map">
          <StaticMap
            features={route.geo_features}
            defaultViewport={route.viewport}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RoutePage;
