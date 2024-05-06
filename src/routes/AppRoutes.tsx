import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
import Main from "../components/Main";
import { AdminPage } from "../pages/AdminPage";
import Login from "../components/Login";
import Register from "../components/Register";
import { getReservations } from "../services/ReservationsService";
import { ActivityPage } from "../pages/ActivityPage";
import UserInfo from "../components/UserInfo";

export const AppRoutes = () => {
    const [token, setToken] = useState("");
    const [activity, setActivity] = useState("");
    return(
        <Routes>
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/info" element={ <UserInfo/>} />
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
                        <AdminPage reservas={getReservations(token)}/>
                    </PrivateRoute>
                }
            />
             <Route
                path="/details"
                element={
                    <PrivateRoute token={token}>
                        <ActivityPage activity={activity}/>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}