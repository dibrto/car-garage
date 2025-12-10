import { Navigate, Outlet } from "react-router";
import useUser from "../../hooks/useUser";

export default function GuestRoute(){
    const { isAuthenticated } = useUser();

    return (
        !isAuthenticated ? <Outlet /> : <Navigate to="/garages" />
    );
};