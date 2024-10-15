



/**
 * {option, options} -> Parametros para renderizado condicional
 */
export function Content_Component({option, options}) {

    if(option == options[0]){
        return (
        <>
            <p>Seleccionada la opcion: {option}</p>
        </>
        )
    } else if (option == options[1]){
        return (
            <>
                <p>Seleccionada la opcion: {option}</p>
            </>
            )
    }
    
    return(<>
        <p></p>
    </>)
}