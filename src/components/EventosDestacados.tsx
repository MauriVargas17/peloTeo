import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import sportsImage from '../assets/sports.jpeg'; // Importa la imagen predeterminada

interface Actividad {
  id: number;
  name: string;
  sport: string;
  latitude: string;
  longitude: string;
  google_location?: string; // Hacer google_location opcional
  time_init: string;
  time_end: string;
  owner: string;
}

interface EventosDestacadosProps {
  busqueda: string;
  categoriaSeleccionada: string; // Nueva propiedad para recibir la categoría seleccionada
}

function EventosDestacados({ busqueda, categoriaSeleccionada }: EventosDestacadosProps) {
  const [actividades, setActividades] = useState<Actividad[]>([]);

  useEffect(() => {
    const obtenerActividades = async () => {
      try {
        const response = await axios.get<Actividad[]>('http://localhost:3000/activity');
        setActividades(response.data);
      } catch (error) {
        console.error('Error al obtener las actividades:', error);
      }
    };

    obtenerActividades();
  }, []);

  // Filtrar las actividades según el término de búsqueda y la categoría seleccionada
  const actividadesFiltradas = actividades.filter(actividad =>
    actividad.name.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaSeleccionada === '' || actividad.sport.toLowerCase() === categoriaSeleccionada.toLowerCase())
  );

  return (
    <div className="my-4 overflow-x-scroll">
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {actividadesFiltradas.map((actividad) => (
          <div key={actividad.id} className="flex-shrink-0 w-64 rounded-lg overflow-hidden">
            <img src={sportsImage} alt={actividad.name} className="w-full h-auto rounded" />
            <div className="bg-white p-4">
              <p className="text-xl font-semibold mb-2">{actividad.name}</p>
              <Link to={`/details/${actividad.id}`} style={{ backgroundColor: '#E21837' }} className="text-white border-2 border-002D62 px-4 py-2 rounded-full hover:bg-red-700 focus:outline-none focus:bg-red-700">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventosDestacados;
