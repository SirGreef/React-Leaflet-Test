import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import "./App.css";

import BaseCapas from "./Components/BaseLayers";
import useGeoLocation from "./Components/useGeoLocation";

import MyLocation from "./Components/MyLocation";
import LocationMarker from "./Components/MapLocateLocationMarker";
import { BtnMyLocation } from "./Components/BtnMyLocation";


export default function App() {

  const [center, setCenter] = useState({ lat: -33.57420766490681, lng: -70.58287190777753 });
  const ZOOM_LEVEL = 10;

  const mapRef = useRef();


  return (
    // <MapContainer center={[-33.57420766490681, -70.58287190777753]} zoom={14}>
    <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>

      <BaseCapas></BaseCapas>
      <button className="leaflet-control-mylocation" onClick={BtnMyLocation}>*</button>
    </MapContainer>
  );
};