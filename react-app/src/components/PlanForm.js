import React, { useState } from "react";
import Layout from "./Layout";
import Seo from "./Seo";
import { Redirect } from "react-router-dom";
import { Input, TextArea } from "./formComponents";
import { addPlan } from "../services/plans";

const initialAvyProblem = {
  type_id: "",
  aspect: "",
  elevation: [],
  danger_rating: "",
  size: "",
  likelihood: "",
  weak_layer: "",
  trend: "",
  plans: "",
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
	});
	const [error, setError] = React.useState();
  const [redirect, setRedirect] = React.useState();

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
			const { id } = await addPlan(formValues);
			setRedirect(`/plans/${id}`);
		} catch (err) {
			setError(err)
		}
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout>
      <Seo title="New Tour Plan" />
      <form onSubmit={handleSumbit}>
				{!!error && <div><h3>Oh no!</h3><p>An error occurred: {error.message}</p>{error.body && <details><pre>{JSON.stringify(error, null, 2)}</pre></details>}</div>}
				<Input
					type="date"
					name="date"
					formValues={formValues}
					setValue={updateFormValues}
				/>
        <div>
          {formValues.avy_problems.map((problem, problemIndex) => (
            <div key={problemIndex}>
              Avalanche Problem {problemIndex + 1}
              <div>
                <label>Aspect</label>
                <input
                  type="text"
                  name={`avy_problems[${problemIndex}].aspect`}
                  onChange={(e) =>
                    updateAvyProblem(problemIndex, "aspect", e.target.value)
                  }
                  value={formValues.avy_problems[problemIndex].aspect}
                ></input>
              </div>
              <div>
                <label>Elevation</label>
                {["Below Treeline", "Near Treeline", "Above Treeline"].map(
                  (elOption, elOptionIndex) => {
                    const elFieldId = `avy_problems[${problemIndex}].elevation-#${elOptionIndex}`;
                    const currentElValues =
                      formValues.avy_problems[problemIndex].elevation;
                    const isChecked = currentElValues.some(
                      (e) => e === elOption
                    );
                    const onChange = () =>
                      updateAvyProblem(
                        problemIndex,
                        "elevation",
                        isChecked
                          ? currentElValues.filter((e) => e !== elOption)
                          : [...currentElValues, elOption]
                      );

                    return (
                      <div>
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
              <pre>{JSON.stringify(problem)}</pre>
              <button
                type="button"
                onClick={() =>
                  updateFormValues(
                    "avy_problems",
                    formValues.avy_problems.filter(
                      (_p, pIndex) => problemIndex !== pIndex
                    )
                  )
                }
              >
                Remove Problem
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              updateFormValues("avy_problems", [
                ...formValues.avy_problems,
                initialAvyProblem,
              ])
            }
          >
            Add Avalanche Problem
          </button>
        </div>
        <TextArea
          name="avy_observations"
          label="Avalance Observations"
          setValue={updateFormValues}
          formValues={formValues}
        />
				<TextArea
          name="snowpack_summary"
          setValue={updateFormValues}
					formValues={formValues}
					hint={"What snowpack factors concern me and why?"}
        />
				<Input
					type="number"
					name="temp_now"
					label="Temp (Nowcast)"
					placeholder="°F"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="number"
					name="wind_sp_now"
					label="Wind Speed (Nowcast)"
					placeholder="mph"
					formValues={formValues}
					setValue={updateFormValues}
				/>
					<Input
					type="text"
					name="wind_dir_now"
					label="Wind Direction (Nowcast)"
					placeholder="N>S"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="text"
					name="sky_cover_now"
					label="Sky Cover (Nowcast)"
					placeholder="OVC"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="text"
					name="precip_now"
					label="Preciptiation (Nowcast)"
					placeholder="OVC"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="number"
					name="temp_fore"
					label="Temp (Forecast)"
					placeholder="°F"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="number"
					name="wind_sp_fore"
					label="Wind Speed (Forecast)"
					placeholder="mph"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="text"
					name="wind_dir_fore"
					label="Wind Direction (Forecast)"
					placeholder="N>S"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="text"
					name="sky_cover_fore"
					label="Sky Cover (Forecast)"
					placeholder="OVC"
					formValues={formValues}
					setValue={updateFormValues}
				/>
				<Input
					type="text"
					name="precip_fore"
					label="Preciptiation (Forecast)"
					placeholder="OVC"
					formValues={formValues}
					setValue={updateFormValues}
				/>


				<TextArea name="weather_contribution" formValues={formValues} setValue={updateFormValues} hint="What weather factors could affect snowpack today?" />

        <div>
          <label>Trend</label>
          {["Improving", "Maintaining", "Deteriorating"].map(
            (elOption, elOptionIndex) => {
              const elFieldId = `trend-${elOptionIndex}`;
              const currentValue = formValues.trend;
              const isChecked = currentValue === elOption;
              const onChange = () => updateFormValues("trend", elOption);

              return (
                <div key={elFieldId}>
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
                <div key={elFieldId}>
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
				<TextArea name="terrain_avoiding" formValues={formValues} setValue={updateFormValues} hint="What terrain am I avoiding today and why?"/>
				<TextArea name="obs_fore_summary" label="Observation and Forcast Discussion" formValues={formValues} setValue={updateFormValues} hint="Synthesize your observations and the avalanche forecast and discuss with your partners." />
				<TextArea name="tour_plan" formValues={formValues} setValue={updateFormValues} />
				<TextArea name="emergency_plan" formValues={formValues} setValue={updateFormValues} hint="Plan in case of emergency" />

        <button type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default PlanForm;
