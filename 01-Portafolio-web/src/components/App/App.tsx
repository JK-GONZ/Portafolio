// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Header from '@components/Header/Header.tsx';
// import Aside from '@components/Aside/Aside.tsx';
import { Footer } from '@components/Footer/Footer.tsx';
import Nav from '@components/Nav/Nav.tsx';

export function App() {
  return (
    <div className="flex h-full flex-col items-center">
      {/* <Header /> */}
      <Nav />
      {/* Section to display the aside in the success way */}
      <section className="mx-auto h-full max-w-7xl justify-between gap-6 px-2">
        {/* <Aside /> */}
        {/* <Content /> */}
        <div className="w-full rounded-2xl border-1 border-x-white">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAPFBMVEU4QVJrc4BpcX48RFU1Pk9BSlo/R1hlbXo4QVFsc4FocH1aYnA/SFhETVxUXGo1P1BgaHZLVGNXX25OVmYdiIVzAAACF0lEQVR4nO3a226rMBRF0Rh8wRQwaf7/X0sJhJsxqSoVztlzPLXEipwl21qB3G4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4C9rW5hbOnsX1BdMqpcq7Pnsil2fUU0NUaYUbklLm7KlcSWTZ1GNQ6oNFNdL3chNGaF5JOZIaFDe3PYxIKkI3PnIY3dl9G1W/cEKxvBo40ddC62NlIBhPS1gIj2HpVOsXhuZJSR/k4yZrN5Ho3BhNUAP98Tq52WYpeiqY2/2HOTcF5VsW1S7dqLkHUe2xyi+ismdP6Kp0q5bYf3HhvgrKq2V70vVZU7uYvFQb+WIA3/l6syo1239hOYCK3jE+ktQsmr5rZXnqLWQILhaU8tMIt15kMq2q1HSoj0dTN6BfdOJLVhXde9/q5yqyY3ayv+QUmyo1Kft7eq8B3hVH7/Y/66rU7prq99+8a31K3n9FpErN91+xGFDLPdX1Zyoo5VZdKzt7vucxexkNmmr5v9jvgzpepWbWm/Mhc//tVKkkmVWhOg5mQ+SD5ESVShBYFTZ3pd4ksCokq9S+UlpVP6hSCdKqwlGVSpB1V++4SiVIenSjH8d57HOCFlWe/SYpQT9dCLGHDD8h5rGWUdk7uki8f93AGv7sLmdZe/Yn+DP5O2ynqqw1T9ZU31ds/9rZHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf9QVOkQ97VVwHnQAAAABJRU5ErkJggg=="
            // src="https://ca.slack-edge.com/T028W25JFK7-U07KBJ1NACW-d88cbb1d7ca2-512"
            className="float-left h-30 w-30 rounded-full shadow-(--shadow-img)"
          />
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
