import * as React from "react";
import ReactMapGL from "react-map-gl";
import {
  Editor,
  EditingMode,
  DrawLineStringMode,
  DrawPointMode,
} from "react-map-gl-draw";
import Controls from "./Controls";

// see https://github.com/mapbox/mapbox-gl-js/issues/10173#issuecomment-753662795
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MODES = [
  { id: "drawPolyline", text: "Draw Route", handler: DrawLineStringMode },
  { id: "drawPoint", text: "Add Point", handler: DrawPointMode },
  { id: "editing", text: "Edit Route", handler: EditingMode },
];

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const WithEditor = ({ viewport, setViewport, onUpdate }) => {
  const [modeId, setModeId] = React.useState("drawPolyline");
  const [modeHandler, setModeHandler] = React.useState(
    new DrawLineStringMode()
  );

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

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Controls />
      <Editor
        // to make the lines/vertices easier to interact with
        clickRadius={12}
        mode={modeHandler}
        onUpdate={onUpdate}
        featureStyle={({ feature, index, state }) =>
          feature.geometry.type === "LineString" && state === "INACTIVE"
            ? {
                stroke: "var(--primary-dark)",
                strokeDasharray: "4, 2",
                strokeWidth: 2,
                fill: "none",
                fillOpacity: 1,
              }
            : feature.geometry.type === "Point" && state === "INACTIVE"
            ? {
                stroke: "var(--primary-dark)",
                strokeDasharray: "4, 2",
                strokeWidth: 2,
                fill: "var(--primary-light)",
                fillOpacity: 0.4,
                r: 8,
              }
            : feature.geometry.type === "LineString"
            ? {
                stroke: "var(--primary-dark)",
                strokeWidth: 2,
                fill: "none",
                fillOpacity: 1,
              }
            : {
                stroke: "var(--primary-dark)",
                strokeDasharray: "4, 2",
                strokeWidth: 2,
                fill: "var(--primary-light)",
                fillOpacity: 0.4,
                r: 8,
              }
        }
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 5,
          maxWidth: "320px",
        }}
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
    </ReactMapGL>
  );
};

export default WithEditor;
