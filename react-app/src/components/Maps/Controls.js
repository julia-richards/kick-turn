import * as React from "react";
import {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

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

const Controls = () => (
  <>
    <div style={geolocateStyle}>
      <GeolocateControl />
    </div>
    <div style={fullscreenControlStyle}>
      <FullscreenControl />
    </div>
    <div style={navStyle}>
      <NavigationControl showCompass={false} />
    </div>
    <div style={scaleControlStyle}>
      <ScaleControl />
    </div>
  </>
);

export default Controls;
