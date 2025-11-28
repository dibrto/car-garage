import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.jsx"
import "./index.css"
import { UserProvider } from "./contexts/userContext.jsx"

createRoot(document.getElementById("root")).render(
    <UserProvider>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </UserProvider>        
)