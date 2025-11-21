import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GarageList from "./components/garage_list/GarageList"
import GarageDetails from "./components/garage_details/GarageDetails"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

export default function App() {

    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />


                <Route path="garages" >
                    <Route index element={<GarageList />} />
                    <Route path=":garageId/details" element={<GarageDetails />} />
                </Route>

            </Routes>
        </>
    )
}