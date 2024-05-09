import { useState } from 'react';
import Buscador from './Buscador';
import EventosDestacados from '../components/EventosDestacados';
import Filtros from './Filtros';

function Main() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleBusqueda = (termino: string) => {
    setBusqueda(termino);
  };

  const handleCategoriaSeleccionada = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div style={{ backgroundColor: '#002d62' }}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-white text-4xl font-semibold mb-8">¡Encuentra Tu Próxima Actividad!</div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4"></h2>
          <div className="flex flex-col items-center">
            <Buscador onBusqueda={handleBusqueda} />
            <Filtros onCategoriaSeleccionada={handleCategoriaSeleccionada} />
            <EventosDestacados busqueda={busqueda} categoriaSeleccionada={categoriaSeleccionada} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
