// src/components/EventosDestacados.tsx
import React from 'react';

import tennis from '../assets/tennismatch.jpg'
import volley from '../assets/volleymatch.jpg';
import soccer from '../assets/soccermatch.jpg';

interface EventoDestacado {
  nombre: string;
  imagen: string;
}

function EventosDestacados() {
  const eventosDestacados: EventoDestacado[] = [
    { nombre: 'Partido de Fútbol', imagen: soccer },
    { nombre: 'Torneo de Tenis', imagen: tennis },
    { nombre: 'Campeonato de Vóley', imagen: volley },
  ];

  return (
    <div className="my-4 overflow-x-scroll">
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {eventosDestacados.map((evento) => (
          <div key={evento.nombre} className="flex-shrink-0 w-64 rounded-lg overflow-hidden">
            <img src={evento.imagen} alt={evento.nombre} className="w-full h-auto rounded" />
            <div className="bg-white p-4">
              <p className="text-xl font-semibold mb-2">{evento.nombre}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ backgroundColor: '#002D62' }}>
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventosDestacados;
