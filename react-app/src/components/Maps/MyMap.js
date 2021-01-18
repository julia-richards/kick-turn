import React, { useState } from "react";
import { fromJS } from "immutable";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import WithEditor from "./WithEditor";

// see https://github.com/mapbox/mapbox-gl-js/issues/10173#issuecomment-753662795
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  position: "absolute",
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px",
};

const DEFAULT_VIEWPORT = {
  longitude: -107.7232762,
  latitude: 37.8964126,
  zoom: 10,
  bearing: 0,
  pitch: 0,
};

const mapStyle = fromJS({
  version: 8,
  sources: {
    points: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-122.45, 37.78] },
          },
        ],
      },
    },
  },
  layers: [
    {
      id: "my-layer",
      type: "circle",
      source: "points",
      paint: {
        "circle-color": "#f00",
        "circle-radius": 4,
      },
    },
  ],
});

const MyMap = () => {
  const [geoFeatures, setGeoFeatures] = useState();
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v9"
      // mapStyle={mapStyle}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <div style={geolocateStyle}>
        <GeolocateControl />
      </div>
      <div style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>
      <div style={navStyle}>
        <NavigationControl />
      </div>
      <div style={scaleControlStyle}>
        <ScaleControl />
      </div>
    </MapGL>
  );
};

export default MyMap;
