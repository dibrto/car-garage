import { Routes, Route } from "react-router"

import Home from "./components/home/Home"
import GarageList from "./components/garage/GaragesList"

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garages" element={<GarageList />} />
        </Routes>
    )
}