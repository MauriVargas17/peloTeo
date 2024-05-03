import { FaUserCircle, FaEnvelope } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import { ImageSlider } from '../components/ImageSlider';
import { BookingComponent } from '../components/BookingComponent';
import MapComponent from '../components/Mapita';
import { useState } from 'react';

export const ActivityPage = () => {
    const [showBooking, setShowBooking] = useState(false);
  // Funciones para manejar eventos, como hacer una reserva
  const handleReservation = () => {
    setShowBooking(!showBooking);
  };

  const contactOrganizer = () => {
    console.log("Contactar al organizador");
    // Aquí podrías agregar la lógica para abrir un chat o enviar un correo
  };

//   const actividad = {
//     "name": "",
//     "location": "",
//     "manager_name": "",
//     "manager_phone": "",
//     "time_init": "8:00",
//     "time_end": "22:00",
//     "days": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
// };

const bookings = [
  {"date": "2024-04-20", "time_init": "10:00", "time_end": "11:00"},
  {"date": "2024-05-03", "time_init": "8:00", "time_end": "9:00"},
  {"date": "2024-05-15", "time_init": "16:00", "time_end": "18:00"},
  {"date": "2024-04-19", "time_init": "14:00", "time_end": "15:00"},
  {"date": "2024-04-25", "time_init": "12:00", "time_end": "14:00"},
  {"date": "2024-04-17", "time_init": "9:00", "time_end": "10:00"},
  {"date": "2024-04-17", "time_init": "13:00", "time_end": "14:00"},
  {"date": "2024-04-18", "time_init": "14:00", "time_end": "16:00"},
  {"date": "2024-04-18", "time_init": "10:00", "time_end": "14:00"},
  {"date": "2024-04-19", "time_init": "9:00", "time_end": "10:00"},
  {"date": "2024-04-20", "time_init": "11:00", "time_end": "12:00"},
  {"date": "2024-04-21", "time_init": "8:00", "time_end": "9:00"},
  {"date": "2024-04-22", "time_init": "14:00", "time_end": "15:00"},
  {"date": "2024-04-23", "time_init": "11:00", "time_end": "12:00"},
  {"date": "2024-04-24", "time_init": "16:00", "time_end": "17:00"},
  {"date": "2024-04-25", "time_init": "13:00", "time_end": "14:00"},
  {"date": "2024-04-26", "time_init": "10:00", "time_end": "11:00"},
  {"date": "2024-04-27", "time_init": "15:00", "time_end": "16:00"},
  {"date": "2024-04-28", "time_init": "9:00", "time_end": "10:00"},
  {"date": "2024-04-29", "time_init": "14:00", "time_end": "15:00"},
  {"date": "2024-04-30", "time_init": "8:00", "time_end": "9:00"},
  {"date": "2024-04-30", "time_init": "11:00", "time_end": "12:00"},
  {"date": "2024-04-30", "time_init": "13:00", "time_end": "14:00"},
  {"date": "2024-04-30", "time_init": "16:00", "time_end": "17:00"},
  {"date": "2024-04-30", "time_init": "18:00", "time_end": "19:00"}
];

  return (
    <div>
        <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen bg-gray-100">
            <div className='w-full md:w-7/12'>
                <ImageSlider images={["/assets/sin_foto.jpg", "/assets/sin_foto.jpg", "/assets/sin_foto.jpg"]}/>
            </div>
            <div className='w-full md:w-5/12 flex flex-col'>
                <div id='information' className="bg-white p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-between">
                <div>
                    <FaUserCircle size="150" className="mx-auto text-gray-400" />
                    <h1 className="text-5xl font-bold text-center mt-2 mb-4">Cancha de Wally COE</h1>
                    <p className="text-2xl text-center font-semibold">Dirección: Calacoto, Av. Fuerza Naval,  Nº7808</p>
                    <MapComponent /> {/* Aquí se muestra el componente MapComponent */} 
                    <p className="text-2xl text-center font-semibold">Horario: 10:00-18:00.</p>
                    <p className="text-2xl text-center font-semibold">Organizador: Juan Perez</p>
                </div>
                <div className="mt-4">
                    <button onClick={contactOrganizer} className="flex items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full w-full text-xl">
                    <FaEnvelope className="mr-2" />
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
                <div className='w-ful'>
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
                }}/>
                </div>)}
    </div>
  );
};
