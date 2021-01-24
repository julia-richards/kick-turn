import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Seo from "./Seo";
import "../styles/LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

import background from "../images/background.svg";
import fadedMap from "../images/fadedMap.svg";

import { getForecast } from "../services/landing";
import { useFetchResult } from "../hooks";

const LandingPage = () => {
  const { result } = useFetchResult({ fetchResult: getForecast });

  return (
    <Layout
      className="landing"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Seo title={"Kick Turn"} />
      <div className="landing__elements">
        <div className="landing__elements-welcome">
          <img alt="background map" src={fadedMap} />
          <h1>Plan a Tour</h1>
          <p>Assess avalanche conditions</p>
          <p>Map your route</p>
          <p>Collaborate with ski partners</p>
          <Link to="login" className="welcome__signup-link">
            Go Skiing
          </Link>
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
        </div>
        <div className="landing__elements-weather">
          <div className="landing__elements-weather__snow">
            <FontAwesomeIcon icon={faSnowflake} />
            <p className="landing__elements-weather__value">
              {result?.current?.snow[`1h`] || "0"}"
            </p>
            <p className="landing__elements-weath__label">1 hr</p>
          </div>
          <div className="landing__elements-weather__temp">
            <FontAwesomeIcon icon={faTemperatureLow} />
            <p className="landing__elements-weather__value">
              {result?.current?.temp || 27}°F
            </p>
            <p className="landing__elements-weath__label">Current Temp</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
