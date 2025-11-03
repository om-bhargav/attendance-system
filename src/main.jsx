import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/userContext.js";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
