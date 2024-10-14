
/**
 * * IMPORTS
 */
import './ProfileCard.css'

import JK_logo from '../assets/JK_logo.png'



export function ProfileCard ({ className }) {

    return (
        <div id='container' className={className}>
            <p>Profile Card</p>
            <div className="Profile_Img">
                <img src={JK_logo} alt="Profile Image" />
            </div>

            
            <p className="Campo">Jorge E. González Gonzalo</p>
            <p className="Campo1">adasd</p>
            <p className="Campo2">adsaddqwqda</p>
            <p className="Campo3">adasdqwdd</p>


        </div>
    )

}