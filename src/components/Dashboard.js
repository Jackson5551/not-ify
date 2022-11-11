import { useCookies } from "react-cookie"
import { NavLink, Outlet } from "react-router-dom"
import Player from "./Player"
import Playlists from "./Playlists"

export default function Dashboard () {
    const [cookies] = useCookies(['react-app'])
    return(
        <>
            <h1>You are authenticated</h1>
            <p>{cookies["react-app"]}</p>
            <NavLink to={`playlists`}>Playlists</NavLink>
            <div className="d-flex justify-content-between">
            <Outlet />
            {/* <Player trackUri={}></Player> */}
            </div>
        </>
    )
}