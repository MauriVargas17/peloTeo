// src/pages/Main.tsx
import React, { useState } from 'react';
import Buscador from './Buscador';
import EventosDestacados from '../components/EventosDestacados';
import Filtros from './Filtros';
import Header from './Header';

function Main() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleCategoriaSeleccionada = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div style={{ backgroundColor: '#002d62' }}>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-white text-4xl font-semibold mb-8">Encuentra Tu Próxima Actividad</div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4"></h2>
          <div className="flex flex-col items-center">
            <Buscador />
            <Filtros onCategoriaSeleccionada={handleCategoriaSeleccionada} />
            <EventosDestacados categoriaSeleccionada={categoriaSeleccionada} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
