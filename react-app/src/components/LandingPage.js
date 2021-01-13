import React from "react";
import Layout from "./Layout";
import Seo from "./Seo";
import Snow from "../components/Particle";

const LandingPage = () => (
	<Layout style={{ backgroundColor: "gray" }}>

		<Seo title={"Kick Turn"} />
		<div style={{ backgroundColor: "gray" }}>
			<Snow />
			<h1>Landing Page</h1>
			<p>TODO: Make me</p>
		</div>
	</Layout>
);

export default LandingPage;
