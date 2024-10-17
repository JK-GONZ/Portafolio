/* IMPORTS */
import "./Container.css";
import { Card } from "./Card";
import { ProfileCard } from "./ProfileCard";
import { useState, useEffect } from "react";
//import data from "../assets/data.json";

export function Container() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Container:");
  console.log(data);
  return (
    <>
      <div className="ContainerBlock">
        <ProfileCard className="grid1" datos={data} />
        <Card className="grid2" datos={data} />
      </div>
    </>
  );
}
