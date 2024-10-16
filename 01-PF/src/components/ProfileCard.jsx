/**
 * * IMPORTS
 */
import "./ProfileCard.css";

import { useEffect, useState } from "react";

import { ProfileCard_field } from "./ProfileCard_field";

export function ProfileCard({ className = "grid1", datos = null }) {
  return (
    <div id="container" className={className}>
      <p>Profile Card 🧑 </p>

      <div className="Profile_Img">
        <img src={datos.data.profile.img_path} alt="Prueba data" />
      </div>

      {/**
       * * Actualización de forma dinamica en momento de carga de los enlaces 🙌
       */}
      {datos.data.profile.links.map((option, index) => (
        <ProfileCard_field
          name={option.logo_name}
          logo_color={option.logo_color}
          link={option.url}
          className={option.logo_name + " " + index}
          key={option.logo_name + " " + index}
        />
      ))}
    </div>
  );
}
