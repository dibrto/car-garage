import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GarageList from "./components/garage_list/GarageList"
import GarageDetails from "./components/garage_details/GarageDetails"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Logout from "./components/auth/Logout"

export default function App() {

    return (
        <>
            <Header />
            
            <div className="relative min-h-screen w-full bg-cover bg-no-repeat" style={{backgroundImage: "url('https://bucket.material-tailwind.com/magic-ai/5047c695d8e41617b4b59ad104f0d925a2909e00b1822c20328b992a99c86022.jpg')"}}>
                <div className="absolute min-h-full w-full bg-gray-900/70"></div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="garages" >
                        <Route index element={<GarageList />} />
                        <Route path=":garageId/details" element={<GarageDetails />} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/logout" element={<Logout />} />

                </Routes>
            </div>
        </>
    )
}