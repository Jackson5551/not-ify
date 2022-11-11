import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"
import Dashboard from "../components/Dashboard"

export default function Home () {
    const [cookies, setCookie, removeCookie] = useCookies(['react-app'])
    // const [res, setRes] = useState()
    // useEffect(()=>{
    //     const getPlaylists = async () =>{
    //         const response = axios.get("https://api.spotify.com/v1/me/playlists")
    //         setRes
    //     }
    // })
    return(
        <div className="container">
            {cookies['react-app'] ? <><Dashboard></Dashboard></> : <Link to='/login'>Login</Link>}
            
        </div>
    )
}