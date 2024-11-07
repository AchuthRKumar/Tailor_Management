// src/Map/map.tsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface MapProps {
  onLocationChange: (lat: number, lng: number) => void; // Callback to pass the location up
}

const Map: React.FC<MapProps> = ({ onLocationChange }) => {
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        onLocationChange(latitude, longitude); // Pass location up to parent
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, [onLocationChange]);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '300px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentLocation && (
        <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
