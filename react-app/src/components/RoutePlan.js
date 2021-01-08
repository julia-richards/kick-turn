import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Editor, DrawLineStringMode , DrawPointMode} from 'react-map-gl-draw';

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

function Map(REACT_APP_MAPBOX_ACCESS_TOKEN) {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <>
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      />
      </>
  );
}

export default Map