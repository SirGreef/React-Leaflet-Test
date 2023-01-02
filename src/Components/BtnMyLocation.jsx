
import { Marker, Popup } from "react-leaflet";
import useGeoLocation from "./useGeoLocation";


export const BtnMyLocation = () => {

    const location = useGeoLocation();

    console.log("lat :" + location.coordinates.lat);
    console.log("lng :" + location.coordinates.lng);

    return (
        <div>
            <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
                <Popup>
                    <div>
                        <h3>Lat: </h3>
                        <b>{location.coordinates.lat}</b>
                    </div>
                    <div>
                        <h3>Lng: </h3>
                        <b>{location.coordinates.lng}</b>
                    </div>
                </Popup>
            </Marker>
        </div>
    )
};
