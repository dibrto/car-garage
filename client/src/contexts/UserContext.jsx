import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";

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
    const [user, setUser] = useLocalStorage(null, "user");
    const { fetchData } = useFetch();
    const navigate = useNavigate();

    const register = async (userData) => {
        const userInfo = await fetchData("auth", "register", "POST", userData);

        if (!userInfo) {
            return;
        }
        
        // create own garage
        const garageData = {
            accessToken: userInfo.accessToken
            , garageCover: "https://www.motozite.com/assets/front/images/No-Image.jpg"
            , _ownerId: userInfo._id
            , cars: []
        };
        const garageInfo = await fetchData("data", "garages", "POST", garageData);
        userInfo._garageId = garageInfo._id;

        setUser(userInfo);
        navigate("/garages");
    }

    const login = async (userData) => {
        const userInfo = await fetchData("auth", "login", "POST", userData);

        if (!userInfo) {
            return;
        }

        // get own garage
        const garageInfo = await fetchData("data", `/garages?where=_ownerId%3D%22${userInfo._id}%22`);
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
