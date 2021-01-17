import React, { useState } from "react";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import WithEditor from "./WithEditor";

// try https://github.com/visgl/react-map-gl/issues/1266#issuecomment-758139857
// a 'cleaner' version of https://github.com/mapbox/mapbox-gl-js/issues/10173#issuecomment-753662795
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;

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

const Map1 = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
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

const Map2 = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v9"
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

const Map3 = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v10"
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

const DarkMap = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v10"
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

const OutdoorsMap = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
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

const Map = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridAutoRows: 400,
      margin: "2rem auto",
      gridGap: "2rem",
      minWidth: "100vw",
      minHeight: "100vh",
    }}
  >
    <Map1 />
    <Map2 />
    <Map3 />
    <DarkMap />
    <OutdoorsMap />
    <WithEditor />
  </div>
);

export default Map;
