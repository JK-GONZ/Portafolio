import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@app/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="titulo">
        <h1>Portafolio</h1>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

