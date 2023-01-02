import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"

const LocationMarker = (props) => {

    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound",
                        function (e) {
                            setPosition(e.latlng);
                            map.flyTo(e.latlng, map.getZoom());
                            console.log("e.latlng: " +  e.latlng);
                        }
        );
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          You are here. <br />
        </Popup>
      </Marker>
    );
        
}
export default LocationMarker;
