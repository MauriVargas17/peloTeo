import { useState } from "react";

export interface ReservationAdmin {
    time_init: string,
    time_end: string,
    date: string,
    activity_location: string,
    client_name: string
}

export const ReservationAdminCard = ({reserva}: {reserva:ReservationAdmin}) => {
    const [status, setStatus] = useState<string>("Pending");
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">
                Reserva de {reserva.time_init} a {reserva.time_end}, el {reserva.date}
            </p>
            <p className="text-gray-600">A nombre de: {reserva.client_name}</p>
            <p className="text-gray-600">En {reserva.activity_location}</p>
            {status === "Confirmed" ? (
                <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => setStatus("Canceled")}
                >
                    Cancelar Reserva
                </button>
            ) : (
                <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setStatus("Confirmed")}
                >
                    Confirmar Reserva
                </button>
            )}
        </div>
    );
}