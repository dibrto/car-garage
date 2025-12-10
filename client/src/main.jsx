import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import "./index.css"
import App from "./App.jsx"
import { UserProvider } from "./contexts/UserContext"
import { LoaderProvider } from "./contexts/LoaderContext"

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <LoaderProvider>
            <UserProvider>
                {/* <StrictMode> */}
                    <App />
                {/* </StrictMode> */}
            </UserProvider>
        </LoaderProvider>
    </BrowserRouter>
)