import React, { useState } from "react";
import Layout from "./Layout";
import Seo from "./Seo";

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
    ates: [],
  });

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

  return (
		<Layout>
			<Seo title="New Tour Plan" />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(
						`form submitted with values: ${JSON.stringify(formValues, null, 2)}`
					);
				}}
			>
				<div>
					<label htmlFor="date">Date</label>
					<input
						name="date"
						id="date"
						type="date"
						value={formValues.date}
						onChange={(e) => updateFormValues("date", e.target.value)}
					></input>
				</div>
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
				<div>
					<label>Avalanche Observations</label>
					<textarea
						name="avalanche observations"
						id="avy_obs"
						onChange={(e) =>
							updateFormValues("avy_observations", e.target.value)
						}
					></textarea>
				</div>
				<div>
					<label>Snowpack Summary</label>
					<textarea
						name="snowpack summary"
						id="snowpack_summary"
						placeholder="What snowpack factors concern me and why?"
						onChange={(e) =>
							updateFormValues("snowpack_summary", e.target.value)
						}
					></textarea>
				</div>
				<div>
					<label>Temp (Nowcast)</label>
					<input
						type="number"
						id="temp_now"
						placeholder="°F"
						onChange={(e) =>
							updateFormValues("temp_now", `${e.target.value} °F`)
						}
					></input>
				</div>
				<div>
					<label>Wind Speed (Nowcast)</label>
					<input
						type="number"
						id="wind_sp_now"
						placeholder="mph"
						onChange={(e) =>
							updateFormValues("wind_sp_now", `${e.target.value} mph`)
						}
					></input>
				</div>
				<div>
					<label>Wind Direction (Nowcast)</label>
					<input
						type="text"
						id="wind_dir_now"
						onChange={(e) => updateFormValues("wind_dir_now", e.target.value)}
					></input>
				</div>
				<div>
					<label>Sky Cover (Nowcast)</label>
					<input
						type="text"
						id="sky_cover_now"
						onChange={(e) => updateFormValues("sky_cover_now", e.target.value)}
					></input>
				</div>
				<div>
					<label>Preciptiation (Nowcast)</label>
					<input
						type="text"
						id="precip_now"
						onChange={(e) => updateFormValues("precip_now", e.target.value)}
					></input>
				</div>
				<div>
					<label>Temp (Forecast)</label>
					<input
						type="number"
						id="temp_fore"
						placeholder="°F"
						onChange={(e) =>
							updateFormValues("temp_fore", `${e.target.value} °F`)
						}
					></input>
				</div>
				<div>
					<label>Wind Speed (Forecast)</label>
					<input
						type="number"
						id="wind_sp_fore"
						placeholder="mph"
						onChange={(e) =>
							updateFormValues("wind_sp_fore", `${e.target.value} mph`)
						}
					></input>
				</div>
				<div>
					<label>Wind Direction (Forecast)</label>
					<input
						type="text"
						id="wind_dir_fore"
						onChange={(e) => updateFormValues("wind_dir_fore", e.target.value)}
					></input>
				</div>
				<div>
					<label>Sky Cover (Forecast)</label>
					<input
						type="text"
						id="sky_cover_fore"
						onChange={(e) => updateFormValues("sky_cover_fore", e.target.value)}
					></input>
				</div>
				<div>
					<label>Preciptiation (Forecast)</label>
					<input
						type="text"
						id="precip_fore"
						onChange={(e) => updateFormValues("precip_fore", e.target.value)}
					></input>
				</div>
				<div>
					<label>Weather Contribution</label>
					<textarea
						name="weather contribution"
						id="weather_contribution"
						placeholder="What weather factors could affect snowpack today?"
						onChange={(e) =>
							updateFormValues("weather_contribution", e.target.value)
						}
					></textarea>
				</div>
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
				<div>
					<label>Terrain Avoiding </label>
					<textarea
						name="terrain avoiding"
						id="terrain_avoiding"
						placeholder="What terrain am I avoiding today and why?"
						onChange={(e) =>
							updateFormValues("terrain_avoiding", e.target.value)
						}
					></textarea>
				</div>
				<div>
					<label>Observation and Forcast Discussion </label>
					<textarea
						name="obs_fore_summary"
						id="obs_fore_summary"
						placeholder="Synthesize your observations and the avalanche forecast and discuss with your partners."
						onChange={(e) =>
							updateFormValues("obs_fore_summary", e.target.value)
						}
					></textarea>
				</div>
				<div>
					<label>Tour Plan</label>
					<textarea
						name="tour plan"
						id="tour_plan"
						placeholder="Tour Plan"
						onChange={(e) => updateFormValues("tour_plan", e.target.value)}
					></textarea>
				</div>
				<div>
					<label>Emergency Plan</label>
					<textarea
						name="emergency plan"
						id="emergency_plan"
						placeholder="Plan in case of emergency"
						onChange={(e) => updateFormValues("emergency_plan", e.target.value)}
					></textarea>
				</div>

				<button type="submit">Submit</button>
			</form>
		</Layout>
	);
}

export default PlanForm;
