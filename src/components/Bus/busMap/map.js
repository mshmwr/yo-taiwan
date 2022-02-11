import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

const MapLayer = ({ geoFeature }) => {
  console.log(geoFeature);

  return (
    <div>
      <MapContainer
        center={geoFeature.center}
        zoom={geoFeature.zoom}
        scrollWheelZoom={true}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken="pk.eyJ1IjoiZWxzYTI3MDAiLCJhIjoiY2t2cXFjdmVqOGhzZDMxcXdnZjVjN3Z2ZiJ9.v1URgFZJDg6nNZ5nj5VgXQ"
        />

        {geoFeature.polyline === undefined ? null : (
          <Polyline
            pathOptions={geoFeature.pathOptions}
            positions={geoFeature.polyline}
          />
        )}
      </MapContainer>
    </div>
  );
};
export default MapLayer;
