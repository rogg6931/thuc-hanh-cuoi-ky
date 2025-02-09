import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import Header from "./layouts/Header.tsx";
import Footer from "./layouts/Footer.tsx";
import AuthProvider from "./contexts/AuthProvider.tsx";
import DarkProvider from "./contexts/DarkProvider.tsx";
import UserProvider from "./contexts/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DarkProvider>
            <AuthProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Header />
                        <App />
                        <Footer />
                    </BrowserRouter>
                </UserProvider>
            </AuthProvider>
        </DarkProvider>
    </StrictMode>
);
