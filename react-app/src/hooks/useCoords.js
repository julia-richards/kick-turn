import { useState, useEffect, useRef } from "react";

// based on https://gist.github.com/whoisryosuke/e3ad7f43924dec60a12e247efe743e70
const useCoords = () => {
  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
    timestamp: Date.now(),
  });
  const watchId = useRef(null);
  let mounted = true;

  const onCoordsLoaded = (event) => {
    if (mounted) {
      setCoords({
        lat: event.coords.latitude,
        lon: event.coords.longitude,
        timestamp: Date.now(),
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onCoordsLoaded);
    watchId.current = navigator.geolocation.watchPosition(onCoordsLoaded);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId.current);
    };
  }, [0]);

  return coords;
};

export default useCoords;
