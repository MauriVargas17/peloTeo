import { ReservationAdmin } from "../components/ReservationAdminCard";

export const getReservations = () => {
    
    let reservations: ReservationAdmin[] = [
        {"time_init": "8:00", "time_end": "10:00", "date": "2024-05-02", "activity_location": "COE", "client_name": "Juan Perez"},
        {"time_init": "9:30", "time_end": "11:00", "date": "2024-05-03", "activity_location": "Sala de Conferencias A", "client_name": "María Rodríguez"},
        {"time_init": "14:00", "time_end": "16:00", "date": "2024-05-04", "activity_location": "Laboratorio 3", "client_name": "Carlos Gómez"},
        {"time_init": "10:30", "time_end": "12:00", "date": "2024-05-05", "activity_location": "Auditorio Principal", "client_name": "Ana López"},
        {"time_init": "13:30", "time_end": "15:00", "date": "2024-05-06", "activity_location": "Aula 101", "client_name": "Luis Torres"}
      ];
    return(
        reservations
    );
}