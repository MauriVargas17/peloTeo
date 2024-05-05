// src/pages/Filtros.tsx
import React, { useState } from 'react';

interface FiltrosProps {
  onCategoriaSeleccionada: (categoria: string) => void;
}

function Filtros({ onCategoriaSeleccionada }: FiltrosProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleClickCategoria = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
    onCategoriaSeleccionada(categoria);
  };

  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button
        className={`bg-gray-300 px-4 py-2 rounded-full focus:outline-none ${categoriaSeleccionada === 'futbol' ? 'bg-red-600 hover:bg-red-700' : ''}`}
        onClick={() => handleClickCategoria('futbol')}
      >
        Fútbol
      </button>
      <button
        className={`bg-gray-300 px-4 py-2 rounded-full focus:outline-none ${categoriaSeleccionada === 'tenis' ? 'bg-red-600 hover:bg-red-700' : ''}`}
        onClick={() => handleClickCategoria('tenis')}
      >
        Tenis
      </button>
      <button
        className={`bg-gray-300 px-4 py-2 rounded-full focus:outline-none ${categoriaSeleccionada === 'voley' ? 'bg-red-600 hover:bg-red-700' : ''}`}
        onClick={() => handleClickCategoria('voley')}
        
      >
        Vóley
      </button>
    </div>
  );
}

export default Filtros;
