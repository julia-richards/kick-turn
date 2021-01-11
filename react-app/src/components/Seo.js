import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title = "Search Kick", description = "" }) => (
	<Helmet>
		<meta charSet="utf-8" />
		<title>{title}</title>
		{!!description && <meta name="description" content={description} />}
	</Helmet>
);

export default Seo;
