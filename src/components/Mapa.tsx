import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapaProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Mapa: React.FC<MapaProps> = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC2qZajToqbn_z2wcJOwaecPLSjhKJaLbM">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '350px' }}
        center={location}
        zoom={15}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
