// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "@components/Header/Header.tsx";
import Aside from "@components/Aside/Aside.tsx";
import "@app/App.css";

function App() {
  return (
    <>
      <Header />
      {/* Section to display the aside in the success way */}
      <section className="container">
        <Aside />
        {/* <Content /> */}
        <div style={{
          color: "black",
          zIndex:3.
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
        accusantium, officiis quidem sed esse doloribus at vero quos id totam,
        quasi quo sequi aperiam ut repudiandae vel labore dignissimos?

        </div>
      </section>
    </>
  );
}

export default App;

