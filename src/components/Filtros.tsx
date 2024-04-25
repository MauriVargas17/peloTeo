// src/components/Filtros.tsx
import React, { useState } from 'react';

function Filtros() {
  const tiposActividades: string[] = ['Fútbol', 'Tenis', 'Vóley', 'eSports'];
  const [filtroActivo, setFiltroActivo] = useState<string | null>(null);

  const handleClick = (tipo: string) => {
    setFiltroActivo(tipo);
    // Lógica para filtrar eventos por tipo
    console.log('Filtrando por:', tipo);
  };

  return (
    <div className="my-4">
      {tiposActividades.map((tipo) => (
        <button
          key={tipo}
          className={`mr-2 px-4 py-2 rounded ${filtroActivo === tipo ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          style={{ backgroundColor: filtroActivo === tipo ? '#002D62' : '' }}
          onClick={() => handleClick(tipo)}
        >
          {tipo}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
