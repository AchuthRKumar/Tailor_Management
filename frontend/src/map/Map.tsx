// src/Map/map.tsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  onLocationChange: (lat: number, lng: number) => void;
}

// Fix for marker icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const RecenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  map.setView([lat, lng], 13); // Recenter map with updated location
  return null;
};

const Map: React.FC<MapProps> = ({ onLocationChange }) => {
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        onLocationChange(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, [onLocationChange]);

  return (
    <MapContainer
      center={currentLocation ? [currentLocation.latitude, currentLocation.longitude] : [51.505, -0.09]}
      zoom={13}
      style={{ width: '100%', height: '300px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)', borderRadius: '8px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && (
        <>
          <RecenterMap lat={currentLocation.latitude} lng={currentLocation.longitude} />
          <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
            <Popup>Your Location</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default Map;
