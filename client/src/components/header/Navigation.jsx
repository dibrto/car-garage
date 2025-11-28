import { Link } from "react-router";
import useUser from "../../hooks/useUser";

export default function Navigation(){
    const { isAuthenticated } = useUser();

    return (
        <>
            <li><Link to="/" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Home</Link></li>
            <li><Link to="/garages" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Community garages</Link></li>

            { !isAuthenticated 
                ? (
                    <>
                        <li><Link to="/login" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Login</Link></li>
                        <li><Link to="/register" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Register</Link></li>
                    </>
                )
                : (
                    <>
                        <li><Link to="/logout" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Logout</Link></li>
                    </>
                )
            }
        </>
    );
};