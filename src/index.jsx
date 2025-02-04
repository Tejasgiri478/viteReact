// Corrected index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import MyApp from "./MyApp"; // Import MyApp with correct case

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <MyApp /> {/* Use MyApp component with correct case */}
    </StrictMode>
)
