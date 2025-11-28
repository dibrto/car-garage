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
        const userInfo = await fetchData("auth", "register", "POST", userData);

        if (!userInfo) {
            return;
        }

        // get own garage id
        const garageInfo = await fetchData("data", "/garages?where=_ownerId%3D%224c8e2d3a-0d76-4a8f-9e2f-8d4c6680b4c1%22");      
        userInfo._garageId = garageInfo.at(0)._id;

        setUser(userInfo);
        navigate("/garages");
    }

    const login = async (userData) => {
        const userInfo = await fetchData("auth", "login", "POST", userData);

        if (!userInfo) {
            return;
        }

        // get own garage id
        const garageInfo = await fetchData("data", "/garages?where=_ownerId%3D%224c8e2d3a-0d76-4a8f-9e2f-8d4c6680b4c1%22");      
        userInfo._garageId = garageInfo.at(0)._id;

        setUser(userInfo);
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
