import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "../components/Main";
import { AdminPage } from "../pages/AdminPage";
import Login from "../components/Login";
import Register from "../components/Register";
import { getReservations } from "../services/ReservationsService";
import { ActivityPage } from "../pages/ActivityPage";
import UserInfo from "../components/UserInfo";

export const AppRoutes = () => {
  const [token, setToken] = useState("");

  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route
        path="/home"
        element={
          <PrivateRoute token={token}>
            <Main />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin_page"
        element={
          <PrivateRoute token={token}>
            <AdminPage reservas={getReservations(token)} />
          </PrivateRoute>
        }
      />
      <Route
        path="/info"
        element={
          <PrivateRoute token={token}>
            <UserInfo token={token}/>
          </PrivateRoute>
        }
      />
      <Route
        path="/details/:id" // Cambiado para recibir el ID de la actividad
        element={
          <PrivateRoute token={token}>
            <ActivityPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
