// src/pages/Main.tsx
import React from 'react';
import Buscador from './Buscador';
import EventosDestacados from '../components/EventosDestacados';
import Filtros from './Filtros';
import Header from './Header';

function Main() {
    return (
        <div style={{ backgroundColor: '#99abc0' }}>
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="container mx-auto mt-8">
                    <h2 className="text-3xl font-semibold mb-4"></h2>
                    <div className="flex flex-col items-center">
                        <Buscador />
                        <Filtros />
                        <EventosDestacados />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
