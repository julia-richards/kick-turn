import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PlanForm() {
	const [formValues, setFormValues] = useState({
		date: "2021-01-01",
		avy_problems: [],
	});

	const updateFormValues = (fieldName, fieldValue) => {
		setFormValues({ ...formValues, [fieldName]: fieldValue });
	};

	return (
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
					<div key={problemIndex}>Avalanche Problem {problemIndex + 1}</div>
				))}

				<button
					type="button"
					onClick={() =>
						updateFormValues("avy_problems", [
							...formValues.avy_problems,
							{ value: "" },
						])
					}
				>
					Add Avalanche Problem
				</button>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default PlanForm;
