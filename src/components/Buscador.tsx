// src/components/Buscador.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

function Buscador() {
  const [busqueda, setBusqueda] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de búsqueda
    console.log('Buscando:', busqueda);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 text-center">
      <input
        type="text"
        placeholder="Buscar eventos..."
        value={busqueda}
        onChange={handleChange}
        className="border border-002D62 bg-white-100 p-2 mr-2 rounded-lg focus:outline-none focus:border-002D62 text-lg font-semibold shadow-md text-black"
      />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700 shadow-md">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
