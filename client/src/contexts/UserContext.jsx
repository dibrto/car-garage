import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

const UserContext = createContext({
    user: {
        email: ""
        , password: ""
        , accessToken: ""
        , profilePicture: ""
        , _id: ""
    }
    , isAuthenticated: false
    , register() {}
    , login() {}
    , logout () {}
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const { fetchData } = useFetch();
    const navigate = useNavigate();

    const register = async (userData) => {
        const response = await fetchData("auth", "register", "POST", userData);

        if (!response) {
            return;
        }

        setUser(response);
        navigate("/garages");
    }

    const login = async (userData) => {
        const response = await fetchData("auth", "login", "POST", userData);

        if (!response) {
            return;
        }

        setUser(response);
        navigate("/garages");
    };

    const logout = () => {
        // TODO: server req
        setUser(null);
        navigate("/");
    };

    const isAuthenticated = !!user;

    return (
        <UserContext.Provider value={{ user, register, login, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
