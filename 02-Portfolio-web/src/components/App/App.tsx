import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@app/App.css";
import Header from "@components/Header/Header.tsx";
import Aside from "@components/Aside/Aside.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Aside />
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

const styles = {
  header: {
    "background-color": "gray",
  },
};

