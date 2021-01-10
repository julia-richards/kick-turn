import * as React from "react";
import ReactMapGL from "react-map-gl";
import { Redirect } from "react-router-dom";
import {
	Editor,
	EditingMode,
	DrawLineStringMode,
	DrawPointMode,
	MeasureDistanceMode,
	ElevationMode,
	features,
} from "react-map-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import { addRoute } from "../services/routes";

const MODES = [
	{ id: "drawPolyline", text: "Draw Route", handler: DrawLineStringMode },
	{ id: "drawPoint", text: "Add Point", handler: DrawPointMode },
	{ id: "editing", text: "Edit Route", handler: EditingMode },
];

const DEFAULT_VIEWPORT = {
	width: 800,
	height: 600,
	longitude: -107.7232762,
	latitude: 37.8964126,
	zoom: 12,
};

function RouteForm() {
	const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
	const [modeId, setModeId] = React.useState("drawPolyline");
	const [modeHandler, setModeHandler] = React.useState(
		new DrawLineStringMode()
	);
	const [name, setName] = React.useState("");
	const [features, setFeatures] = React.useState();
	const [redirect, setRedirect] = React.useState();

	const switchMode = (evt) => {
		const mId = evt.target.value === modeId ? null : evt.target.value;
		const mode = MODES.find((m) => m.id === mId);
		// if real option selected,
		// - create new EditGeoJSON mode
		// - pass as prop to Editor
		const mHandler = mode ? new mode.handler() : null;
		setModeId(mId);
		setModeHandler(mHandler);
	};

	const handleSumbit = async (e) => {
		e.preventDefault();
		const params = { name, geo_features: features };
		const { id } = await addRoute(params);
		setRedirect(`/routes/${id}`);
	};

	if (redirect) {
		return <Redirect to={redirect} />;
	}

	return (
		<div style={{ width: "100%", height: 400 }}>
			<ReactMapGL
				{...viewport}
				width="100%"
				height="100%"
				mapStyle={"mapbox://styles/mapbox/light-v9"}
				onViewportChange={setViewport}
			>
				<Editor
					// to make the lines/vertices easier to interact with
					clickRadius={12}
					mode={modeHandler}
					onUpdate={(e) => setFeatures(e.data)}
				/>
				<div
					style={{ position: "absolute", top: 0, right: 5, maxWidth: "320px" }}
				>
					<select onChange={switchMode} value={modeId}>
						<option value="">--Please choose a draw mode--</option>
						{MODES.map((mode) => (
							<option key={mode.id} value={mode.id}>
								{mode.text}
							</option>
						))}
					</select>
				</div>
				{/* <div style={{ position: 'absolute', top: 100, right: 5, maxWidth: '320px' }}>
      <button type="button" onClick={() => console.log(features.deleteFeatures())}>Delete route</button>

        </div> */}
			</ReactMapGL>
			{/* <pre>features: {JSON.stringify(features, null, 2)}</pre> */}
			<form onSubmit={handleSumbit}>
				<div>
					<label htmlFor="name">Route Name</label>
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit">Save Route</button>
			</form>
		</div>
	);
}

export default RouteForm;
