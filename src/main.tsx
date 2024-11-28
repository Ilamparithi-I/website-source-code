import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import NetworkBackground from "./components/NetworkBackground.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NetworkBackground />
        <App />
    </StrictMode>
);
