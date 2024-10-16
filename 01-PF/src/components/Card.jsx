import { useState } from "react";

import "./Card.css";

import { Content_Component } from "./Content_Component";

export function Card({ className, datos }) {
  const [page, setPage] = useState(0);

  console.log("Card:");
  console.log(datos.data.content);

  const options = ["About me", "Projects", "Tech Stack", "Contact"]; // ! AUTOMATIZAR

  function handleClick(index) {
    setPage(index);
  }

  /**
   *
   * TODO: Hacer rutas dinamicas con el array "options", para un futuro controlar todo solo con añadir o borrar cosas de una BD ❌  DEPRECATED
   * ! Se ha cambiado a renderizado mendiante estados de la variable "page" que se modifica al pulsar los botones
   */

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
