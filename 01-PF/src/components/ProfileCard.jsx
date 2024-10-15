
/**
 * * IMPORTS
 */
import './ProfileCard.css'

import JK_logo from '../assets/JK_logo.png'

import { ProfileCard_field } from './ProfileCard_field'


/**
 * TODO: Campos para rellenar -> Componentes 
 */

export function ProfileCard ({ className }) {

    return (
        <div id='container' className={className}>
            <p>Profile Card</p>
            <div className="Profile_Img">
                <img src={JK_logo} alt="Profile Image" />
            </div>

            <ProfileCard_field name="github" logo_color="181717" link="https://github.com/JK-GONZ"/>
            
            <ProfileCard_field name="linkedin" logo_color="0A66C2" link="https://es.linkedin.com/in/jorge-enrique-gonz%C3%A1lez-gonzalo"/>
            
            


        </div>
    )

}