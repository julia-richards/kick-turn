import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import Layout from "./Layout";
import Seo from "./Seo";
import { Redirect } from "react-router-dom";
import { Input, TextArea } from "./formComponents";
import { addPlan } from "../services/plans";
import { getFriends } from "../services/friends";
import { getProblemTypes } from "../services/problemTypes";
import { getRouteOptions } from "../services/routes";
import AvyProblem from "./AvyProblem";
import Button from "./Button";

import "../styles/PlanForm.css";
import { useFetchResult } from "../hooks";

const initialAvyProblem = {
  problem_type_id: 4,
  aspect_elevation: {
    "N-AT": false,
    "N-NT": false,
    "N-BT": false,
    "NE-AT": false,
    "NE-NT": false,
    "NE-BT": false,
    "E-AT": false,
    "E-NT": false,
    "E-BT": false,
    "SE-AT": false,
    "SE-NT": false,
    "SE-BT": false,
    "S-AT": false,
    "S-NT": false,
    "S-BT": false,
    "SW-AT": false,
    "SW-NT": false,
    "SW-BT": false,
    "W-AT": false,
    "W-NT": false,
    "W-BT": false,
    "NW-AT": false,
    "NW-NT": false,
    "NW-BT": false,
  },
  size: "D2 - Small",
  likelihood: "Likely",
  weak_layer: "Dec. 7th",
};

