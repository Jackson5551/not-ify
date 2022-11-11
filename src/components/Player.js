import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";

export default function Player ({trackUri}) {
    const [cookies, setCookie, removeCookie] = useCookies(['react-app'])

    const [play, setPlay] = useState(false)

    useEffect(()=>{
        setPlay(true)
    }, [trackUri])
    
    return(
        <SpotifyWebPlayer
        token={cookies["react-app"]}
        showSaveIcon
        callback={state => !state.isPlaying && setPlay(false)}
        play={play}
        uris={trackUri ? trackUri : []}
        ></SpotifyWebPlayer>
    )
}