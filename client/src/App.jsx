import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GarageList from "./components/garage_list/GarageList"
import GarageDetails from "./components/garage_details/GarageDetails"

export default function App() {

    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="garages" >
                    <Route index element={<GarageList />} />
                    <Route path=":garageId/details" element={<GarageDetails />} />
                </Route>

            </Routes>
        </>
    )
}