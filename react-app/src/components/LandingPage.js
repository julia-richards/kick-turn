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
	<div className='landing'>
		{/* <img className='landing__background' src="/images/background.svg"/> */}
	<Layout style={{ backgroundColor: "gray" }}>
		<Seo title={"Kick Turn"} />
		<div className="landing__elements">
		<div className="landing__elements-welcome">
			<img src="/images/fadedMap.svg"/>
			<h1>Plan a Tour</h1>
			<p>Assess avalanche conditions</p>
			<p>Map your route</p>
			<p>Collaborate with ski partners</p>
			<button className="welcome__signup-button">Go Skiing</button>
		</div>
		<div className="landing__elements-weather">
			<div className="landing__elements-weather__snow">
			<FontAwesomeIcon icon={faSnowflake} />
			<p className="landing__elements-weather__value">2"</p>
			<p className="landing__elements-weath__label">24 hrs</p>
			</div>
			<div className="landing__elements-weather__temp">
			<FontAwesomeIcon icon={faTemperatureLow} />
			<p className="landing__elements-weather__value">27°F</p>
			<p className="landing__elements-weath__label">Current Temp</p>
			</div>
		</div>
		</div>
	</Layout>
	</div>
);

export default LandingPage;
