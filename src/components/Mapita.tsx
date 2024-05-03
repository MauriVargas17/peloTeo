import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const location = { lat: 30.2672, lng: -97.7431 }; // Por ejemplo, Austin, Texas
const MapComponent: React.FC = () => {
    return (
      <LoadScript googleMapsApiKey="API-KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={location}
          zoom={10}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default MapComponent;
  