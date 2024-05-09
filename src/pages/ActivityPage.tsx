import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaUserCircle, FaWhatsapp } from 'react-icons/fa'; // Cambié FaEnvelope por FaWhatsapp
import { ImageSlider } from '../components/ImageSlider';
import { BookingComponent } from '../components/BookingComponent';
import MapComponent from '../components/Mapa'; // Importamos el componente de mapa
import upb from '../assets/cancha.jpg';
import upbeventos from '../assets/trofeos.jpg';

interface Actividad {
  id: number;
  name: string;
  sport: string;
  latitude: string;
  longitude: string;
  google_location?: string;
  time_init: string;
  time_end: string;
  owner: string;
}

export const ActivityPage = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState<Actividad | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleReservation = () => {
    setShowBooking(!showBooking);
  };

  const contactOrganizer = () => {
    console.log("Contactar al organizador");
    // Aquí podrías agregar la lógica para abrir un chat o enviar un correo
  };

  const bookings = [
    {"date": "2024-04-20", "time_init": "10:00", "time_end": "11:00"},
    {"date": "2024-05-03", "time_init": "8:00", "time_end": "9:00"},
    // Agrega aquí tus datos de reserva...
  ];

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get<Actividad>(`http://localhost:3000/activity/${id}`);
        setActivity(response.data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    };

    fetchActivity();
  }, [id]);

  if (!activity) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="white text-white min-h-screen"> {/* Cambié el color del texto a blanco */}
      <div className="flex flex-col md:flex-row items-stretch justify-center">
        <div className='w-full md:w-7/12'>
          <ImageSlider images={[upb, upbeventos]} />
        </div>
        <div className='w-full md:w-5/12 flex flex-col'>
          <div id='information' className="p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold text-center mt-2 mb-4" style={{ color: "#FFFFFF" }}>{activity.name}</h1>
              <p className="text-2xl text-center font-light">Dirección: {activity.google_location}</p>
              {/* Agregamos el componente de mapa aquí */}
              <div className="mt-8">
                <MapComponent location={{ lat: parseFloat(activity.latitude), lng: parseFloat(activity.longitude) }} />
              </div>
              <p className="text-2xl text-center font-light">Horario: {activity.time_init} - {activity.time_end}</p>
              <p className="text-2xl text-center font-light">Organizador: {activity.owner}</p>
            </div>
            <div className="mt-4">
            <button onClick={contactOrganizer} className="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full w-full text-xl text-white"> {/* Cambié el color del texto a blanco */}
              <FaWhatsapp className="mr-2" /> {/* Cambié el icono a WhatsApp */}
              Contacta al organizador
            </button>

              <button onClick={handleReservation} className="bg-red-600 text-white px-4 py-2 rounded-full w-full hover:bg-red-700 transition-colors text-xl">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>

      {showBooking && (
        <div style={{ backgroundColor: '#002d62' }} className='w-full'>
          <BookingComponent actividad={{
            "id": 0,
            "name": "",
            "location": "",
            "manager_name": "",
            "manager_phone": "",
            "time_init": "8:00",
            "time_end": "22:00",
            "days": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
            bookings: bookings
          }} />
        </div>
      )}
    </div>
  );
};
