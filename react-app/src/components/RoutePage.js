import * as React from "react";
import { useParams } from "react-router-dom";
import { getRoute } from "../services/routes";
import { useFetchResult } from "../hooks";

const RoutePage = () => {
	const { routeId } = useParams();
	const fetchRoute = React.useCallback(() => getRoute(routeId), [routeId]);
	const state = useFetchResult({ fetchResult: fetchRoute });

	if (state.isLoading && !state.hasFetched) {
		return <h4>Loading...</h4>;
	}

	if (state.isRejected) {
		return (
			<div>
				<h1>Oh no!</h1>
				<p>The following error occurred: {state.error.message}</p>
				<p>Please refresh and try again.</p>
			</div>
		);
	}

	const { result: route } = state;

	return <pre>{JSON.stringify(route, null, 2)}</pre>;
};

export default RoutePage;
