import { Link } from "react-router";
import useUser from "../../hooks/useUser";

export default function Home(){
    const { isAuthenticated } = useUser();

    return (
        <div className="grid min-h-screen px-8">
            <div className="container relative my-auto mx-auto grid place-items-center text-center">
                <h1 className="block antialiased tracking-normal font-sans font-semibold text-white text-3xl leading-snug! md:max-w-full lg:max-w-3xl lg:text-5xl">My garage</h1>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mt-2 mb-14 w-full max-w-3xl lg:mb-10">Manage and customize your personal collection of cars in one place.<br/> Add vehicles, explore detailed specs, and build your own digital garage with ease.</p>
                <div>

                { !isAuthenticated
                    ? (
                        <Link
                            to={"/register"}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
                        >
                            Register now
                        </Link>
                    )
                    : (
                        <Link
                            // TODO: add garage id
                            to={"/garages/id/details"}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
                        >
                            My garage
                        </Link>
                    )
                }
                </div>
            </div>
        </div>
    );
};