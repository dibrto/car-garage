import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const UserContext = createContext({
    user: {
        email: ""
        , password: ""
        , accessToken: ""
        , profilePicture: ""
        , _id: ""
    }
    , isAuthenticated: false
    , login() {}
    , logout () {}
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const { fetchData } = useFetch();

    const login = async (userData) => {
        const response = await fetchData("users/login", "POST", userData);
        setUser(response);
    };

    const logout = () => {
        // TODO: server req
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
