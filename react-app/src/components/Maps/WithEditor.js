import * as React from "react";
import ReactMapGL from "react-map-gl";
import {
  Editor,
  EditingMode,
  DrawLineStringMode,
  DrawPointMode,
} from "react-map-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";

const MODES = [
  { id: "drawPolyline", text: "Draw Route", handler: DrawLineStringMode },
  { id: "drawPoint", text: "Add Point", handler: DrawPointMode },
  { id: "editing", text: "Edit Route", handler: EditingMode },
];

const DEFAULT_VIEWPORT = {
  longitude: -107.7232762,
  latitude: 37.8964126,
  zoom: 12,
};

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const WithEditor = () => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
  const [modeId, setModeId] = React.useState("drawPolyline");
  const [modeHandler, setModeHandler] = React.useState(
    new DrawLineStringMode()
  );
  // const [name, setName] = React.useState("");
  const [features, setFeatures] = React.useState();

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
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Editor
        // to make the lines/vertices easier to interact with
        clickRadius={12}
        mode={modeHandler}
        onUpdate={(e) => setFeatures(e.data)}
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
