// src/components/EventosDestacados.tsx
import React from 'react';
import Tennis from '../assets/tennismatch.jpg'
import Futbol from '../assets/soccermatch.jpg'
import Volley from '../assets/volleymatch.jpg'
import { Link } from 'react-router-dom';

interface EventoDestacado {
  nombre: string;
  imagen: string;
  categoria: string;
}

interface EventosDestacadosProps {
  categoriaSeleccionada: string;
}

function EventosDestacados({ categoriaSeleccionada }: EventosDestacadosProps) {
  const eventos: EventoDestacado[] = [
    { nombre: 'Partido de Fútbol', imagen: Futbol, categoria: 'futbol' },
    { nombre: 'Torneo de Tenis', imagen: Tennis, categoria: 'tenis' },
    { nombre: 'Campeonato de Vóley', imagen: Volley, categoria: 'voley' },
  ];

  // Filtrar eventos según la categoría seleccionada
  const eventosFiltrados = eventos.filter(evento => evento.categoria === categoriaSeleccionada);

  return (
    <div className="my-4 overflow-x-scroll">
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {eventosFiltrados.map((evento) => (
          <div key={evento.nombre} className="flex-shrink-0 w-64 rounded-lg overflow-hidden">
            <img src={evento.imagen} alt={evento.nombre} className="w-full h-auto rounded" />
            <div className="bg-white p-4">
              <p className="text-xl font-semibold mb-2">{evento.nombre}</p>
              <Link to='/details' style={{ backgroundColor: '#E21837' }} className="text-white border-2 border-002D62 px-4 py-2 rounded-full hover:bg-red-700 focus:outline-none focus:bg-red-700">
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
