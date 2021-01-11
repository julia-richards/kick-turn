import * as React from "react";
import { useParams } from "react-router-dom";
import { getRoute } from "../services/routes";
import { useFetchResult } from "../hooks";
import Layout from "./Layout";
import Seo from "./Seo";

const RoutePage = () => {
	const { routeId } = useParams();
	const fetchRoute = React.useCallback(() => getRoute(routeId), [routeId]);
	const state = useFetchResult({ fetchResult: fetchRoute });

	if (state.isLoading && !state.hasFetched) {
		return <Layout><h4>Loading...</h4></Layout>;
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
			<pre>{JSON.stringify(route, null, 2)}</pre>
		</Layout>
	);
};

export default RoutePage;
