import { Link } from "react-router";

export default function Navigation(){
    return (
        <>
            <li><Link to="/" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Home</Link></li>
            <li><Link to="/garages" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Garages</Link></li>
            <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Contact Us</a></li>
        </>
    );
};