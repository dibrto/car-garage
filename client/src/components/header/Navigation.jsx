import { Link } from "react-router";

export default function Navigation(){
    return (
        <>
            <li><Link to="/" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Home</Link></li>
            <li><Link to="/garages" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Garages</Link></li>
            <li><Link href="/login" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Login</Link></li>
            <li><Link href="/register" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Register</Link></li>
        </>
    );
};