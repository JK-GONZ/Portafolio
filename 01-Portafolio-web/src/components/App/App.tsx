// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "@components/Header/Header.tsx";
import Aside from "@components/Aside/Aside.tsx";
import Footer from "@components/Footer/Footer.tsx";
import "@app/App.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


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





/* <Disclosure as="nav" className="bg-amber-600">
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        </DisclosurePanel>

    </Disclosure> */