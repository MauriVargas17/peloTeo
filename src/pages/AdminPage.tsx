import { useState } from "react";
import { ReservationAdmin, ReservationAdminCard } from "../components/ReservationAdminCard";

export const AdminPage = ({reservas }: {reservas:ReservationAdmin[]}) => {
    return (
        <div>
            {reservas.map(reserva => (
                <ReservationAdminCard reserva={reserva}/>
            ))}
        </div>
    );
}