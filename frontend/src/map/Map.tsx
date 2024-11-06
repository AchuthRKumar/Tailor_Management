import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is imported

interface Location {
  latitude: number;
  longitude: number;
  display_name: string;
}

const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const getCurrentCityName = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setCurrentLocation({
      latitude,
      longitude,
      display_name: "Your current location",
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCurrentCityName,
        (error) => console.error("Error getting location: ", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!currentLocation) {
    return <p>Loading map...</p>;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}> {/* Ensure full-height and full-width */}
      <MapContainer
        key={`${currentLocation.latitude}-${currentLocation.longitude}`} // Re-render on location change
        center={[currentLocation.latitude, currentLocation.longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
          <Popup>{currentLocation.display_name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
