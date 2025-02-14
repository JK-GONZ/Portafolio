// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from '@components/Header/Header.tsx';
import Aside from '@components/Aside/Aside.tsx';
import Footer from '@components/Footer/Footer.tsx';
import '@app/App.css';


function App() {
  return (
    <div id="App">
      <Header />
      {/* Section to display the aside in the success way */}
      <section className="container">
        <Aside />
        {/* <Content /> */}
        <div className="main">
          Div del contenido <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          accusantium, officiis quidem sed esse doloribus at vero quos id totam,
          quasi quo sequi aperiam ut repudiandae vel labore dignissimos?
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
