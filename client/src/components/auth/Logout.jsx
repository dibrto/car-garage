import { useEffect } from "react";
import useUser from "../../hooks/useUser";

export default function Logout(){
    const { logout } = useUser();

    useEffect(() => {
        logout();
    }, [logout]);

    return null;
};