import * as React from "react";
import { useParams } from "react-router-dom";
import { getPlan } from "../../services/plans";
import { useFetchResult } from "../../hooks";
import Layout from "../Layout";
import Seo from "../Seo";
import FriendList from "./FriendList";
import RouteDisplay from "./RouteDisplay";
import "../../styles/PlanPage.css";
import {
  faTemperatureLow,
  faCloudSun,
  faCloudShowersHeavy,
  faTachometerAlt,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const weatherFields = [
  { prefix: "temp", label: "Temperature", icon: faTemperatureLow },
  { prefix: "sky_cover", label: "Sky Cover", icon: faCloudSun },
  { prefix: "precip", label: "Preciptiation", icon: faCloudShowersHeavy },
  { prefix: "wind_sp", label: "Wind Speed", icon: faTachometerAlt },
  { prefix: "wind_dir", label: "Wind Direction", icon: faWind },
];

const snowpackFields = [
  { attr: "trend", label: "Trend" },
  { attr: "snowpack_summary", label: "Summary" },
  { attr: "obs_fore_summary", label: "Observation and Forecast Summary" },
  { attr: "avy_observations", label: "Avalance Observations" },
  { attr: "weather_contribution", label: "Weather Contribution" },
];

const humanFields = [
  { attr: "mindset", label: "Mindset" },
  { attr: "tour_plan", label: "Tour Plan" },
  { attr: "emergency_plan", label: "Emergency Plan" },
];

// TODO:
// "avy_problems",

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
          <div className="plan-page__details__weather">
            <div className="weather-grid">
              <h2>Weather</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {weatherFields.map(({ label, icon }) => (
                      <th key={label}>
                        {icon ? (
                          <FontAwesomeIcon
                            icon={icon}
                            alt={label}
                            title={label}
                          />
                        ) : (
                          label
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nowcast", "now"],
                    ["Forecast", "fore"],
                  ].map(([title, suffix]) => (
                    <tr key={suffix}>
                      <td>{title}</td>
                      {weatherFields.map(({ prefix }) => (
                        <td key={prefix}>{plan[`${prefix}_${suffix}`]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {!!plan.weather_summary && (
                <div>
                  <strong>Summary</strong>
                  <p>{plan.weather_summary}</p>
                </div>
              )}
            </div>
            <div className="plan-page__details__snowpack">
              <h2>Snowpack</h2>
              {snowpackFields.map(({ attr, label }) => (
                <div key={attr} className="detail-container">
                  <h4>{label}</h4>
                  <p>{plan[attr]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h2>Terrain</h2>
            <div className="detail-container">
              <h4>Avalanche Terrain Exposure Scale</h4>
              <p>{plan.ates || "N/A"}</p>
            </div>
            <div className="detail-container">
              <h4>Avoiding</h4>
              <p>{plan.terrian_avoiding || "N/A"}</p>
            </div>
          </div>
          <div className="plan-page__details__human">
            <h2>Human Factors</h2>
            {humanFields.map(({ attr, label }) => (
              <div key={attr} className="detail-container">
                <h4>{label}</h4>
                <p>{plan[attr]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="plan-page__route">
          <RouteDisplay route={plan.route} />
          <FriendList friends={plan.users} />
        </div>
      </div>
    </Layout>
  );
};

export default PlanPage;
