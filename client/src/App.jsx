import { Routes, Route } from "react-router"

import Home from "./components/home/Home"

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}