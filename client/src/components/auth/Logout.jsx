import useUser from "../../hooks/useUser";

export default function Logout(){
    const { logout } = useUser();

    logout();

    return null;
};