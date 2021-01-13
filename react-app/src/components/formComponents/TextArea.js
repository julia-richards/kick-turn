import React from "react";
import { titleize } from "../../utils";

const TextArea = ({ name, label, formValues, setValue, placeholder, hint }) => {
	const title = label || titleize(name);

	return (
		<div style={{ display: "flex", flexDirection: "column", marginBottom: 10 }}>
			<label style={{ fontWeight: "bold" }} htmlFor={name}>
				{title}
			</label>
      {!!hint && <small>{hint}</small>}
			<textarea
				name={name}
				id={name}
				value={formValues[name]}
				onChange={(e) => setValue(name, e.target.value)}
				placeholder={placeholder || `${title}...`}
			/>
		</div>
	);
};

export default TextArea;
