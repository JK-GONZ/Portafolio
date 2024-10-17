import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";

function App() {
  // Borrar <p> cuando el diseño esté definido
  return (
    <>
      <p style={{ display: "block", position: "absolute", top: 80 }}>App</p>
      <Container />
    </>
  );
}

export default App;
