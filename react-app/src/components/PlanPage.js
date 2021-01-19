import * as React from "react";
import { useParams } from "react-router-dom";
import { getPlan } from "../services/plans";
import { useFetchResult } from "../hooks";
import Layout from "./Layout";
import Seo from "./Seo";
import "../styles/PlanPage.css";

const PlanPage = () => {
  const { planId } = useParams();
  const fetchPlan = React.useCallback(() => getPlan(planId), [planId]);
  const state = useFetchResult({ fetchResult: fetchPlan });

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

  const { result: plan } = state;

  return (
    <Layout>
      <Seo title={plan.date} />
      <div className="plan-page">
        <div className="plan-page__details">
          <h1>{plan.date}</h1>
          <h4>TODO:</h4>
          <ol>
            <li>all the stuff...</li>
          </ol>
          <pre>plan props: {JSON.stringify(plan, null, 2)}</pre>
        </div>
      </div>
    </Layout>
  );
};

export default PlanPage;
