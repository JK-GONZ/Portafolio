/**
 * * Imports
 */
import './ProfileCard_field.css'


export function ProfileCard_field({name = "github", logo_color, link}){

    console.log(name)
    var srcmodificada = "https://img.shields.io/badge/"+name+"-606060?style=for-the-badge&logo="+name+"&logoColor="+logo_color+"&color="+"rgba(11,76,126,0.46)"
    return (
        <>
            <a href={link}><img src={srcmodificada} alt={name}></img></a>
        </>
    )
}