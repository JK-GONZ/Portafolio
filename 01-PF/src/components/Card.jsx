import { useState } from 'react';

import './Card.css'

export function Card ({text, className}) {

    const [page, setPage] = useState(0)

    const name = <span>{text}</span>;

    const options = ["About me", "Projects", "Tech Stack", "Contact"]

    function handleClick (index) {
        setPage(index)
    }

    /**
     * TODO: Hacer rutas dinamicas con el array "options", para un futuro controlar todo solo con añadir o borrar cosas de una BD
     * ! Se ha cambiado a renderizado mendiante estados de la variable "page" que se modifica al pulsar los botones
     */

    return (
        <div id='container' className={className}>
        
            <nav><ul>{options.map((option, index) => <li><button onClick={ () => handleClick(index) }>{option}</button></li>)}</ul></nav>
            <hr></hr>
            <p>Pagina seleccionada = {options[page]}</p>
            {name}
        </div>
    )

}