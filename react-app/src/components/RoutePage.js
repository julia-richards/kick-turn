import * as React from "react";
import { useParams } from "react-router-dom";
import { getRoute } from "../services/routes";
import { useFetchResult } from "../hooks";
import mapboxgl from "mapbox-gl";
import Layout from "./Layout";
import Seo from "./Seo";
import "../styles/RoutePage.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const RoutePage = () => {
  const { routeId } = useParams();
  const fetchRoute = React.useCallback(() => getRoute(routeId), [routeId]);
  const state = useFetchResult({ fetchResult: fetchRoute });

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

  const { result: route } = state;

  return (
    <Layout>
      <Seo title={route.name} />
      <div className="route-page">
        <div className="route-page__details">
          <h1>{route.name}</h1>
          <h4>TODO:</h4>
          <ol>
            <li>add these features as layer to map</li>
            <li>figure out map center</li>
            <li>add tours...</li>
            <li>add users...</li>
          </ol>
        </div>
        <div className="route-page__map">
          <pre>
            route.geo_features: {JSON.stringify(route.geo_features, null, 2)}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default RoutePage;
