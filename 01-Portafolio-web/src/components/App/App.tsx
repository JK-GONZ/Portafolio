// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// import Header from '@components/Header/Header.tsx';
// import Aside from '@components/Aside/Aside.tsx';
import Footer from '@components/Footer/Footer.tsx';
import Nav from '@components/Nav/Nav.tsx';

function App() {
  return (
    <div className="flex h-full flex-col items-center">
      {/* <Header /> */}
      <Nav />
      {/* Section to display the aside in the success way */}
      <section className="mx-auto h-full max-w-7xl justify-between gap-6 px-2">
        {/* <Aside /> */}
        {/* <Content /> */}
        <div className="w-full rounded-2xl border-1 border-x-white">
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
