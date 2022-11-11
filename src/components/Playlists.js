import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, Outlet } from "react-router-dom";

export default function Playlists() {
    const [cookies] = useCookies(['react-app'])

    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        const token = cookies["react-app"]
        console.log(token)
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists?offset=0&limit=50",
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
            const { items } = response.data;
            console.log(items)
            const playlists1 = items.map(({ name, id }) => {
                // console.log({name, id})
                return { name, id };
            });
            setPlaylists(playlists1)
            console.log(playlists1)
        }
        getPlaylistData()
    }, [cookies])
    return (
        <>
        <ul>
            {playlists.map(({ name, id }) => {
                return (
                    <li key={id}>
                        {/* <a href={`https://open.spotify.com/playlist/${id}`}>{name}</a> */}
                        <NavLink to={`${id}`}>{name}</NavLink>

                    </li>
                )
            })}
            </ul>
            <Outlet></Outlet>
        </>
    )
}