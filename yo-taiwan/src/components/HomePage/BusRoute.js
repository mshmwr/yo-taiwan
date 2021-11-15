import React, { useState, useEffect } from "react";
import { doBusRouteShp } from "../../apis/searchApiRouteShp";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BusRoute = ({ selectBusRoute }) => {
  const [busRouteShp, setbusRouteShp] = useState();
  useEffect(() => {
    async function fetchData() {
      setbusRouteShp(await doBusRouteShp(selectBusRoute));
    }
    fetchData();
  }, [selectBusRoute]);

  const RenderMap = (loc) => {
    useEffect(() => {
      let container = L.DomUtil.get("map");
      if (container != null) {
        container._leaflet_id = null;
      }
      map();
    }, []);
    const map = () => {
      const midcoord = loc[Math.round(loc.length / 2)];
      const scale = 12 * loc.length * 0.59;
      let map;
      if (!map) {
        map = L.map("map").setView(midcoord, scale);
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
      L.polyline(loc).addTo(map);
    };
  };

  RenderMap([
    //測試座標
    [24.88114, 121.28804],
    [24.88114, 121.2804],
  ]);

  return (
    <div
      id="map"
      style={{
        height: "500px",
        width: "1200px",
        margin: "20px auto",
        display: "block",
        position: "absolute",
        top: "40px",
        right: "35px",
      }}
    ></div>
  );
};

export default BusRoute;
