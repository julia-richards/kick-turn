import * as React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteRoute, getRoute } from "../services/routes";
import { useFetchResult } from "../hooks";
import Layout from "./Layout";
import AvyProblem from "./AvyProblem";
import Button from "./Button";
import Seo from "./Seo";
import "../styles/RoutePage.css";
import StaticMap from "./Maps/StaticMap";

const TourPlanItem = ({ date, tour_plan, id, avy_problems = [] }) => (
  <li className="tour-plan-item">
    <div className="tour-plan-item__text">
      <h2>{date}</h2>
      <p>{tour_plan}</p>
      <Link to={`/plans/${id}`} className="link-button">
        <FontAwesomeIcon icon={faExpandArrowsAlt} /> View
      </Link>
    </div>
    <div>
      {!!avy_problems.length && (
        <div style={{ marginTop: 10 }}>
          <p>
            <strong>Avalanche Problem</strong>{" "}
            {avy_problems.length > 1 && `(1 of ${avy_problems.length})`}
          </p>
          {!!avy_problems?.length ? (
            <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
              {avy_problems.slice(0, 1).map((problem) => (
                <li key={problem.id} style={{ display: "flex" }}>
                  <AvyProblem
                    aspect_elevation={problem.aspect_elevation}
                    isInteractive={false}
                    style={{ maxWidth: 180, flex: 1, marginRight: "2rem" }}
                  />
                  <div style={{ flex: 2 }}>
                    <p>
                      <strong>Type</strong>{" "}
                      {problem.problem_type?.name || "N/A"}
                    </p>
                    <p>
                      <strong>Size</strong> {problem.size || "N/A"}
                    </p>
                    <p>
                      <strong>Likelihood</strong> {problem.likelihood || "N/A"}
                    </p>
                    <p>
                      <strong>Weak layer</strong> {problem.weak_layer || "N/A"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No problems associated with plan</p>
          )}
        </div>
      )}
    </div>
  </li>
);

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
        <main className="route-page__main">
          <div className="route-page__main__details">
            <h1>{route.name}</h1>
            <Button
              kind={"danger"}
              onClick={onDeleteClick}
              disabled={!!route.isDeleting}
            >
              {route.isDeleting ? "Removing..." : "Remove Route"}
            </Button>
          </div>
          <div className="route-page__main__map">
            <StaticMap
              features={route.geo_features}
              defaultViewport={route.viewport}
            />
          </div>
        </main>
        <div>
          <h2>Tour Plans</h2>
          {!!route.plans?.length ? (
            route.plans.map((p) => <TourPlanItem key={p.id} {...p} />)
          ) : (
            <p>No tour plans made, yet</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RoutePage;
