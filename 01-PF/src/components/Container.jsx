/* IMPORTS */
import "./Container.css"
import { Card } from "./Card"
import { ProfileCard } from "./ProfileCard"


export function Container() {

    return (
        <>
            <div className="ContainerBlock">
                <ProfileCard className="grid1" />
                <Card className="grid2" text={"isdjaoidasidj"} />
            </div>
        </>
    )
}