function PlanForm() {
  const [formValues, setFormValues] = useState({
    date: "2021-01-01",
    avy_problems: [],
    ates: ["Simple"],
    trend: "Improving",
    avy_observations: "No avalanches this year",
    snowpack_summary: "Super duper stable",
    temp_now: "24",
    wind_sp_now: "64",
    wind_dir_now: "NW",
    sky_cover_now: "OVC",
    precip_now: "S1",
    temp_fore: "32",
    wind_sp_fore: "9",
    wind_dir_fore: "NE",
    sky_cover_fore: "Clear",
    precip_fore: "12",
    weather_contribution: "Snow is cool",
    weather_summary: "It's dumping",
    terrain_avoiding: "Anything that's not pow",
    obs_fore_summary: "Nah bro",
    mindset: "Stepping Out",
    tour_plan: "shred gnar",
    emergency_plan: "don't have one",
    route_id: 9, // TODO: make me dropdown
    friend_ids: [],
  });
  const [error, setError] = React.useState();
  const [redirect, setRedirect] = React.useState();
  const problemTypeState = useFetchResult({ fetchResult: getProblemTypes });
  // const routeState = useFetchResult({ fetchResult: getRouteOptions });

  const updateFormValues = (fieldName, fieldValue) => {
    setFormValues({ ...formValues, [fieldName]: fieldValue });
  };

  const updateAvyProblem = (problemIndex, fieldName, fieldValue) => {
    updateFormValues(
      "avy_problems",
      formValues.avy_problems.map((p, pIndex) =>
        problemIndex === pIndex ? { ...p, [fieldName]: fieldValue } : p
      )
    );
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      let params = {
        ...formValues,
        friend_ids: (formValues.friend_ids || []).map((opt) => opt.value),
        route_id: formValues.route_id?.value,
      };
      const { id } = await addPlan(params);
      setRedirect(`/plans/${id}`);
    } catch (err) {
      setError(err);
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout>
      <Seo title="New Tour Plan" />
      <form onSubmit={handleSumbit} className="plan-form">
        <header className="plan-form__header">
          <h1>New Tour Plan</h1>
        </header>
        {!!error && (
          <div>
            <h3>Oh no!</h3>
            <p>An error occurred: {error.message}</p>
            {error.body && (
              <details>
                <pre>{JSON.stringify(error, null, 2)}</pre>
              </details>
            )}
          </div>
        )}
        <Input
          type="date"
          name="date"
          formValues={formValues}
          setValue={updateFormValues}
        />
        <div>
          <label>Add Friends</label>
          <AsyncSelect
            className="AsyncSelect"
            noOptionsMessage={({ inputValue }) =>
              !!inputValue
                ? `No friends match "${inputValue}"`
                : "Your search is empty. Try typing a friend’s username."
            }
            loadOptions={getFriends}
            placeholder="Search for a friend..."
            onChange={(selected) => updateFormValues("friend_ids", selected)}
            defaultOptions
            isMulti
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
            }}
          >
            <strong style={{ marginRight: "1rem" }}>Avalanche Problems</strong>
            <Button
              type="button"
              onClick={() =>
                updateFormValues("avy_problems", [
                  ...formValues.avy_problems,
                  initialAvyProblem,
                ])
              }
            >
              Add Problem
            </Button>
          </p>
          {formValues.avy_problems.map((problem, problemIndex) => (
            <div key={problemIndex} className="avalance-problem-container">
              <header className="avalance-problem-container__header">
                <h3>Problem {problemIndex + 1}</h3>
                <Button
                  type="button"
                  kind="danger"
                  onClick={() =>
                    updateFormValues(
                      "avy_problems",
                      formValues.avy_problems.filter(
                        (_p, pIndex) => problemIndex !== pIndex
                      )
                    )
                  }
                >
                  Remove
                </Button>
              </header>
              <div className="avalance-problem-container__fields">
                <div>
                  <AvyProblem
                    aspect_elevation={problem.aspect_elevation}
                    onShapeClick={(e) =>
                      updateAvyProblem(problemIndex, "aspect_elevation", {
                        ...problem.aspect_elevation,
                        [e.target.id]: !problem.aspect_elevation[e.target.id],
                      })
                    }
                    style={{ width: "100%" }}
                    isInteractive
                  />
                </div>
                <div>
                  <div className="avalance-problem-container__fields__radio-container problem-type-container">
                    <label>Type</label>
                    {problemTypeState.isLoading && <p>Loading options...</p>}
                    {problemTypeState.isRejected && (
                      <p>Error: {problemTypeState.error.message}</p>
                    )}
                    {problemTypeState.isResolved && (
                      <div className="options-container">
                        {problemTypeState.result.map(({ id, name }) => {
                          const elFieldId = `avy_problems[${problemIndex}]-problem_type_id-${id}`;
                          const currentValue =
                            formValues.avy_problems[problemIndex]
                              .problem_type_id;
                          const isChecked = currentValue === id;
                          const onChange = () =>
                            updateAvyProblem(
                              problemIndex,
                              "problem_type_id",
                              id
                            );

                          return (
                            <div
                              key={elFieldId}
                              className="input-container input-container--radio"
                            >
                              <input
                                type="radio"
                                id={elFieldId}
                                name={elFieldId}
                                onChange={onChange}
                                checked={isChecked}
                              />
                              <label htmlFor={elFieldId}>{name}</label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="avalance-problem-container__fields__radio-container likelihood-container">
                    <label>Likelihood</label>
                    <div className="options-container">
                      {["Not Likely", "Likely", "Very Likely"].map(
                        (elOption, elOptionIndex) => {
                          const elFieldId = `avy_problems[${problemIndex}]-likelihood-${elOptionIndex}`;
                          const currentValue =
                            formValues.avy_problems[problemIndex].likelihood;
                          const isChecked = currentValue === elOption;
                          const onChange = () =>
                            updateAvyProblem(
                              problemIndex,
                              "likelihood",
                              elOption
                            );

                          return (
                            <div
                              key={elFieldId}
                              className="input-container input-container--radio"
                            >
                              <input
                                type="radio"
                                id={elFieldId}
                                name={elFieldId}
                                onChange={onChange}
                                checked={isChecked}
                              />
                              <label htmlFor={elFieldId}>{elOption}</label>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="avalance-problem-container__fields__radio-container size-container">
                    <label>Size</label>
                    <div className="options-container">
                      {[
                        "D1 - Very Small",
                        "D2 - Small",
                        "D3 - Medium",
                        "D4 - Large",
                        "D5 - Maximum",
                      ].map((elOption, elOptionIndex) => {
                        const elFieldId = `avy_problems[${problemIndex}]-size-${elOptionIndex}`;
                        const currentValue =
                          formValues.avy_problems[problemIndex].size;
                        const isChecked = currentValue === elOption;
                        const onChange = () =>
                          updateAvyProblem(problemIndex, "size", elOption);

                        return (
                          <div
                            key={elFieldId}
                            className="input-container input-container--radio"
                          >
                            <input
                              type="radio"
                              id={elFieldId}
                              name={elFieldId}
                              onChange={onChange}
                              checked={isChecked}
                            />
                            <label htmlFor={elFieldId}>{elOption}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <Input
                    type="text"
                    name="weak_layer"
                    label="Weak Layer"
                    formValues={problem}
                    setValue={(name, value) =>
                      updateAvyProblem(problemIndex, name, value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          {!formValues.avy_problems.length && <small>No problems added</small>}
        </div>
        <div>
          <label>Select Route</label>
          <AsyncSelect
            className="AsyncSelect"
            noOptionsMessage={({ inputValue }) =>
              !!inputValue
                ? `No routes match "${inputValue}"`
                : "Your search is empty. Try typing one of your route's name."
            }
            loadOptions={getRouteOptions}
            placeholder="Search for a route..."
            onChange={(selected) => updateFormValues("route_id", selected)}
            defaultOptions
          />
        </div>
        <TextArea
          name="avy_observations"
          label="Avalanche Observations"
          setValue={updateFormValues}
          formValues={formValues}
        />
        <TextArea
          name="snowpack_summary"
          setValue={updateFormValues}
          formValues={formValues}
          hint={"What snowpack factors concern me and why?"}
        />

        <div className="weather weather--now">
          <h3>Nowcast</h3>
          <div className="weather__grid">
            <Input
              type="number"
              name="temp_now"
              label="Temperature"
              placeholder="°F"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="number"
              name="wind_sp_now"
              label="Wind Speed"
              placeholder="mph"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="wind_dir_now"
              label="Wind Direction"
              placeholder="N>S"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="sky_cover_now"
              label="Sky Cover"
              placeholder="OVC"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="precip_now"
              label="Preciptiation"
              placeholder="OVC"
              formValues={formValues}
              setValue={updateFormValues}
            />
          </div>
        </div>
        <div className="weather weather--forecast">
          <h3>Forecast</h3>
          <div className="weather__grid">
            <Input
              type="number"
              name="temp_fore"
              label="Temperature"
              placeholder="°F"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="number"
              name="wind_sp_fore"
              label="Wind Speed"
              placeholder="mph"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="wind_dir_fore"
              label="Wind Direction"
              placeholder="N>S"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="sky_cover_fore"
              label="Sky Cover"
              placeholder="OVC"
              formValues={formValues}
              setValue={updateFormValues}
            />
            <Input
              type="text"
              name="precip_fore"
              label="Preciptiation"
              placeholder="OVC"
              formValues={formValues}
              setValue={updateFormValues}
            />
          </div>
        </div>

        <TextArea
          name="weather_contribution"
          formValues={formValues}
          setValue={updateFormValues}
          hint="What weather factors could affect snowpack today?"
        />

        <div>
          <label>Trend</label>
          {["Improving", "Maintaining", "Deteriorating"].map(
            (elOption, elOptionIndex) => {
              const elFieldId = `trend-${elOptionIndex}`;
              const currentValue = formValues.trend;
              const isChecked = currentValue === elOption;
              const onChange = () => updateFormValues("trend", elOption);

              return (
                <div
                  key={elFieldId}
                  className="input-container input-container--radio"
                >
                  <input
                    type="radio"
                    id={elFieldId}
                    name={elFieldId}
                    onChange={onChange}
                    checked={isChecked}
                  />
                  <label htmlFor={elFieldId}>{elOption}</label>
                </div>
              );
            }
          )}
        </div>
        <div>
          <label>Avalanche Terrain Exposure Scale</label>
          {["Simple", "Challenging", "Complex"].map(
            (elOption, elOptionIndex) => {
              const elFieldId = `ates-${elOptionIndex}`;
              const currentElValues = formValues.ates;
              const isChecked = currentElValues.some((e) => e === elOption);
              const onChange = () =>
                updateFormValues(
                  "ates",
                  isChecked
                    ? currentElValues.filter((e) => e !== elOption)
                    : [...currentElValues, elOption]
                );

              return (
                <div
                  className="input-container input-container--checkbox"
                  key={elFieldId}
                >
                  <input
                    type="checkbox"
                    id={elFieldId}
                    name={elFieldId}
                    onChange={onChange}
                    checked={isChecked}
                  />
                  <label htmlFor={elFieldId}>{elOption}</label>
                </div>
              );
            }
          )}
        </div>
        <TextArea
          name="terrain_avoiding"
          formValues={formValues}
          setValue={updateFormValues}
          hint="What terrain am I avoiding today and why?"
        />
        <TextArea
          name="obs_fore_summary"
          label="Observation and Forcast Discussion"
          formValues={formValues}
          setValue={updateFormValues}
          hint="Synthesize your observations and the avalanche forecast and discuss with your partners."
        />
        <TextArea
          name="tour_plan"
          formValues={formValues}
          setValue={updateFormValues}
        />
        <TextArea
          name="emergency_plan"
          formValues={formValues}
          setValue={updateFormValues}
          hint="Plan in case of emergency"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
}

export default PlanForm;
