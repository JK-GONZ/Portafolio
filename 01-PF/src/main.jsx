import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * TODO: LISTA DE COSAS QUE FALTAN POR HACER O POR MEJORAR
 *      ! Hacer página responsive
 *      ! Automatizar los campos del nav en relación con el .json ✅
 *      ! Hacer página reutilizable para las opciones del nav
 */
