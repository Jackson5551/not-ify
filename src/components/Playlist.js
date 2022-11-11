import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useParams } from "react-router-dom";
import Player from "./Player";

export default function Playlist({ listName }) {
    const [cookies] = useCookies(['react-app'])
    const [songs, setSongs] = useState([])
    const [trackUri, setTrackUri] = useState()
    let params = useParams()
    let currentPlaylistId = params.playlistId

    const token = cookies["react-app"]

    useEffect(() => {
        const getPlaylistSongs = async () => {
            const response = await axios.get(
                `https://api.spotify.com/v1/playlists/${currentPlaylistId}/tracks`,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                },
            )
            const { items } = response.data;
            const tracks = items.map(({ track }) => {
                return { track }
            })
            setSongs(tracks)
            console.log(tracks)
        }

        getPlaylistSongs()
    }, [cookies, token, currentPlaylistId])

    const handlePlayer = (uri) => {
        if (trackUri !== uri) setTrackUri(uri)
        else return
    }

    return (
        <div>
            <ul>
                {songs.map(({ track }) => {
                    return (
                        <>
                            <li
                                key={track.id}>
                                <button
                                    onClick={() => {setTrackUri(track.id)}}>
                                    {track.name}
                                </button>
                            </li>
                        </>
                    )
                })}
            </ul>
            {/* <Player trackUri={`spotify:track:0Puj4YlTm6xNzDDADXHMI9`}></Player> */}
            <Player trackUri={`spotify:track:${trackUri}`}></Player>
        </div>
    )
}