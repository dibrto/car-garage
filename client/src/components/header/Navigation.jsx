import { NavLink } from "react-router";
import useUser from "../../hooks/useUser";

export default function Navigation(){
    const { isAuthenticated, user } = useUser();

    const baseClass = "block antialiased font-sans text-sm leading-normal text-inherit font-medium";
    const activeClass = baseClass + " border-b border-gray py-1 px-4 rounded-lg";
    return (
        <>
            <li><NavLink to="/" className={({isActive}) => isActive ? activeClass : baseClass}>Home</NavLink></li>
            <li><NavLink to="/garages" end className={({isActive}) => isActive ? activeClass : baseClass}>Community garages</NavLink></li>

            { !isAuthenticated 
                ? (
                    <>
                        <li><NavLink to="/login" className={({isActive}) => isActive ? activeClass : baseClass}>Login</NavLink></li>
                        <li><NavLink to="/register" className={({isActive}) => isActive ? activeClass : baseClass}>Register</NavLink></li>
                    </>
                )
                : (
                    <>
                        <li><NavLink to={`/garages/${user._garageId}`} end className={({isActive}) => isActive ? activeClass : baseClass}>My garage</NavLink></li>
                        <li><NavLink to="/logout" className={({isActive}) => isActive ? activeClass : baseClass}>Logout</NavLink></li>
                    </>
                )
            }
        </>
    );
};