import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, token }: {children: any, token: any}) => {
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
