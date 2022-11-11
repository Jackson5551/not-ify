

export default function Login (props) {
        const scope = [
            "streaming",
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
            "playlist-read-private",
        ];
    return(
        <>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <small>{process.env.REACT_APP_CLIENT_ID}</small>
            <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&show_dialog=true&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scope.join(" ")}`}>Authenticate</a>
        </>
    )
}