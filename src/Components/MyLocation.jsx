import { map } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";


const MyLocation = (props) => {

    let [lat, setLat] = useState(null)
    let [lng, setLng] = useState(null)
    let [LatLng, setLatLng] = useState(null)
       
        const options = {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
        
        function success(pos) {
            const crd = pos.coords;
            const crdLat = pos.coords.latitude;
            const crdLng = pos.coords.longitude;
            setLat(pos.coords.latitude);
            setLng(pos.coords.longitude);
            setLatLng([pos.coords.latitude, pos.coords.longitude]);
            console.log("LatLng: " + LatLng);
            console.log("Lat: " + lat);
            // console.log("Lat typeof: " + typeof(lat));
            console.log("Lng: " + lng);
            // console.log("Lng typeof: " + typeof(lng));
            console.log(".......");


        }
      
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };


        navigator.geolocation.watchPosition(success, error, options);


        return lat === null && lng === null ? null : (
            <div>
                <Marker position={[lat, lng]}>
                    <Popup>
                        <div>
                            <h3>Lat: </h3>
                            <b>{lat}</b>
                        </div>
                        <div>
                            <h3>Lng: </h3>
                            <b>{lng}</b>
                        </div>
                    </Popup>
                </Marker>
            </div>
        )
}
export default MyLocation;
