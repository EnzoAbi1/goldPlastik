import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression, LatLngTuple } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useTranslation } from 'react-i18next';
// Optional: Customize the marker icon
const customIcon   = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow ,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Map() {
  const position : LatLngTuple  = [51.505, -0.09]; // Replace with the coordinates of your desired location

  const {t} = useTranslation()
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false} // Disable map interaction
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          {t("MapInfo")}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;