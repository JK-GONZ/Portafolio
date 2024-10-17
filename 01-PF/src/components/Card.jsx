import { useState } from "react";

import "./Card.css";

import { Content_Component } from "./Content_Component";

export function Card({ className, datos }) {
  const [page, setPage] = useState(0);

  console.log("Card:");
  console.log(datos.data);

  let options = [];

  datos.data.aside.map((option, index) => options.push(option.name));
  console.log(options);

  function handleClick(index) {
    setPage(index);
  }

  return (
    <div className={className}>
      <nav>
        <ul>
          {options.map((option, index) => (
            <li key={option.toString()}>
              <button onClick={() => handleClick(index)}>{option}</button>
            </li>
          ))}
        </ul>
      </nav>
      <hr></hr>
      <p>Pagina seleccionada = {options[page]}</p>

      <Content_Component option={options[page]} options={options} />
    </div>
  );
}
