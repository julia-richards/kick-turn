import React from "react";
import Layout from "./Layout";
import Seo from "./Seo";
import "../styles/LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSnowflake,
	faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";


const LandingPage = () => (
	<Layout style={{ backgroundColor: "gray" }}>
		<Seo title={"Kick Turn"} />
		<div className="landing__elements">
		<div className="landing__elements-welcome">
			<h1>Plan a Tour</h1>
			<p>Assess avalanche conditions</p>
			<p>Plan your route</p>
			<p>Collaborate with ski partners</p>
			<button className="welcome__signup-button">Get Started</button>
		</div>
		<div className="landing__elements-weather">
			<FontAwesomeIcon icon={faSnowflake} />
			<FontAwesomeIcon icon={faTemperatureLow} />
		</div>
		</div>
	</Layout>
);

export default LandingPage;
