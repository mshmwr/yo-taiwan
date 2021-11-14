import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BusRoute = () => {
  const RenderMap = () => {
    useEffect(() => {
      let container = L.DomUtil.get("map");
      if (container != null) {
        container._leaflet_id = null;
      }
      map();
    }, []);

    const map = () => {
      let map;
      if (!map) {
        map = L.map("map").setView([24, 121], 12);
      }

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiZWxzYTI3MDAiLCJhIjoiY2t2cXFjdmVqOGhzZDMxcXdnZjVjN3Z2ZiJ9.v1URgFZJDg6nNZ5nj5VgXQ",
        }
      ).addTo(map);
    };
  };
  RenderMap();

  return (
    <div
      id="map"
      style={{ height: "500px", width: "1200px", margin: "20px auto" }}
    ></div>
  );
};

export default BusRoute;
