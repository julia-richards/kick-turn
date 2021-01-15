import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import * as service from "../../services/plans";
import { useFetchResult } from "../../hooks";
import TourPlanItem from "./TourPlanItem";

import "../../styles/MyTours.css";

const TourPlanHeader = () => (
  <header className="my-tour-plans__header">
    <h1>My Tour Plans</h1>
    <Link to="/plans/new">Add Tour Plan +</Link>
  </header>
);

const MyTourPlans = () => {
  const fetchTourPlans = useCallback(() => service.getMyTourPlans(), []);
  const state = useFetchResult({ fetchResult: fetchTourPlans });

  if (state.isLoading && !state.hasFetched) {
    return (
      <div className="my-tour-plans">
        <TourPlanHeader />
        <h4>Loading...</h4>
      </div>
    );
  }

  if (state.isRejected) {
    return (
      <div className="my-tour-plans">
        <TourPlanHeader />
        <h1>Oh no!</h1>
        <p>The following error occurred: {state.error.message}</p>
        <p>Please refresh and try again.</p>
      </div>
    );
  }

  const {
    result: tours,
    isLoading,
    triggerRefetch,
    onError,
    updateResult,
  } = state;

  const onDeleteTourPlanClick = async (tourId) => {
    alert("make me work!!");
    updateResult(
      tours.map((t) => (t.id === tourId ? { ...t, isDeleting: true } : t))
    );
    try {
      const { message } = await service.deleteTourPlan(tourId);
      updateResult(
        tours.map((t) =>
          t.id === tourId ? { ...t, deletedMessage: message } : t
        )
      );
      setTimeout(() => {
        triggerRefetch();
      }, 1000);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div className="my-tour-plans">
      <TourPlanHeader />
      {!!tours.length ? (
        <ul
          className="my-tour-plans__list"
          style={isLoading ? { opacity: 0.8 } : {}}
        >
          {tours.map((tour) => (
            <TourPlanItem
              tour={tour}
              onDeleteTourPlanClick={onDeleteTourPlanClick}
            />
          ))}
        </ul>
      ) : (
        <p>
          No tours on file, yet{" "}
          <span role="img" title="skier">
            ⛷
          </span>
        </p>
      )}
    </div>
  );
};

export default MyTourPlans;
