export default function Home(){
    return (
         <>
            <nav className="block py-4 w-full max-w-full rounded-none px-4 bg-transparent text-white shadow-none absolute z-50 border-0">
                <div className="container mx-auto flex items-center justify-between">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit">Material Design</h6>
                    <ul className="ml-10 hidden items-center gap-6 lg:flex">
                        <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Home</a></li>
                        <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">About Us</a></li>
                        <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Contact Us</a></li>
                    </ul>
                    <div className="hidden gap-2 lg:flex"><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-facebook text-base"></i></span></button><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-instagram text-base"></i></span></button><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-github text-base"></i></span></button></div><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg></span></button>
                </div>
                <div className="block w-full basis-full overflow-hidden" style={{height: 0 + "px"}} data-projection-id="3">
                    <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
                        <ul className="flex flex-col gap-4 text-blue-gray-900">
                            <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Home</a></li>
                            <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">About Us</a></li>
                            <li><a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Contact Us</a></li>
                        </ul>
                        <div className="mt-4 flex gap-2"><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-facebook text-base"></i></span></button><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-instagram text-base"></i></span></button><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button"><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><i className="fa-brands fa-github text-base"></i></span></button></div>
                    </div>
                </div>
            </nav>
            <div className="relative min-h-screen w-full bg-cover bg-no-repeat" style={{backgroundImage: "url('https://bucket.material-tailwind.com/magic-ai/5047c695d8e41617b4b59ad104f0d925a2909e00b1822c20328b992a99c86022.jpg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/70"></div>
                <div className="grid min-h-screen px-8">
                    <div className="container relative my-auto mx-auto grid place-items-center text-center">
                        <h1 className="block antialiased tracking-normal font-sans font-semibold text-white text-3xl !leading-snug md:max-w-full lg:max-w-3xl lg:text-5xl">Template for Automotive</h1>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mt-2 mb-14 w-full max-w-3xl lg:mb-10">Explore our customizable template designed specifically for automotive businesses. Whether you run a car dealership, auto repair shop, or car rental service, our template has everything you need to create a professional online presence.</p>
                        <div><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">Contact us</button></div>
                    </div>
                </div>
            </div>
        </>
    );
};