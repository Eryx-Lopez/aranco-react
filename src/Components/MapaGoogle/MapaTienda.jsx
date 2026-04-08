import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapaTienda = () => {
  const center = { lat: 20.735, lng: -103.372 }; 
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDp4C1KH0EYIPOxSWN5Wb4Twtf9xX7-jPs">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "250px", borderRadius: "8px" }}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <p className="mt-2 text-center font-semibold">Anillo Perif. Nte. Manuel Gómez Morín 2398, Constitución, 45180 Zapopan, Jal.</p>
    </div>
  );
};

export default MapaTienda;