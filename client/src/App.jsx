import { Routes, Route } from "react-router"

import Home from "./components/home/Home"
import GarageList from "./components/garage/GarageList"
import Header from "./components/header/Header"

export default function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="garages" >
                    <Route index element={<GarageList />} />
                    <Route path=":garageId/details" element={<div>test</div>} />
                </Route>

            </Routes>
        </>
    )
}