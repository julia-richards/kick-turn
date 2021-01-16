import React, { useState } from "react";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

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

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 6.30953127139638,
    longitude: 14.808780033196266,
    zoom: 2.8,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="50vw"
      height="50vw"
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

export default Map;
