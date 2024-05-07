import React, { useState } from 'react';
import tennisIcon from '../assets/tennis.png'; // Importa el icono de tennis
import soccerIcon from '../assets/soccer.png'; // Importa el icono de soccer
import volleyballIcon from '../assets/volley.png';
import runningIcon from '../assets/running.png'; // Importa el icono de running
import esportsIcon from '../assets/esports.png'; // Importa el icono de esports
import basketballIcon from '../assets/basketball.png'; // Importa el icono de basketball

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
    <div className="flex justify-center mt-4 space-x-4 bg-white rounded-lg p-4">
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'futbol' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('futbol')}
      >
        <img src={soccerIcon} alt="Fútbol" className="w-6 h-6 mx-auto mb-1" />
        Fútbol
      </button>
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'tennis' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('tennis')}
      >
        <img src={tennisIcon} alt="Tenis" className="w-6 h-6 mx-auto mb-1" />
        Tennis
      </button>
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'volley' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('volley')}
      >
        <img src={volleyballIcon} alt="Vóley" className="w-6 h-6 mx-auto mb-1" />
        Volley
      </button>
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'running' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('running')}
      >
        <img src={runningIcon} alt="Running" className="w-6 h-6 mx-auto mb-1" />
        Running
      </button>
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'esports' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('esports')}
      >
        <img src={esportsIcon} alt="Esports" className="w-6 h-6 mx-auto mb-1" />
        Esports
      </button>
      <button
        className={`px-4 py-2 rounded-full focus:outline-none font-bold ${categoriaSeleccionada === 'basketball' ? 'bg-red-600 text-white' : 'text-black'}`}
        onClick={() => handleClickCategoria('basketball')}
      >
        <img src={basketballIcon} alt="Basketball" className="w-6 h-6 mx-auto mb-1" />
        Basketball
      </button>
    </div>
  );
}

export default Filtros;