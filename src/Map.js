import React from "react";
import "./Map.css";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  //   console.log("oooo", countries, casesType);
  return (
    <div className="map">
      <LeafletMap>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {console.log("oo", countries, casesType)} */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;

// import { MapContainer as LeafletMap,TileLayer,useMap } from "react-leaflet";
// function ChangeMap({ center, zoom }) {
//   const map = useMap();
//   map.setView(center, zoom);
//   return null;
// }

// function Map({ center, zoom }) {
//   return (
//     <div className="map">
//       <LeafletMap>
//         <ChangeMap center={center} zoom={zoom} />
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         ></TileLayer>
//       </LeafletMap>
//     </div>
//   );
// }
