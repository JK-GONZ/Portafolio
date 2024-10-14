
/**
 * * IMPORTS
 */
import './ProfileCard.css'


import reactLogo from '../assets/react.svg'




export function ProfileCard ({ className }) {

    return (
        <div id='container' className={className}>
            <p>Profile Card</p>
            <div className="Profile_Img">
                <img src={reactLogo} alt="Profile Image" />
            </div>

            <p className="Campo">Jorge</p>
            <p className="Campo1">adasd</p>
            <p className="Campo2">adsaddqwqda</p>
            <p className="Campo3">adasdqwdd</p>


        </div>
    )

}