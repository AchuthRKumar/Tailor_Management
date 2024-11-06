import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Location {
  latitude: number;
  longitude: number;
  display_name: string;
}

const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const getCurrentCityName = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    console.log("Latitude and Longitude from Geolocation:", latitude, longitude);
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
        (error) => console.error("Error getting location: ", error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    console.log("Updated Current Location:", currentLocation);
  }, [currentLocation]);

  if (!currentLocation) {
    return <p>Loading map...</p>;
  }

  return (
    <MapContainer
      center={[currentLocation.latitude, currentLocation.longitude]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>{currentLocation.display_name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;