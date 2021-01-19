import * as React from "react";
import ReactMapGL from "react-map-gl";
import { Editor, ViewMode } from "react-map-gl-draw";
import Controls from "./Controls";

// see https://github.com/mapbox/mapbox-gl-js/issues/10173#issuecomment-753662795
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const DEFAULT_VIEWPORT = {
  width: 800,
  height: 600,
  longitude: -107.7232762,
  latitude: 37.8964126,
  zoom: 12,
};

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const StaticMap = ({ features, style = { height: 400 } }) => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);

  return (
    <div style={style}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Controls />
        <Editor mode={ViewMode} features={features} />
      </ReactMapGL>
    </div>
  );
};

export default StaticMap;
