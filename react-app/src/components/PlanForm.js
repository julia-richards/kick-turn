import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const initialAvyProblem = {
  typeId: "",
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
                  const currentElValues = formValues.avy_problems[problemIndex].elevation;
                  const isChecked = currentElValues.some((e) => e === elOption);
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
            <button type="button" onClick={() => updateFormValues("avy_problems", formValues.avy_problems.filter((_p, pIndex) => problemIndex !== pIndex))}
            >Remove Problem</button>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default PlanForm;
