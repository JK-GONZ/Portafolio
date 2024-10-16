
/**
 * * IMPORTS
 */
import './ProfileCard.css'

import { useEffect, useState } from 'react'


import JK_logo from '../assets/JK_logo.png'

import { ProfileCard_field } from './ProfileCard_field'

// 
export function ProfileCard({ className = "grid1" }) {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error))
    })

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div id='container' className={className}>
            <p>Profile Card 🧑 </p>
        
            <div className="Profile_Img">
                <img src={data.data.profile.img_path} alt="Prueba data" />
            </div>

            {
                /**
                 * * Actualización de forma dinamica en momento de carga de los enlaces 🙌
                 */
            }
            {data.data.profile.links.map((option, index) =>
                <ProfileCard_field
                    name={option.logo_name}
                    logo_color={option.logo_color}
                    link={option.url}
                    className={option.logo_name + " " + index}
                />
            )}
        </div>
    )

}