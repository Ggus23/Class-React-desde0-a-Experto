import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
    // Guarda el token (esto normalmente NO va aquí, pero lo hacemos para tu prueba)
    localStorage.setItem('token', JSON.stringify({ value: 'test' }));

    // Luego lo LEES
    const token = localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};