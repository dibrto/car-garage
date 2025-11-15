import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
    const [phoneMenu, setPhomeMenu] = useState(false);

    return (
        <nav className="block py-4 w-full max-w-full rounded-none px-4 bg-transparent text-white shadow-none absolute z-50 border-0">

            {/* pc menu */}
            <div className="container mx-auto flex items-center justify-between">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit">Car garage</h6>
                <ul className="ml-10 hidden items-center gap-6 lg:flex">
                    <Navigation />
                </ul>
                <div className="hidden gap-2 lg:flex">
                    <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                    transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                    w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white 
                                    hover:bg-white/10 active:bg-white/30"
                        type="button"
                    >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i className="fa-brands fa-facebook text-base"></i>
                        </span>
                    </button>

                    <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                    transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                    w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white 
                                    hover:bg-white/10 active:bg-white/30"
                        type="button"
                    >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i className="fa-brands fa-instagram text-base"></i>
                        </span>
                    </button>

                    <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                    transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                    w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white 
                                    hover:bg-white/10 active:bg-white/30"
                        type="button"
                    >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i className="fa-brands fa-github text-base"></i>
                        </span>
                    </button>
                </div>

                <button type="button" onClick={() => setPhomeMenu(x => !x)}
                    className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                transition-all disabled:opacity-50 disabled:shadow-none
                                w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white 
                                hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden"
                   
                >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </span>
                </button>

            </div>

            {/* phone menu */}
            { phoneMenu && 
                <div className="block w-full basis-full overflow-hidden text-black" data-projection-id="3">
                    <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
                        <ul className="flex flex-col gap-4 text-blue-gray-900">
                            <Navigation />
                        </ul>
                        <div className="mt-4 flex gap-2">
                            <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                        transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                        w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs
                                        hover:bg-white/10 active:bg-white/30"
                                type="button"
                            >
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <i className="fa-brands fa-facebook text-base"></i>
                                </span>
                            </button>

                            <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                        transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                        w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs
                                        hover:bg-white/10 active:bg-white/30"
                                type="button"
                            >
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <i className="fa-brands fa-instagram text-base"></i>
                                </span>
                            </button>

                            <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase 
                                        transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                                        w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs
                                        hover:bg-white/10 active:bg-white/30"
                                type="button"
                            >
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <i className="fa-brands fa-github text-base"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
};