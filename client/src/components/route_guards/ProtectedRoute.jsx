import { Navigate, Outlet } from "react-router";
import useUser from "../../hooks/useUser";

export default function ProtectedRoute(){
    const { isAuthenticated } = useUser();

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
};